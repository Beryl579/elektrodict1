/**
 * ElektroDict API Layer
 * Semua panggilan Groq lewat /api/chat — API key hanya di Vercel (GROQ_API_KEY).
 *
 * Model (sesuai konfigurasi proyek):
 * - llama-3.3-70b-versatile → chat ElektroBot, generator quiz, quote onboarding
 * - meta-llama/llama-4-scout-17b-16e-instruct → AI Vision (gambar)
 */

const VERCEL_URL = '/api/chat';

/** Teks: chatbot, quiz, onboarding */
const MODEL_TEXT = 'llama-3.3-70b-versatile';

/** Multimodal: analisis gambar soal / rangkaian */
const MODEL_VISION = 'meta-llama/llama-4-scout-17b-16e-instruct';

const TIMEOUT_TEXT_MS = 75000;
const TIMEOUT_VISION_MS = 120000;

/**
 * fetch dengan batas waktu — cegah hang yang mengunci UI.
 */
function fetchWithTimeout(url, options, timeoutMs) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), timeoutMs);
  return fetch(url, { ...options, signal: ctrl.signal }).finally(() => clearTimeout(id));
}

/**
 * Fungsi internal: POST payload ke proxy Vercel → Groq
 * @param {object} payload - body OpenAI-compatible (model, messages, …)
 * @param {number} [timeoutMs]
 */
async function callAI(payload, timeoutMs = TIMEOUT_TEXT_MS) {
  try {
    const response = await fetchWithTimeout(
      VERCEL_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      },
      timeoutMs
    );

    const rawText = await response.text();
    let data;
    try {
      data = rawText ? JSON.parse(rawText) : {};
    } catch (e) {
      throw new Error(rawText.slice(0, 200) || `HTTP ${response.status}`);
    }

    if (!response.ok) {
      const msg =
        data.error?.message ||
        data.message ||
        (typeof data === 'string' ? data : JSON.stringify(data).slice(0, 300));
      throw new Error(`HTTP ${response.status}: ${msg || response.statusText}`);
    }

    if (data.error && !data.choices) {
      throw new Error(data.error.message || JSON.stringify(data.error));
    }

    return data;
  } catch (error) {
    console.error('[ElektroDict API] Error:', error);
    if (error.name === 'AbortError') {
      throw new Error('Permintaan ke server habis waktu. Coba lagi atau cek koneksi.');
    }
    throw error;
  }
}

const ElektroAPI = {
  /**
   * ElektroBot — chat multi-turn (model teks).
   */
  async chat(messages, options = {}) {
    return await callAI(
      {
        model: options.model || MODEL_TEXT,
        messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.max_tokens ?? 1000,
        stream: false
      },
      TIMEOUT_TEXT_MS
    );
  },

  /**
   * Generator soal quiz pilihan ganda (model teks).
   */
  async generateQuiz(userPrompt) {
    return await callAI(
      {
        model: MODEL_TEXT,
        messages: [
          {
            role: 'system',
            content:
              'Kamu adalah generator soal teknik elektro. Selalu kembalikan HANYA JSON valid tanpa teks tambahan, tanpa markdown, tanpa blok kode.'
          },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 2000,
        stream: false
      },
      TIMEOUT_TEXT_MS
    );
  },

  /**
   * AI Vision — soal dari foto / skema (model multimodal).
   */
  async analyzeImage(imageB64, imageType, prompt) {
    return await callAI(
      {
        model: MODEL_VISION,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'image_url', image_url: { url: `data:${imageType};base64,${imageB64}` } },
              { type: 'text', text: prompt }
            ]
          }
        ],
        max_tokens: 4096,
        temperature: 0.3,
        stream: false
      },
      TIMEOUT_VISION_MS
    );
  },

  /**
   * Quote onboarding (model teks).
   */
  async fetchQuote(prompt) {
    return await callAI(
      {
        model: MODEL_TEXT,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
        temperature: 0.9,
        stream: false
      },
      TIMEOUT_TEXT_MS
    );
  },

  /** Konstanta untuk debug / konsistensi */
  MODEL_TEXT,
  MODEL_VISION
};

window.ElektroAPI = ElektroAPI;
