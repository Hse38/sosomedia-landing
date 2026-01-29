import { NextRequest, NextResponse } from 'next/server';

// Basit in-memory rate limit: IP başına 5 istek/dakika (production'da Redis vb. kullanın)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 5;

function getClientId(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(clientId);
  if (!entry) {
    rateLimitMap.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (now > entry.resetAt) {
    rateLimitMap.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const clientId = getClientId(req);
  if (!checkRateLimit(clientId)) {
    return NextResponse.json(
      { error: 'Çok fazla istek. Lütfen bir dakika sonra tekrar deneyin.' },
      { status: 429 }
    );
  }

  if (req.headers.get('content-type') !== 'application/json') {
    return NextResponse.json(
      { error: 'Content-Type: application/json gerekli' },
      { status: 400 }
    );
  }

  let body: { name?: string; email?: string; agency?: string; message?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Geçersiz JSON' },
      { status: 400 }
    );
  }

  // Honeypot: bot doldurursa reddet
  if (body.website?.trim()) {
    return NextResponse.json({ success: true });
  }

  const { name, email, agency, message } = body;
  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: 'Ad Soyad ve E-posta zorunludur.' },
      { status: 400 }
    );
  }

  // Email validasyonu (basit)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json(
      { error: 'Geçerli bir e-posta adresi girin.' },
      { status: 400 }
    );
  }

  const payload = {
    name: name.trim(),
    email: email.trim(),
    agency: agency?.trim() || undefined,
    message: message?.trim() || undefined,
  };

  const [emailResult, supabaseResult] = await Promise.all([
    import('@/app/lib/email').then((m) => m.sendDemoRequestEmail(payload)),
    import('@/app/lib/supabase').then((m) =>
      m.insertDemoRequest({
        name: payload.name,
        email: payload.email,
        agency: payload.agency ?? null,
        message: payload.message ?? null,
      })
    ),
  ]);

  if (process.env.NODE_ENV === 'development') {
    console.log('[Demo Request]', payload, { email: emailResult, supabase: supabaseResult });
  }

  const emailFailed = emailResult.ok === false;
  const supabaseFailed = supabaseResult.ok === false;
  if (emailFailed || supabaseFailed) {
    console.error('[Demo Request] Email:', emailResult.error, 'Supabase:', supabaseResult.error);
    return NextResponse.json(
      { error: 'Talebiniz alındı ancak bildirim kaydedilemedi. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
