export interface DemoRequestPayload {
  name: string;
  email: string;
  agency?: string;
  message?: string;
  website?: string; // honeypot
}

export async function submitDemoRequest(
  payload: DemoRequestPayload
): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/demo-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        error: (data as { error?: string }).error || 'Bir hata oluştu. Lütfen tekrar deneyin.',
      };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Bağlantı hatası. Lütfen tekrar deneyin.' };
  }
}
