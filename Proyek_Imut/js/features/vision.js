/**
 * AI Vision Module
 * Groq: meta-llama/llama-4-scout-17b-16e-instruct — batas base64 ~4MB; resize otomatis.
 */

let aivMode = 'soal';
let aivImageB64 = null;
let aivImageType = 'image/jpeg';

const MAX_VISION_EDGE_PX = 1280;
const MAX_BASE64_CHARS = 2_800_000;

/**
 * Kecilkan gambar agar lolos batas Groq / proxy (Canvas).
 */
function shrinkImageForApi(base64, mimeType) {
  return new Promise((resolve) => {
    const url = `data:${mimeType};base64,${base64}`;
    const img = new Image();
    img.onload = () => {
      try {
        let w = img.naturalWidth || img.width;
        let h = img.naturalHeight || img.height;
        if (w < 1 || h < 1) {
          resolve(base64);
          return;
        }
        if (w > MAX_VISION_EDGE_PX || h > MAX_VISION_EDGE_PX) {
          if (w >= h) {
            h = Math.round((h * MAX_VISION_EDGE_PX) / w);
            w = MAX_VISION_EDGE_PX;
          } else {
            w = Math.round((w * MAX_VISION_EDGE_PX) / h);
            h = MAX_VISION_EDGE_PX;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const outMime = mimeType === 'image/png' ? 'image/jpeg' : mimeType;
        const dataUrl = canvas.toDataURL(outMime, 0.88);
        const parts = dataUrl.split(',');
        resolve(parts[1] || base64);
      } catch (e) {
        console.warn('[Vision] shrink fallback', e);
        resolve(base64);
      }
    };
    img.onerror = () => resolve(base64);
    img.src = url;
  });
}

const AIV_PROMPTS = {
  soal: `Lo adalah tutor teknik elektro yang gaul dan sabar. User kirim foto soal ujian/latihan elektro.

Tugas lo:
1. Baca soal dari gambar dengan teliti
2. Jawab dengan langkah-langkah yang jelas (step-by-step)
3. Kalau ada rumus, tulis dengan jelas menggunakan format KaTeX: contoh \\(V = I \\times R\\)
4. Di akhir, kasih kesimpulan singkat
5. Gaya bahasa santai tapi akurat

Kalau gambar bukan soal elektro, bilang dengan sopan.`,

  rangkaian: `Lo adalah insinyur elektro berpengalaman yang gaul. User kirim foto rangkaian/skema/PCB elektro.

Tugas lo:
1. Identifikasi komponen yang keliatan (resistor, kapasitor, IC, dll)
2. Jelaskan fungsi masing-masing bagian
3. Jelaskan cara kerja rangkaian secara keseluruhan
4. Kalau bisa, sebutkan nilai komponen yang terbaca
5. Kasih info tambahan yang berguna
6. Gaya bahasa santai tapi teknis

Kalau gambar bukan rangkaian elektro, bilang dengan sopan.`
};

const ElektroVision = {
  /**
   * Set mode analisis (soal atau rangkaian)
   */
  setMode(btn, mode) {
    aivMode = mode;
    document.querySelectorAll('.aivm-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById('aiv-upload-sub').textContent = mode === 'soal'
      ? 'Format: JPG, PNG — foto soal ujian atau buku'
      : 'Format: JPG, PNG — foto skema, PCB, atau rangkaian';
  },

  /**
   * Handle file drop
   */
  handleDrop(e) {
    e.preventDefault();
    document.getElementById('aiv-upload').classList.remove('drag');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) this.handleFile(file);
  },

  /**
   * Proses file gambar
   */
  handleFile(file) {
    if (!file) return;
    aivImageType = file.type || 'image/jpeg';
    const reader = new FileReader();
    reader.onload = e => {
      const dataUrl = e.target.result;
      aivImageB64 = dataUrl.split(',')[1];
      document.getElementById('aiv-img').src = dataUrl;
      document.getElementById('aiv-preview').classList.add('show');
      document.getElementById('aiv-upload').style.display = 'none';
      document.getElementById('aiv-analyze-btn').disabled = false;
      document.getElementById('aiv-result').classList.remove('show');
      document.getElementById('aiv-loading').classList.remove('show');
    };
    reader.readAsDataURL(file);
  },

  /**
   * Analisis gambar dengan AI
   */
  async analyzeImage() {
    if (!aivImageB64) return;
    const btn = document.getElementById('aiv-analyze-btn');
    btn.disabled = true;
    
    document.getElementById('aiv-loading-txt').textContent = aivMode === 'soal'
      ? 'AI lagi baca soal lu... sabar ya 🧠'
      : 'AI lagi scan rangkaian lu... sebentar ⚡';
    document.getElementById('aiv-loading').classList.add('show');
    document.getElementById('aiv-result').classList.remove('show');

    try {
      let b64 = aivImageB64;
      let mime = aivImageType;
      if (b64.length > MAX_BASE64_CHARS) {
        document.getElementById('aiv-loading-txt').textContent = 'Ngecilin gambar dulu biar lancar... 📐';
        b64 = await shrinkImageForApi(b64, mime);
        if (mime === 'image/png') mime = 'image/jpeg';
      }

      const prompt = AIV_PROMPTS[aivMode];
      const data = await ElektroAPI.analyzeImage(b64, mime, prompt);
      
      const reply = data.choices?.[0]?.message?.content || "(Waduh, AI-nya lagi gak bisa jawab nih)";
      const bubble = document.getElementById('aiv-result-bubble');
      bubble.innerHTML = ElektroUtils.parseAIText(reply);
      
      setTimeout(() => ElektroUtils.renderAIVMath(bubble), 100);
      
      document.getElementById('aiv-loading').classList.remove('show');
      document.getElementById('aiv-result').classList.add('show');
      document.getElementById('aiv-result').scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (err) {
      console.error(err);
      document.getElementById('aiv-loading').classList.remove('show');
      const bubble = document.getElementById('aiv-result-bubble');
      bubble.innerHTML = `<span style="color:var(--rose)">⚠️ Gagal analisis: ${err.message}<br><br>Pastikan koneksi internet aktif dan coba lagi ya. Kalau masih gagal, mungkin file gambarnya kegedean.</span>`;
      document.getElementById('aiv-result').classList.add('show');
    } finally {
      btn.disabled = false;
    }
  },

  /**
   * Reset state vision
   */
  reset() {
    aivImageB64 = null;
    document.getElementById('aiv-img').src = '';
    document.getElementById('aiv-preview').classList.remove('show');
    document.getElementById('aiv-upload').style.display = 'block';
    document.getElementById('aiv-analyze-btn').disabled = true;
    document.getElementById('aiv-result').classList.remove('show');
    document.getElementById('aiv-loading').classList.remove('show');
    const inp = document.querySelector('#aiv-upload input');
    if (inp) inp.value = '';
  }
};

window.ElektroVision = ElektroVision;
