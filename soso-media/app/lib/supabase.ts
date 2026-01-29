/**
 * Supabase client (server-only). Demo taleplerini kaydetmek için.
 * NEXT_PUBLIC_SUPABASE_URL ve SUPABASE_SERVICE_ROLE_KEY env'leri ayarlanmalı.
 */

export type DemoRequestRow = {
  id?: string;
  name: string;
  email: string;
  agency?: string | null;
  message?: string | null;
  created_at?: string;
};

function getSupabaseUrl(): string | null {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || null;
}

function getSupabaseServiceKey(): string | null {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || null;
}

export function isSupabaseConfigured(): boolean {
  return !!(getSupabaseUrl() && getSupabaseServiceKey());
}

export async function insertDemoRequest(row: DemoRequestRow): Promise<{ ok: boolean; error?: string }> {
  const url = getSupabaseUrl();
  const key = getSupabaseServiceRoleKey();
  if (!url || !key) return { ok: true }; // skip if not configured

  try {
    const res = await fetch(`${url}/rest/v1/demo_requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        name: row.name,
        email: row.email,
        agency: row.agency || null,
        message: row.message || null,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || 'Supabase insert failed' };
    }
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Supabase error';
    return { ok: false, error: message };
  }
}

function getSupabaseServiceRoleKey(): string | null {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || null;
}
