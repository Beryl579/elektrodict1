/**
 * ElektroDict Quiz Module
 * AI Powered Question Generation & Scoring
 */

const QUIZ_CATS = {
  dasar: { emoji: '🔋', label: 'Komponen Dasar', desc: 'Resistor, Kapasitor, Induktor, Hukum Ohm' },
  semi: { emoji: '🔌', label: 'Semikonduktor', desc: 'Dioda, Transistor, IC, FET' },
  digital: { emoji: '🔢', label: 'Elektronika Digital', desc: 'Gerbang Logika, Flip-flop, Counter' },
  micro: { emoji: '🤖', label: 'Mikrokontroler', desc: 'Arduino, ESP32, Sensor, Aktuator' },
  power: { emoji: '⚡', label: 'Sistem Tenaga', desc: 'Transformator, Motor Listrik, Instalasi' }
};

let qCat='', qDiff='mudah', qList=[], qIdx=0, qScore=0, qWrong=0, qAnswered=[], qGenerating=false;

const ElektroQuiz = {
  init() {
    const catContainer = document.getElementById('quiz-cats');
    if (!catContainer) return;
    catContainer.innerHTML = Object.entries(QUIZ_CATS).map(([k,v])=>
      `<button class="qcat-btn" onclick="ElektroQuiz.selectCat(this,'${k}')">
        ${v.emoji} ${v.label}
       </button>`
    ).join('');
    
    // Load Mastery UI
    this.renderMasteryUI();
  },

  setDiff(btn, d) {
    qDiff = d;
    document.querySelectorAll('.qdiff-btn').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
  },

  selectCat(btn, c) {
    qCat = c;
    document.querySelectorAll('.qcat-btn').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    const startBtn = document.getElementById('quiz-start-btn');
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.textContent = `⚡ Mulai — ${QUIZ_CATS[c].label}`;
    }
  },

  async start() {
    if(!qCat || qGenerating) return;
    qGenerating = true;
    const cat = QUIZ_CATS[qCat];

    // reset UI
    const scoreEl = document.getElementById('quiz-score');
    const boxEl = document.getElementById('quiz-box');
    const navEl = document.getElementById('quiz-nav');
    const loadingEl = document.getElementById('quiz-loading');
    const startBtn = document.getElementById('quiz-start-btn');
    
    if (scoreEl) scoreEl.classList.remove('show');
    if (boxEl) boxEl.style.display = 'none';
    if (navEl) navEl.style.display = 'none';
    if (loadingEl) loadingEl.classList.add('show');
    const qlSub = document.getElementById('ql-sub');
    if (qlSub) qlSub.textContent = `Generate 5 soal · ${cat.label} · Level ${qDiff}`;
    if (startBtn) startBtn.disabled = true;

    const diffMap = {
      mudah:'tingkat kesulitan mudah (konsep dasar, hafalan, definisi)',
      sedang:'tingkat kesulitan sedang (perhitungan sederhana, aplikasi rumus)',
      sulit:'tingkat kesulitan sulit (analisis rangkaian, perhitungan multi-langkah, konsep lanjut)'
    };

    const prompt = `Kamu adalah pembuat soal teknik elektro profesional. Buat TEPAT 5 soal pilihan ganda tentang topik "${cat.label}" (${cat.desc}) dengan ${diffMap[qDiff]}.

PENTING — kembalikan HANYA JSON valid, tanpa teks lain, tanpa markdown, tanpa backtick:
{"soal":[{"q":"pertanyaan","opts":["A","B","C","D"],"ans":0,"exp":"penjelasan singkat mengapa jawaban benar"}]}

Aturan:
- "ans" adalah INDEX jawaban benar (0=A, 1=B, 2=C, 3=D)
- Soal dalam bahasa Indonesia yang jelas
- Pilihan jawaban harus masuk akal (jangan terlalu obvious)
- Penjelasan singkat tapi informatif
- Boleh pakai rumus dalam format teks biasa (misal: V=IR)
- Pastikan SEMUA 5 soal ada dalam array`;

    try {
      // callAI is defined in app.js or global
      const data = await callAI({
        model: API_MODEL,
        messages:[
          {role:'system', content:'Kamu adalah generator soal teknik elektro. Selalu kembalikan HANYA JSON valid tanpa teks tambahan apapun.'},
          {role:'user', content: prompt}
        ],
        temperature: 0.8,
        max_tokens: 2000
      });
      if(data.error) throw new Error(data.error.message);

      let raw = data.choices?.[0]?.message?.content || '';
      raw = raw.replace(/```json|```/g,'').trim();
      const match = raw.match(/\{[\s\S]*\}/);
      if(!match) throw new Error('Format JSON tidak valid dari AI');
      const parsed = JSON.parse(match[0]);
      if(!parsed.soal || parsed.soal.length === 0) throw new Error('Soal kosong');

      qList = parsed.soal;
      qIdx=0; qScore=0; qWrong=0; qAnswered=Array(qList.length).fill(null);

      if (loadingEl) loadingEl.classList.remove('show');
      if (boxEl) boxEl.style.display = 'block';
      if (navEl) navEl.style.display = 'flex';
      this.render();

    } catch(err) {
      if (loadingEl) loadingEl.classList.remove('show');
      if (boxEl) {
        boxEl.style.display = 'block';
        boxEl.innerHTML = `
          <div style="text-align:center;padding:32px 16px;color:var(--rose)">
            <div style="font-size:28px;margin-bottom:10px">😵</div>
            <div style="font-size:14px;font-weight:600;margin-bottom:6px">Gagal generate soal</div>
            <div style="font-size:12px;color:var(--text3)">${err.message}</div>
            <button class="quiz-start-btn" onclick="ElektroQuiz.start()" style="margin-top:16px;display:block;max-width:200px">🔄 Coba Lagi</button>
          </div>`;
      }
      if (startBtn) startBtn.disabled = false;
    } finally {
      qGenerating = false;
    }
  },

  render() {
    if(qIdx>=qList.length){this.showScore();return;}
    const q = qList[qIdx];
    const box = document.getElementById('quiz-box');
    if (!box) return;
    box.innerHTML = `
      <div class="q-num">SOAL ${qIdx+1} / ${qList.length} &nbsp;·&nbsp; ${QUIZ_CATS[qCat]?.label||qCat} &nbsp;·&nbsp; ${qDiff.toUpperCase()}</div>
      <div class="q-text" id="qtext">${q.q}</div>
      <div class="q-opts">
        ${q.opts.map((o,i)=>`
          <button class="qopt" id="qopt${i}" onclick="ElektroQuiz.answer(${i})">
            <span class="q-letter">${'ABCD'[i]}</span>
            <span id="qopttext${i}">${o}</span>
          </button>`).join('')}
      </div>
      <div class="q-explain" id="qexplain">💡 <strong>Penjelasan:</strong> <span id="qexptext"></span></div>`;
    
    setTimeout(()=>{
      if (typeof renderMath === 'function') {
        renderMath(document.getElementById('qtext'));
        q.opts.forEach((_,i)=>renderMath(document.getElementById('qopttext'+i)));
      }
    },50);

    if(qAnswered[qIdx]!==null) this.restoreAnswer(qIdx);
    this.updateNav();
  },

  answer(i) {
    if(qAnswered[qIdx]!==null) return;
    const q=qList[qIdx];
    const correct=q.ans;
    qAnswered[qIdx]=i;
    if(i===correct) qScore++; else qWrong++;
    for(let k=0;k<q.opts.length;k++){
      const btn=document.getElementById('qopt'+k);
      if (btn) {
        btn.disabled=true;
        if(k===correct) btn.classList.add('correct');
        else if(k===i) btn.classList.add('wrong');
      }
    }
    const expEl=document.getElementById('qexplain');
    if (expEl) {
      expEl.classList.add('show');
      const expText = document.getElementById('qexptext');
      if (expText) expText.textContent=q.exp;
      setTimeout(()=>{ if(typeof renderMath === 'function') renderMath(expEl); }, 50);
    }
    this.updateNav();
  },

  restoreAnswer(idx) {
    const q=qList[idx], chosen=qAnswered[idx];
    if(chosen===null) return;
    for(let k=0;k<q.opts.length;k++){
      const btn=document.getElementById('qopt'+k);
      if (btn) {
        btn.disabled=true;
        if(k===q.ans) btn.classList.add('correct');
        else if(k===chosen) btn.classList.add('wrong');
      }
    }
    const expEl=document.getElementById('qexplain');
    if (expEl) {
      expEl.classList.add('show');
      const expText = document.getElementById('qexptext');
      if (expText) expText.textContent=q.exp;
      setTimeout(()=>{ if(typeof renderMath === 'function') renderMath(expEl); }, 50);
    }
  },

  next() {
    if(qIdx<qList.length-1){
      qIdx++;
      this.render();
    } else {
      this.showScore();
    }
  },

  prev() {
    if(qIdx>0){
      qIdx--;
      this.render();
    }
  },

  updateNav() {
    const prevBtn = document.getElementById('qbtn-prev');
    const nextBtn = document.getElementById('qbtn-next');
    const qProg = document.getElementById('q-prog');

    if (prevBtn) prevBtn.disabled = qIdx===0;
    if (nextBtn) nextBtn.textContent = qIdx===qList.length-1 ? 'Lihat Skor 🏁' : 'Selanjutnya →';
    if (qProg) qProg.textContent = `${qAnswered.filter(x=>x!==null).length}/${qList.length} dijawab`;
  },

  showScore() {
    const scorePanel = document.getElementById('quiz-score');
    const boxEl = document.getElementById('quiz-box');
    const navEl = document.getElementById('quiz-nav');
    
    if (scorePanel) scorePanel.classList.add('show');
    if (boxEl) boxEl.style.display='none';
    if (navEl) navEl.style.display='none';

    const total=qList.length, pct=Math.round(qScore/total*100);
    const scPct = document.getElementById('sc-pct');
    const scFill = document.getElementById('sc-fill');
    const scC = document.getElementById('sc-c');
    const scW = document.getElementById('sc-w');
    const scT = document.getElementById('sc-t');

    if (scPct) scPct.textContent=pct+'%';
    if (scFill) scFill.style.width=pct+'%';
    if (scC) scC.textContent=qScore;
    if (scW) scW.textContent=qWrong;
    if (scT) scT.textContent=total;

    // Update Mastery Progress
    this.updateMastery(qScore, total);
  },

  // ── Mastery System (New Feature) ──
  loadMastery() {
    try {
      const raw = localStorage.getItem('elektrobot_mastery');
      return raw ? JSON.parse(raw) : { xp: 0, quizzes: 0, perfect: 0 };
    } catch(e) { return { xp: 0, quizzes: 0, perfect: 0 }; }
  },

  updateMastery(score, total) {
    const data = this.loadMastery();
    const xpGain = (score * 20) + (score === total ? 50 : 0);
    
    data.xp += xpGain;
    data.quizzes += 1;
    if (score === total) data.perfect += 1;
    
    localStorage.setItem('elektrobot_mastery', JSON.stringify(data));
    this.renderMasteryUI();

    // Show achievement bubble if perfect score
    if (score === total && xpGain > 0) {
      this.showMasteryToast(`🎉 Perfect Score! +${xpGain} XP`);
    }
  },

  renderMasteryUI() {
    const el = document.getElementById('quiz-mastery-container');
    if (!el) return;

    const data = this.loadMastery();
    const ranks = [
      { min: 0, name: 'Apprentice', emoji: '⚡', color: '#3ecf8e' },
      { min: 100, name: 'Technician', emoji: '🔧', color: '#4f9cf9' },
      { min: 300, name: 'Engineer', emoji: '⚙️', color: '#f5a623' },
      { min: 600, name: 'Master Architect', emoji: '🏛️', color: '#9b72e6' }
    ];

    let rank = ranks[0];
    for (let r of ranks) { if (data.xp >= r.min) rank = r; }

    const nextRank = ranks[ranks.indexOf(rank) + 1] || rank;
    const progressText = nextRank === rank ? 'Max Level' : `${data.xp} / ${nextRank.min} XP`;
    const progressPct = nextRank === rank ? 100 : ((data.xp - rank.min) / (nextRank.min - rank.min)) * 100;

    el.innerHTML = `
      <div class="mastery-card" style="border-left: 4px solid ${rank.color}">
        <div class="m-left">
          <div class="m-emoji">${rank.emoji}</div>
          <div class="m-info">
            <div class="m-rank">${rank.name}</div>
            <div class="m-sub">Ranking ElektroBot • ${data.quizzes} Latihan</div>
          </div>
        </div>
        <div class="m-right">
          <div class="m-xp">${progressText}</div>
          <div class="m-bar-bg"><div class="m-bar-fill" style="width: ${progressPct}%; background: ${rank.color};"></div></div>
        </div>
      </div>
    `;
  },

  showMasteryToast(msg) {
    const t = document.createElement('div');
    t.className = 'prj-toast show'; // Reuse existing toast style
    t.style.bottom = '80px';
    t.innerHTML = `<span>${msg}</span>`;
    document.body.appendChild(t);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
  },

  getScoreText() {
    const pct = document.getElementById('sc-pct')?.textContent || '0%';
    const benar = document.getElementById('sc-c')?.textContent || '0';
    const salah = document.getElementById('sc-w')?.textContent || '0';
    const total = document.getElementById('sc-t')?.textContent || '0';
    const cat = QUIZ_CATS[qCat]?.label || qCat;
    const diff = qDiff.charAt(0).toUpperCase()+qDiff.slice(1);
    const medal = parseInt(pct)>=80?'🏆':parseInt(pct)>=60?'🥈':'💪';
    return `${medal} Hasil Latihan ElektroDict\n\n⚡ Kategori: ${cat} (${diff})\n📊 Skor: ${pct}\n✅ Benar: ${benar}/${total}\n❌ Salah: ${salah}/${total}\n\n🔗 kamuselektro.tiiny.site`;
  },

  share() {
    const text = encodeURIComponent(this.getScoreText());
    window.open(`https://wa.me/?text=${text}`,'_blank');
  },

  copy() {
    const text = this.getScoreText();
    navigator.clipboard.writeText(text).then(()=>{
      const btn = event.target;
      if (btn) {
        const oldText = btn.textContent;
        btn.textContent='✅ Tersalin!';
        setTimeout(()=>btn.textContent=oldText,2000);
      }
    }).catch(()=>{
      alert(text);
    });
  },

  retry() {
    qGenerating = false; // ensure flag is reset
    this.start();
  },

  reset() {
    qCat = '';
    const startBtn = document.getElementById('quiz-start-btn');
    if (startBtn) {
      startBtn.disabled = true;
      startBtn.textContent = '⚡ Pilih Kategori dulu';
    }
    document.querySelectorAll('.qcat-btn').forEach(b=>b.classList.remove('on'));
    const scorePanel = document.getElementById('quiz-score');
    if (scorePanel) scorePanel.classList.remove('show');
  }
};

window.ElektroQuiz = ElektroQuiz;
