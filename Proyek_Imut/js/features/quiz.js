/**
 * Quiz Generator Module
 * Menangani pembuatan soal AI, interaksi quiz, dan skor.
 */

let qCat = '', qDiff = 'mudah', qList = [], qIdx = 0, qScore = 0, qWrong = 0, qAnswered = [], qGenerating = false;

const ElektroQuiz = {
  /**
   * Inisialisasi daftar kategori quiz di UI
   */
  init() {
    const container = document.getElementById('quiz-cats');
    if (!container) return;
    container.innerHTML = Object.entries(QUIZ_CATS).map(([k, v]) =>
      `<button class="qcat-btn" onclick="ElektroQuiz.selectCategory(this,'${k}')">
        ${v.emoji} ${v.label}
       </button>`
    ).join('');
  },

  /**
   * Pilih tingkat kesulitan
   */
  setDifficulty(btn, d) {
    qDiff = d;
    document.querySelectorAll('.qdiff-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
  },

  /**
   * Pilih kategori
   */
  selectCategory(btn, c) {
    qCat = c;
    document.querySelectorAll('.qcat-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const startBtn = document.getElementById('quiz-start-btn');
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.textContent = `⚡ Mulai — ${QUIZ_CATS[c].label}`;
    }
  },

  /**
   * Mulai generate soal dengan AI
   */
  async startAIQuiz() {
    if (!qCat || qGenerating) return;
    qGenerating = true;
    const cat = QUIZ_CATS[qCat];

    // Reset UI
    document.getElementById('quiz-score').classList.remove('show');
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('quiz-nav').style.display = 'none';
    document.getElementById('quiz-loading').classList.add('show');
    document.getElementById('ql-sub').textContent = `Generate 5 soal · ${cat.label} · Level ${qDiff}`;
    document.getElementById('quiz-start-btn').disabled = true;

    const diffMap = {
      mudah: 'tingkat kesulitan mudah (konsep dasar, hafalan, definisi)',
      sedang: 'tingkat kesulitan sedang (perhitungan sederhana, aplikasi rumus)',
      sulit: 'tingkat kesulitan sulit (analisis rangkaian, perhitungan multi-langkah, konsep lanjut)'
    };

    const prompt = `Kamu adalah ElektroBot, Senior Electronics Engineer dan expert pembuat soal ujian kompetensi teknik (SMK/D3/S1). 
Buat TEPAT 5 soal pilihan ganda tentang topik "${cat.label}" (${cat.desc}).

DOMAIN SOAL:
1. Logic: Analisis logika rangkaian.
2. Formulas: Gunakan perhitungan unit (V, I, R, P, F, H, dll).
3. Troubleshooting: Diagnosa kerusakan sirkuit (Sirkuit Putus, Short, dll).

DIFFICULTY LEVEL: ${qDiff.toUpperCase()}
- MUDAH: Konsep dasar, komponen, dan rumus dasar (V=IR).
- SEDANG: Aplikasi rumus, kombinasi seri/paralel, dan pembagi tegangan.
- SULIT: Analisis daya, reaktansi, desain sistem, dan troubleshooting multi-langkah.

JSON OUTPUT REQUIREMENT:
Kembalikan HANYA JSON valid tanpa teks penjelasan di luar JSON. Fokus pada akurasi unit.
Format:
{"soal":[{"q":"pertanyaan","opts":["A","B","C","D"],"ans":0,"exp":"penjelasan teknis kenapa jawaban benar"}]}

Rules:
- Gunakan LaTeX KaTeX ($...$ atau $$...$$) untuk SEMUA simbol fisik, satuan, dan rumus (misal: $V$, $I$, $R$, $\Omega$, $\pi$, $\mu F$, $10\text{V}$). 
- DILARANG menggunakan simbol unicode mentah seperti Ω atau π; gunakan \Omega dan \pi.
- Kembalikan HANYA JSON valid tanpa teks penjelasan di luar JSON. Fokus pada akurasi unit.
- Jangan gunakan markdown box, cukup raw JSON.`;

    try {
      const data = await ElektroAPI.generateQuiz(prompt);

      let raw = data.choices?.[0]?.message?.content || '';
      raw = raw.replace(/```json\s*|```\s*/gi, '').trim();

      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (_) {
        const start = raw.indexOf('{');
        const end = raw.lastIndexOf('}');
        if (start === -1 || end <= start) throw new Error('Format JSON tidak valid dari AI');
        parsed = JSON.parse(raw.slice(start, end + 1));
      }

      if (!parsed.soal || parsed.soal.length === 0) throw new Error('Soal kosong');

      qList = parsed.soal;
      qIdx = 0; qScore = 0; qWrong = 0; qAnswered = Array(qList.length).fill(null);

      document.getElementById('quiz-loading').classList.remove('show');
      document.getElementById('quiz-box').style.display = 'block';
      document.getElementById('quiz-nav').style.display = 'flex';
      this.renderQuestion();

    } catch (err) {
      console.error(err);
      document.getElementById('quiz-loading').classList.remove('show');
      document.getElementById('quiz-box').style.display = 'block';
      document.getElementById('quiz-box').innerHTML = `
        <div style="text-align:center;padding:32px 16px;color:var(--rose)">
          <div style="font-size:28px;margin-bottom:10px">😵</div>
          <div style="font-size:14px;font-weight:600;margin-bottom:6px">Gagal generate soal</div>
          <div style="font-size:12px;color:var(--text3)">${err.message}</div>
          <button class="quiz-start-btn" onclick="ElektroQuiz.startAIQuiz()" style="margin-top:16px;display:block;max-width:200px;margin-left:auto;margin-right:auto">🔄 Coba Lagi</button>
        </div>`;
      document.getElementById('quiz-start-btn').disabled = false;
    } finally {
      qGenerating = false;
    }
  },

  /**
   * Render soal ke DOM
   */
  renderQuestion() {
    if (qIdx >= qList.length) { this.showScore(); return; }
    const q = qList[qIdx];
    const box = document.getElementById('quiz-box');
    box.innerHTML = `
      <div class="q-num">SOAL ${qIdx + 1} / ${qList.length} &nbsp;·&nbsp; ${QUIZ_CATS[qCat]?.label || qCat} &nbsp;·&nbsp; ${qDiff.toUpperCase()}</div>
      <div class="q-text" id="qtext">${ElektroUtils.parseAIText(q.q)}</div>
      <div class="q-opts">
        ${q.opts.map((o, i) => `
          <button class="qopt" id="qopt${i}" onclick="ElektroQuiz.answerQuestion(${i})">
            <span class="q-letter">${'ABCD'[i]}</span>
            <span id="qopttext${i}">${ElektroUtils.parseAIText(o)}</span>
          </button>`).join('')}
      </div>
      <div class="q-explain" id="qexplain">💡 <strong>Penjelasan:</strong> <span id="qexptext"></span></div>`;
    
    // Render Math
    setTimeout(() => {
      ElektroUtils.renderMath(document.getElementById('qtext'));
      q.opts.forEach((_, i) => ElektroUtils.renderMath(document.getElementById('qopttext' + i)));
    }, 50);

    if (qAnswered[qIdx] !== null) this.restoreAnswer(qIdx);
    this.updateNav();
  },

  /**
   * Jawab soal
   */
  answerQuestion(i) {
    if (qAnswered[qIdx] !== null) return;
    const q = qList[qIdx];
    const correct = q.ans;
    qAnswered[qIdx] = i;

    if (i === correct) qScore++; else qWrong++;

    for (let k = 0; k < q.opts.length; k++) {
      const btn = document.getElementById('qopt' + k);
      btn.disabled = true;
      if (k === correct) btn.classList.add('correct');
      else if (k === i) btn.classList.add('wrong');
    }

    const expEl = document.getElementById('qexplain');
    expEl.classList.add('show');
    document.getElementById('qexptext').innerHTML = ElektroUtils.parseAIText(q.exp);
    setTimeout(() => {
      ElektroUtils.renderMath(document.getElementById('qtext'));
      q.opts.forEach((_, k) => ElektroUtils.renderMath(document.getElementById('qopttext' + k)));
      ElektroUtils.renderMath(expEl);
    }, 50);
    this.updateNav();
  },

  /**
   * Kembalikan state jawaban jika user navigasi balik
   */
  restoreAnswer(idx) {
    const q = qList[idx], chosen = qAnswered[idx];
    if (chosen === null) return;
    for (let k = 0; k < q.opts.length; k++) {
      const btn = document.getElementById('qopt' + k);
      btn.disabled = true;
      if (k === q.ans) btn.classList.add('correct');
      else if (k === chosen) btn.classList.add('wrong');
    }
    const expEl = document.getElementById('qexplain');
    expEl.classList.add('show');
    document.getElementById('qexptext').innerHTML = ElektroUtils.parseAIText(q.exp);
    setTimeout(() => {
      ElektroUtils.renderMath(document.getElementById('qtext'));
      q.opts.forEach((_, k) => ElektroUtils.renderMath(document.getElementById('qopttext' + k)));
      ElektroUtils.renderMath(expEl);
    }, 50);
  },

  /**
   * Navigasi soal
   */
  nextQuestion() { if (qIdx < qList.length - 1) { qIdx++; this.renderQuestion(); } else this.showScore(); },
  prevQuestion() { if (qIdx > 0) { qIdx--; this.renderQuestion(); } },

  /**
   * Update tombol navigasi
   */
  updateNav() {
    document.getElementById('qbtn-prev').disabled = qIdx === 0;
    const nextBtn = document.getElementById('qbtn-next');
    nextBtn.textContent = qIdx === qList.length - 1 ? 'Lihat Skor 🏁' : 'Selanjutnya →';
    document.getElementById('q-prog').textContent = `${qAnswered.filter(x => x !== null).length}/${qList.length} dijawab`;
  },

  /**
   * Tampilkan skor akhir
   */
  showScore() {
    document.getElementById('quiz-score').classList.add('show');
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('quiz-nav').style.display = 'none';
    const total = qList.length, pct = Math.round(qScore / total * 100);
    document.getElementById('sc-pct').textContent = pct + '%';
    document.getElementById('sc-fill').style.width = pct + '%';
    document.getElementById('sc-c').textContent = qScore;
    document.getElementById('sc-w').textContent = qWrong;
    document.getElementById('sc-t').textContent = total;
  },

  retryQuiz() { this.startAIQuiz(); },
  
  resetQuiz() {
    document.getElementById('quiz-score').classList.remove('show');
    document.getElementById('quiz-box').style.display = 'none';
    document.getElementById('quiz-nav').style.display = 'none';
    const startBtn = document.getElementById('quiz-start-btn');
    startBtn.disabled = !qCat;
    startBtn.textContent = qCat ? `⚡ Mulai — ${QUIZ_CATS[qCat].label}` : '⚡ Pilih Kategori dulu';
  }
};

window.ElektroQuiz = ElektroQuiz;
