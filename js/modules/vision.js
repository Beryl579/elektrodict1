/**
 * ElektroDict AI Vision Module
 * Handles Image uploading, Analyzing, and AI-powered tutor responses.
 */

const AIV_MODEL = 'meta-llama/llama-4-scout-17b-16e-instruct';
let aivMode = 'soal';
let aivImageB64 = null;
let aivImageType = 'image/jpeg';

const AIV_PROMPTS = {
  soal: `Lo adalah tutor teknik elektro yang gaul dan sabar. User kirim foto soal ujian/latihan elektro.
Tugas lo:
1. Baca soal dari gambar dengan teliti
2. Jawab dengan langkah-langkah yang jelas (step-by-step)
3. Kalau ada rumus, tulis dengan jelas: contoh V = I × R
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
  init() {
    this.reset();
  },

  setMode(btn, mode) {
    aivMode = mode;
    document.querySelectorAll('.aivm-btn').forEach(b=>b.classList.remove('on'));
    if (btn) btn.classList.add('on');
    const sub = document.getElementById('aiv-upload-sub');
    if (sub) {
      sub.textContent = mode==='soal'
        ? 'Format: JPG, PNG — foto soal ujian atau buku'
        : 'Format: JPG, PNG — foto skema, PCB, atau rangkaian';
    }
  },

  handleDrop(e) {
    e.preventDefault();
    const uploadArea = document.getElementById('aiv-upload');
    if (uploadArea) uploadArea.classList.remove('drag');
    const file = e.dataTransfer.files[0];
    if(file && file.type.startsWith('image/')) this.handleFile(file);
  },

  handleFile(file) {
    if(!file) return;
    aivImageType = file.type || 'image/jpeg';
    const reader = new FileReader();
    reader.onload = e => {
      const dataUrl = e.target.result;
      aivImageB64 = dataUrl.split(',')[1];
      const imgEl = document.getElementById('aiv-img');
      const previewEl = document.getElementById('aiv-preview');
      const uploadArea = document.getElementById('aiv-upload');
      const analyzeBtn = document.getElementById('aiv-analyze-btn');
      
      if (imgEl) imgEl.src = dataUrl;
      if (previewEl) previewEl.classList.add('show');
      if (uploadArea) uploadArea.style.display = 'none';
      if (analyzeBtn) analyzeBtn.disabled = false;
      
      const resultEl = document.getElementById('aiv-result');
      const loadingEl = document.getElementById('aiv-loading');
      if (resultEl) resultEl.classList.remove('show');
      if (loadingEl) loadingEl.classList.remove('show');
    };
    reader.readAsDataURL(file);
  },

  reset() {
    aivImageB64 = null;
    const imgEl = document.getElementById('aiv-img');
    const previewEl = document.getElementById('aiv-preview');
    const uploadArea = document.getElementById('aiv-upload');
    const analyzeBtn = document.getElementById('aiv-analyze-btn');
    const resultEl = document.getElementById('aiv-result');
    const loadingEl = document.getElementById('aiv-loading');
    
    if (imgEl) imgEl.src = '';
    if (previewEl) previewEl.classList.remove('show');
    if (uploadArea) uploadArea.style.display = 'block';
    if (analyzeBtn) analyzeBtn.disabled = true;
    if (resultEl) resultEl.classList.remove('show');
    if (loadingEl) loadingEl.classList.remove('show');
    
    const inp = document.querySelector('#aiv-upload input');
    if(inp) inp.value = '';
  },

  async analyze() {
    if(!aivImageB64) return;
    const btn = document.getElementById('aiv-analyze-btn');
    if (btn) btn.disabled = true;
    
    const loadingTxt = document.getElementById('aiv-loading-txt');
    const loadingEl = document.getElementById('aiv-loading');
    const resultEl = document.getElementById('aiv-result');
    
    if (loadingTxt) loadingTxt.textContent = aivMode==='soal'
      ? 'AI lagi baca soal lu... sabar ya 🧠'
      : 'AI lagi scan rangkaian lu... sebentar ⚡';
    if (loadingEl) loadingEl.classList.add('show');
    if (resultEl) resultEl.classList.remove('show');

    try {
      // callAI provided globally
      const data = await callAI({
        model: AIV_MODEL,
        messages:[{
          role:'user',
          content:[
            {type:'image_url', image_url:{url:`data:${aivImageType};base64,${aivImageB64}`}},
            {type:'text', text: AIV_PROMPTS[aivMode]}
          ]
        }],
        max_tokens: 1500,
        temperature: 0.3
      });
      
      if (loadingEl) loadingEl.classList.remove('show');
      if(data.error) throw new Error(data.error.message);
      
      const reply = data.choices?.[0]?.message?.content || '(tidak ada respons)';
      const bubble = document.getElementById('aiv-result-bubble');
      
      if (bubble) {
        if (typeof ElektroUtils !== 'undefined') {
          bubble.innerHTML = ElektroUtils.parseAIText(reply);
          setTimeout(() => ElektroUtils.renderMath(bubble), 100);
        } else {
          bubble.innerHTML = reply;
        }
      }
      
      if (resultEl) {
        resultEl.classList.add('show');
        resultEl.scrollIntoView({behavior:'smooth',block:'start'});
      }
    } catch(err){
      if (loadingEl) loadingEl.classList.remove('show');
      const bubble = document.getElementById('aiv-result-bubble');
      if (bubble) bubble.innerHTML = `<span style="color:var(--rose)">⚠️ Gagal analisis: ${err.message}<br><br>Pastikan koneksi internet aktif dan coba lagi.</span>`;
      if (resultEl) resultEl.classList.add('show');
    }
    if (btn) btn.disabled = false;
  }
};

window.ElektroVision = ElektroVision;
