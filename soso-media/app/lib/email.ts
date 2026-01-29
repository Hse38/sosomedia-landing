/**
 * Resend ile e-posta gönderimi.
 * RESEND_API_KEY ve DEMO_REQUEST_FROM_EMAIL env'leri ayarlanmalı.
 */
export async function sendDemoRequestEmail(params: {
  name: string;
  email: string;
  agency?: string;
  message?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.DEMO_REQUEST_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.DEMO_REQUEST_TO_EMAIL || process.env.DEMO_REQUEST_FROM_EMAIL;

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Email] RESEND_API_KEY yok, atlanıyor. Talepler loglanıyor.');
    }
    return { ok: true };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail || fromEmail,
        subject: `[SOSO MEDIA CO] Yeni demo talebi: ${params.name}`,
        html: `
          <h2>Yeni demo talebi</h2>
          <p><strong>Ad Soyad:</strong> ${params.name}</p>
          <p><strong>E-posta:</strong> ${params.email}</p>
          ${params.agency ? `<p><strong>Ajans:</strong> ${params.agency}</p>` : ''}
          ${params.message ? `<p><strong>Not:</strong><br/>${params.message.replace(/\n/g, '<br/>')}</p>` : ''}
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { ok: false, error: (err as { message?: string }).message || 'E-posta gönderilemedi.' };
    }
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'E-posta hatası';
    return { ok: false, error: message };
  }
}
