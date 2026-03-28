/**
 * ElektroDict API Layer
 * Memusatkan semua pemanggilan ke Groq API melalui serverless function Vercel.
 */

const VERCEL_URL = "/api/chat";
const DEFAULT_MODEL = "llama-3.3-70b-versatile";
const VISION_MODEL = "meta-llama/llama-4-scout-17b-16e-instruct";

/**
 * Fungsi internal untuk melakukan fetch ke API proxy
 */
async function callAI(payload) {
  try {
    const response = await fetch(VERCEL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      let errorDetail = "";
      try {
        const errJson = await response.json();
        errorDetail = errJson.error?.message || JSON.stringify(errJson);
      } catch (e) {
        errorDetail = await response.text();
      }
      throw new Error(`HTTP ${response.status}: ${errorDetail || response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[ElektroDict API] Error:', error);
    throw error;
  }
}

/**
 * Interface publik untuk fitur-fitur AI
 */
const ElektroAPI = {
  /**
   * Chat standar dengan ElektroBot
   */
  async chat(messages, options = {}) {
    return await callAI({
      model: options.model || DEFAULT_MODEL,
      messages: messages,
      temperature: options.temperature || 0.7,
      max_tokens: options.max_tokens || 1000
    });
  },

  /**
   * Generate soal quiz
   */
  async generateQuiz(prompt) {
    return await callAI({
      model: DEFAULT_MODEL,
      messages: [
        { role: 'system', content: 'Kamu adalah generator soal teknik elektro. Selalu kembalikan HANYA JSON valid tanpa teks tambahan apapun.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.8,
      max_tokens: 2000
    });
  },

  /**
   * Analisis gambar (AI Vision)
   */
  async analyzeImage(imageB64, imageType, prompt) {
    return await callAI({
      model: VISION_MODEL,
      messages: [{
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: `data:${imageType};base64,${imageB64}` } },
          { type: 'text', text: prompt }
        ]
      }],
      max_tokens: 1500,
      temperature: 0.3
    });
  },

  /**
   * Ambil quote onboarding
   */
  async fetchQuote(prompt) {
    return await callAI({
      model: DEFAULT_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.9
    });
  }
};

// Export secara global agar bisa diakses script lain tanpa modul (karena index.html pake script biasa)
window.ElektroAPI = ElektroAPI;
