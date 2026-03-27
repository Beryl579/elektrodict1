// ═══════════════════════════════════════════════════════════
// CONFIG — PRODUCTION SECURE MODE (Vercel Functions)
// ═══════════════════════════════════════════════════════════

const API_MODEL = "llama-3.3-70b-versatile";
const VERCEL_URL = "/api/chat";

async function callAI(payload) {
  try {
    const r = await fetch(VERCEL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (r.status === 404) {
      throw new Error("Vercel Function tidak ditemukan. Pastikan kamu men-deploy folder yang mengandung direktori /api/");
    }
    
    return await r.json();
  } catch(e) {
    console.error('[ElektroDict] Serverless Error:', e);
    return { error: { message: "Gagal terhubung ke Vercel Serverless Backend. Cek koneksi atau status deploy." } };
  }
}
const SYS = `Lo adalah ElektroBot — asisten AI teknik elektro yang gaul, asik, dan relate sama mahasiswa. Gaya ngomong lo santai kayak temen sendiri, pake bahasa sehari-hari (lu/gua), tapi tetep akurat secara teknis.`;

[... rest of app.js logic ...]