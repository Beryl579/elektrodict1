/**
 * ElektroDict API Layer
 * Semua panggilan Groq lewat /api/chat — API key hanya di Vercel (GROQ_API_KEY).
 */

(function() {
  const VERCEL_URL = '/api/chat';
  const MODEL_TEXT = 'llama-3.3-70b-versatile';
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
   */
  async function callAIBase(payload, timeoutMs = TIMEOUT_TEXT_MS) {
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
        const msg = data.error?.message || data.message || (typeof data === 'string' ? data : JSON.stringify(data).slice(0, 300));
        let line = msg || response.statusText;
        if (response.status === 404) {
          line = (line ? line + ' ' : '') + '— Backend API tidak ditemukan.';
        }
        throw new Error(`HTTP ${response.status}: ${line}`);
      }

      if (data.error && !data.choices) {
        throw new Error(data.error.message || JSON.stringify(data.error));
      }

      return data;
    } catch (error) {
      console.error('[ElektroDict API] Error:', error);
      if (error.name === 'AbortError') {
        throw new Error('Permintaan ke server habis waktu. Coba lagi.');
      }
      throw error;
    }
  }

  window.ElektroAPI = {
    VERCEL_URL,
    MODEL_TEXT,
    MODEL_VISION,
    
    async chat(messages, options = {}) {
      return await callAIBase({
        model: options.model || MODEL_TEXT,
        messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.max_tokens ?? 1000,
        stream: false
      }, TIMEOUT_TEXT_MS);
    },

    async generateQuiz(userPrompt) {
      return await callAIBase({
        model: MODEL_TEXT,
        messages: [
          { role: 'system', content: 'Kamu adalah generator soal teknik elektro. Selalu kembalikan HANYA JSON valid.' },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 2000,
        stream: false
      }, TIMEOUT_TEXT_MS);
    },

    async analyzeImage(imageB64, imageType, prompt) {
      return await callAIBase({
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
      }, TIMEOUT_VISION_MS);
    },

    async fetchQuote(prompt) {
      return await callAIBase({
        model: MODEL_TEXT,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
        temperature: 0.9,
        stream: false
      }, TIMEOUT_TEXT_MS);
    },

    async generateProject(idea) {
      try {
        const response = await fetchWithTimeout(
          '/api/project-gen',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idea })
          },
          TIMEOUT_TEXT_MS
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || "Gagal membuat proyek.");
        }

        return await response.json();

      } catch (error) {
        console.error('[ElektroAPI] Project Generation Error:', error);
        throw error;
      }
    }
  };
})();
