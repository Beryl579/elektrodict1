/**
 * ElektroDict Synthesizer Module
 * Web Audio API based Signal Generator and Oscilloscope.
 */

let audioCtx = null;
let oscillator = null;
let gainNode = null;
let analyser = null;
let dataArray = null;
let bufferLength = 0;
let animationId = null;
let synthPlaying = false;

const ElektroSynth = {
  init() {
    // Lazy init via user interaction
  },

  initContext() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) throw new Error("Not supported");
      
      audioCtx = new AudioContext();
      oscillator = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();
      analyser = audioCtx.createAnalyser();

      analyser.fftSize = 1024;
      bufferLength = analyser.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      oscillator.connect(analyser);
      analyser.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      gainNode.gain.value = 0.1;
      oscillator.type = 'sine';
      oscillator.frequency.value = 50;
      
      oscillator.start();
      audioCtx.suspend();
    } catch (e) {
      console.error("Web Audio API error:", e);
      alert("Browser kamu tidak mendukung Web Audio API.");
    }
  },

  toggle() {
    const btn = document.getElementById('synth-play-btn');
    if (!btn) return;

    if (!audioCtx) this.initContext();
    if (!audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume().then(() => {
        synthPlaying = true;
        btn.classList.add('playing');
        btn.innerHTML = '<span class="p-ico">⏹</span> Stop Sinyal';
        this.update();
        this.draw();
      });
    } else {
      audioCtx.suspend().then(() => {
        synthPlaying = false;
        btn.classList.remove('playing');
        btn.innerHTML = '<span class="p-ico">▶</span> Mulai Sinyal';
        if (animationId) cancelAnimationFrame(animationId);
        
        const canvas = document.getElementById('synth-canvas');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      });
    }
  },

  update() {
    if (!audioCtx) {
      const fVal = document.getElementById('synth-freq')?.value;
      const vVal = document.getElementById('synth-vol')?.value;
      if(fVal) {
        const vfEl = document.getElementById('val-freq');
        if (vfEl) vfEl.textContent = fVal;
      }
      if(vVal) {
        const vvEl = document.getElementById('val-vol');
        if (vvEl) vvEl.textContent = Math.round(vVal * 100);
      }
      return;
    }
    
    const wave = document.getElementById('synth-wave-type')?.value || 'sine';
    const freq = document.getElementById('synth-freq')?.value || 50;
    const vol = document.getElementById('synth-vol')?.value || 0.1;

    oscillator.type = wave;
    oscillator.frequency.setTargetAtTime(parseFloat(freq), audioCtx.currentTime, 0.05);
    gainNode.gain.setTargetAtTime(parseFloat(vol), audioCtx.currentTime, 0.05);

    const fEl = document.getElementById('val-freq');
    const vEl = document.getElementById('val-vol');
    const sfEl = document.getElementById('scope-freq-display');
    const swEl = document.getElementById('scope-wave-display');

    if (fEl) fEl.textContent = freq;
    if (vEl) vEl.textContent = Math.round(vol * 100);
    if (sfEl) sfEl.textContent = parseFloat(freq).toFixed(1) + ' Hz';
    if (swEl) swEl.textContent = wave.toUpperCase();
  },

  draw() {
    if (!synthPlaying) return;
    animationId = requestAnimationFrame(() => this.draw());
    
    if (analyser) analyser.getByteTimeDomainData(dataArray);

    const canvas = document.getElementById('synth-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#00ff41';
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#00ff41';
    
    ctx.beginPath();
    const sliceWidth = width * 1.0 / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * height / 2;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      x += sliceWidth;
    }
    ctx.stroke();
  }
};

window.ElektroSynth = ElektroSynth;
