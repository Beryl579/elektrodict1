/**
 * ElektroDict Main Orchestrator
 * Core navigation, AI Chatbot integration, and Module Management.
 */

// ═══════════════════════════════════════════════════════════
// 1. CONFIG & GLOBALS
// ═══════════════════════════════════════════════════════════
const API_MODEL = (window.ElektroAPI && window.ElektroAPI.MODEL_TEXT) || "openai/gpt-oss-120b";
let chatHistory = [];
const MAX_HIST = 30;
const HIST_STORAGE_KEY = 'ed_chat_history';
let katexLoaded = false;
let mOpen = false;

/** Unified API Wrapper */
async function callAI(payload) {
  if (!window.ElektroAPI) {
    console.error("[ElektroDict] ElektroAPI not loaded!");
    return { error: { message: "ElektroAPI layer is missing." } };
  }
  try {
    return await window.ElektroAPI.chat(payload.messages, {
      model: payload.model || API_MODEL,
      temperature: payload.temperature || 0.7,
      max_tokens: payload.max_tokens || 1000
    });
  } catch (e) {
    console.error("[ElektroDict] API Error:", e);
    if (e.isRateLimit) throw e;
    return { error: { message: e.message || "Gagal terhubung ke AI." } };
  }
}

// ═══════════════════════════════════════════════════════════
// 2. INITIALIZATION
// ═══════════════════════════════════════════════════════════
window.addEventListener('load', () => {
  setTimeout(() => {
    const s = document.getElementById('splash-screen');
    if (s) s.classList.add('fade-out');
  }, 1500);

  initTheme();
  loadChatHistory();
  prefetchQuote();
  initOnboarding();
  
  // Default module init
  initModule('kamus');
});

const initializedModules = new Set();
function initModule(name) {
  if (initializedModules.has(name)) return;
  
  const map = {
    'kamus':     () => window.ElektroKamus?.init(),
    'quiz':      () => window.ElektroQuiz?.init(),
    'kalk':      () => window.ElektroCalc?.init(),
    'konversi':  () => window.ElektroConverter?.init(),
    'resistor':  () => window.ElektroResistor?.init(),
    'aivision':  () => window.ElektroVision?.init(),
    'skema':     () => window.ElektroSimulator?.initSkema(),
    'logika':    () => window.ElektroSimulator?.initLogic(),
    'projects':  () => window.ElektroProject?.init(),
    'synth':     () => window.ElektroSynth?.init(),
    'timeline':  () => window.ElektroTimeline?.init(),
    'standards': () => window.ElektroStandards?.init(),
    'chips':     () => window.ElektroChips?.init()
  };

  if (map[name]) {
    map[name]();
    initializedModules.add(name);
    console.log(`[Module] ${name} initialized.`);
  }
}

// ═══════════════════════════════════════════════════════════
// 3. NAVIGATION & UI
// ═══════════════════════════════════════════════════════════
function switchTab(t) {
  // Lazy load module
  initModule(t);

  // Transitions
  document.querySelectorAll('.page.on').forEach(p => {
    p.classList.remove('visible');
    setTimeout(() => p.classList.remove('on'), 50);
  });
  
  document.querySelectorAll('.bnav-item').forEach(b => b.classList.remove('on'));
  const bn = document.getElementById('bnav-' + t);
  if (bn) bn.classList.add('on');

  setTimeout(() => {
    const pg = document.getElementById('page-' + t);
    if (pg) {
      pg.classList.add('on');
      requestAnimationFrame(() => requestAnimationFrame(() => pg.classList.add('visible')));
    }
  }, 60);

  // Safety
  if (t !== 'synth' && window.ElektroSynth && window.ElektroSynth.synthPlaying) {
    window.ElektroSynth.toggle();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  const btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light');
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = '🌙';
  }
}

// ═══════════════════════════════════════════════════════════
// 4. MATH RENDERING (KaTeX)
// ═══════════════════════════════════════════════════════════
const pendingMathEls = [];
function renderPendingMath() {
  katexLoaded = true;
  pendingMathEls.forEach(item => {
    if (item && item.el && item.latex) {
      try { window.katex.render(item.latex, item.el, { throwOnError: false, displayMode: false }); }
      catch (e) { item.el.textContent = item.latex; }
    } else if (item instanceof Element) {
      doRenderMath(item);
    }
  });
  pendingMathEls.length = 0;
  document.querySelectorAll('.eformula[data-latex]').forEach(el => {
    try { window.katex.render(el.dataset.latex, el, { throwOnError: false, displayMode: false }); } catch (e) {}
  });
}

function renderMath(el) {
  if (katexLoaded && typeof renderMathInElement === 'function') doRenderMath(el);
  else pendingMathEls.push(el);
}

function doRenderMath(el) {
  if (typeof renderMathInElement !== 'function') return;
  renderMathInElement(el, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    throwOnError: false
  });
}

// ═══════════════════════════════════════════════════════════
// 5. CHATBOT LOGIC
// ═══════════════════════════════════════════════════════════
async function send(v) {
  const inp = document.getElementById('inp' + v);
  const txt = inp.value.trim();
  if (!txt || busy) return;

  userMsg(v, txt);
  inp.value = '';
  inp.style.height = 'auto';
  showDots(v);
  
  const mChoice = document.getElementById('modelChoice' + v).value;
  const hist = chatHistory.map(m => ({ role: m.role, content: m.content }));
  hist.push({ role: 'user', content: txt });

  try {
    busy = true;
    const res = await callAI({
      messages: [{ role: 'system', content: window.ElektroUtils?.CHAT_SYS_PROMPT || "You are ElektroBot." }, ...hist],
      model: mChoice
    });
    hideDots(v);
    
    if (res.error) {
      botMsg(v, "Aduh, koneksi lagi bermasalah nih. Coba lagi ya!", true);
    } else {
      const reply = res.result || res.choices?.[0]?.message?.content || "";
      botMsg(v, reply);
      pushHist({ role: 'user', content: txt });
      pushHist({ role: 'assistant', content: reply });
      if (v === 'M') speak(reply);
    }
  } catch (e) {
    hideDots(v);
    botMsg(v, "Waduh, ElektroBot lagi overload! Istirahat bentar ya.", true);
  } finally {
    busy = false;
  }
}

let busy = false;
function pushHist(msg) {
  chatHistory.push(msg);
  if (chatHistory.length > MAX_HIST) chatHistory.splice(0, 2);
  saveHistToStorage();
}

function saveHistToStorage() {
  try { localStorage.setItem(HIST_STORAGE_KEY, JSON.stringify(chatHistory)); } catch (e) {}
}

function loadChatHistory() {
  try {
    const raw = localStorage.getItem(HIST_STORAGE_KEY);
    chatHistory = raw ? JSON.parse(raw) : [];
  } catch (e) { chatHistory = []; }

  ['D', 'M'].forEach(v => {
    const el = msgs(v);
    if (!el) return;
    if (chatHistory.length === 0) {
      botMsg(v, 'Yo! Gua ElektroBot ⚡ Mau nanya soal teknik elektro? Gas aja!');
    } else {
      chatHistory.forEach(m => (m.role === 'user' ? userMsgRaw(v, m.content) : botMsg(v, m.content)));
    }
  });
}

function clearChatHistory() {
  if (!confirm('Hapus semua riwayat chat?')) return;
  chatHistory = [];
  localStorage.removeItem(HIST_STORAGE_KEY);
  ['D', 'M'].forEach(v => {
    const el = msgs(v);
    if (el) el.innerHTML = '';
    botMsg(v, 'Riwayat dihapus! Ada yang mau ditanya lagi?');
  });
}

function userMsg(v, txt) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm u';
  d.innerHTML = `<div class="bbl">${ElektroUtils?.escapeHTML(txt) || txt}</div><div class="ct">${ts()}</div>`;
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}

function userMsgRaw(v, txt) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm u';
  d.innerHTML = `<div class="bbl">${ElektroUtils?.escapeHTML(txt) || txt}</div><div class="ct">${ts()}</div>`;
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}

function botMsg(v, txt, err = false) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm b' + (err ? ' err' : '');
  const bbl = document.createElement('div');
  bbl.className = 'bbl';
  if (err) bbl.textContent = txt;
  else {
    bbl.innerHTML = window.ElektroUtils?.parseAIText(txt) || txt;
    setTimeout(() => renderMath(bbl), 100);
  }
  d.innerHTML = `<div class="ct">${ts()}</div>`;
  d.insertBefore(bbl, d.firstChild);
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}

function showDots(v) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm b'; d.id = 'dots' + v;
  d.innerHTML = '<div class="tbbl"><div class="tdots"><span></span><span></span><span></span></div></div>';
  el.appendChild(d); el.scrollTop = el.scrollHeight;
}

function hideDots(v) { document.getElementById('dots' + v)?.remove(); }
function ts() { return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }); }
function msgs(v) { return document.getElementById('msgs' + v); }
function rz(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 90) + 'px'; }
function ck(e, v) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(v); } }
function qask(q) {
  const mob = window.innerWidth < 860;
  if (mob && !mOpen) openM();
  const id = mob ? 'inpM' : 'inpD';
  setTimeout(() => { document.getElementById(id).value = q; send(mob ? 'M' : 'D'); }, mob ? 300 : 0);
}

// ═══════════════════════════════════════════════════════════
// 6. VOICE & UI HELPERS
// ═══════════════════════════════════════════════════════════
let ttsEnabled = true;
function toggleTTS() {
  ttsEnabled = !ttsEnabled;
  ['D','M'].forEach(v => {
    const btn = document.getElementById('tts-toggle-'+v);
    if(btn) {
      if(ttsEnabled) { btn.classList.remove('off'); btn.title="Mute"; }
      else { btn.classList.add('off'); btn.title="Unmute"; }
    }
  });
  if (!ttsEnabled && window.speechSynthesis) window.speechSynthesis.cancel();
}

function speak(text) {
  if (!ttsEnabled || !window.speechSynthesis) return;
  const clean = window.ElektroUtils?.cleanTextForSpeech(text) || text;
  const utter = new SpeechSynthesisUtterance(clean);
  utter.lang = 'id-ID';
  window.speechSynthesis.speak(utter);
}

function openM() {
  mOpen = true;
  document.body.classList.add('chat-open');
  document.getElementById('chatM').classList.add('open');
  document.getElementById('overlay').classList.add('on');
  document.getElementById('chatTooltip')?.classList.add('hide');
  setTimeout(() => document.getElementById('inpM').focus(), 300);
}

function closeM() {
  mOpen = false;
  document.body.classList.remove('chat-open');
  document.getElementById('chatM').classList.remove('open');
  document.getElementById('overlay').classList.remove('on');
}

// Quote & Onboarding
function prefetchQuote() {
  if (window.ElektroUtils?.prefetchQuote) window.ElektroUtils.prefetchQuote();
}

function initOnboarding() {
  if (localStorage.getItem('ed_visited')) return;
  const ov = document.getElementById('onboardOverlay');
  if (ov) ov.classList.add('show');
}

function closeOnboard() {
  const ov = document.getElementById('onboardOverlay');
  if (ov) {
    ov.classList.add('hide');
    setTimeout(() => ov.remove(), 300);
  }
  localStorage.setItem('ed_visited', '1');
}

// PWA & Installation
function installPWA() {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then(() => { window.deferredPrompt = null; });
  }
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPrompt = e;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.style.display = 'flex';
});

// Global exports for legacy integration
window.switchTab = switchTab;
window.toggleTheme = toggleTheme;
window.openM = openM;
window.closeM = closeM;
window.send = send;
window.qask = qask;
window.toggleMic = (v) => console.log("Mic toggle not implemented yet");
window.renderMath = renderMath;
window.renderPendingMath = renderPendingMath;