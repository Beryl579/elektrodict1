/**
 * ElektroBot Chat Module
 * Logika selaras dengan index5.html — riwayat, UI bubble (.cm/.bbl), typing dots;
 * API lewat ElektroAPI → /api/chat (tanpa key di klien).
 */

const SYS_PROMPT = `Kamu ElektroBot, asisten teknik elektro & elektronika senior. Panggil user "Sob".

ATURAN:
1. Hanya bahas: rangkaian, komponen, listrik/instalasi (PUIL/IEEE/IEC), Arduino/ESP32, PLC, energi, SMK elektro.
2. Topik lain: tolak sopan — "Maaf Sob, gua khusus bidang elektro. Ada yang mau ditanya soal itu?"
3. Rumus wajib LaTeX: inline $...$, blok $$...$$. Jelaskan tiap variabel.
4. Tegangan tinggi/PLN: wajib mulai dengan peringatan bahaya sengatan listrik.
5. Rangkaian rusak: jangan langsung jawab — pandu bertahap (cek tegangan input, cek kontinuitas, dst).
6. Gaya: teknis tapi santai, pakai "Sob/Bro/Suhu", ringkas dan tepat.`;

const MAX_HIST = 20;
const HIST_STORAGE_KEY = 'elektrobot_history';
const WELCOME_LINES = 'Yo! Gua ElektroBot ⚡\nMau nanya soal teknik elektro? Gas aja, gua siap bantu! 🔥';

let chatHistory = [];
let busy = false;

function saveHistToStorage() {
  try {
    localStorage.setItem(HIST_STORAGE_KEY, JSON.stringify(chatHistory));
  } catch (e) {
    if (chatHistory.length > 10) chatHistory.splice(0, 10);
    try { localStorage.setItem(HIST_STORAGE_KEY, JSON.stringify(chatHistory)); } catch (e2) {}
  }
}

function loadHistFromStorage() {
  try {
    const raw = localStorage.getItem(HIST_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function pushHist(msg) {
  chatHistory.push(msg);
  if (chatHistory.length > MAX_HIST) chatHistory.splice(0, 2);
  saveHistToStorage();
}

function ts() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function msgs(v) {
  return document.getElementById('msgs' + v);
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function appendSep(v, text, colorAccent) {
  const el = msgs(v);
  if (!el) return;
  const sep = document.createElement('div');
  sep.style.cssText = colorAccent
    ? 'text-align:center;padding:8px 0 4px;font-size:10px;color:var(--accent);font-family:var(--mono);letter-spacing:.06em;opacity:.7'
    : 'text-align:center;padding:8px 0 4px;font-size:10px;color:var(--text3);font-family:var(--mono);letter-spacing:.06em';
  sep.textContent = text;
  el.appendChild(sep);
}

function botMsg(v, txt, err = false) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm b' + (err ? ' err' : '');
  const bbl = document.createElement('div');
  bbl.className = 'bbl';
  if (err) {
    bbl.style.whiteSpace = 'pre-wrap';
    bbl.textContent = txt;
  } else {
    bbl.innerHTML = ElektroUtils.parseAIText(txt);
    setTimeout(() => ElektroUtils.renderAIVMath(bbl), 80);
  }
  d.innerHTML = `<div class="ct">${ts()}</div>`;
  d.insertBefore(bbl, d.firstChild);
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}

function userMsg(v, txt) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm u';
  d.innerHTML = `<div class="bbl">${escapeHTML(txt)}</div><div class="ct">${ts()}</div>`;
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}

function userMsgRaw(v, txt) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm u';
  d.innerHTML = `<div class="bbl">${txt}</div><div class="ct">${ts()}</div>`;
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}

function showDots(v) {
  const el = msgs(v);
  if (!el) return;
  const d = document.createElement('div');
  d.className = 'cm b';
  d.id = 'dots' + v;
  d.innerHTML = '<div class="tbbl"><div class="tdots"><span></span><span></span><span></span></div></div>';
  el.appendChild(d);
  el.scrollTop = el.scrollHeight;
}

function hideDots(v) {
  document.getElementById('dots' + v)?.remove();
}

function loadChatHistory() {
  chatHistory = loadHistFromStorage();

  if (chatHistory.length === 0) {
    botMsg('D', WELCOME_LINES);
    botMsg('M', WELCOME_LINES);
    return;
  }

  ['D', 'M'].forEach(v => appendSep(v, '— riwayat sebelumnya —', false));

  chatHistory.forEach(msg => {
    if (msg.role === 'user') {
      userMsgRaw('D', escapeHTML(msg.content));
      userMsgRaw('M', escapeHTML(msg.content));
    } else if (msg.role === 'assistant') {
      botMsg('D', msg.content);
      botMsg('M', msg.content);
    }
  });

  ['D', 'M'].forEach(v => {
    appendSep(v, '— sesi baru —', true);
    const el = msgs(v);
    if (el) setTimeout(() => { el.scrollTop = el.scrollHeight; }, 120);
  });
}

function clearChatHistory() {
  if (!confirm('Reset semua riwayat obrolan dengan ElektroBot? Ini tidak bisa di-undo ya!')) return;
  chatHistory = [];
  localStorage.removeItem(HIST_STORAGE_KEY);
  const resetText = 'Riwayat dihapus! ⚡ Gua ElektroBot, siap bantu lagi dari awal. Ada yang mau ditanya?';
  ['D', 'M'].forEach(v => {
    const el = msgs(v);
    if (el) el.innerHTML = '';
  });
  botMsg('D', resetText);
  botMsg('M', resetText);
}

function releaseChatBusy(sendD, sendM, focusInp) {
  busy = false;
  [sendD, sendM].forEach(b => { if (b) b.disabled = false; });
  if (focusInp) {
    try { focusInp.focus(); } catch (e) {}
  }
}

async function send(v) {
  const inp = document.getElementById('inp' + v);
  if (!inp) return;
  const txt = inp.value.trim();
  if (!txt) return;
  if (busy) {
    return;
  }

  const sendD = document.getElementById('sendD');
  const sendM = document.getElementById('sendM');

  busy = true;
  [sendD, sendM].forEach(b => { if (b) b.disabled = true; });
  inp.value = '';
  inp.style.height = '38px';

  userMsg('D', txt);
  userMsg('M', txt);

  pushHist({ role: 'user', content: txt });
  showDots('D');
  showDots('M');

  try {
    const cleanHistory = chatHistory.slice(-10).map(m => ({ role: m.role, content: m.content }));
    const messages = [{ role: 'system', content: SYS_PROMPT }, ...cleanHistory];
    const data = await ElektroAPI.chat(messages);
    hideDots('D');
    hideDots('M');

    const rep = (data.choices?.[0]?.message?.content || '(tidak ada respons)')
      .replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
    botMsg('D', rep);
    botMsg('M', rep);
    pushHist({ role: 'assistant', content: rep });

    try {
      if (typeof speak === 'function') speak(rep);
    } catch (speakErr) {
      console.warn('[ElektroChat] TTS', speakErr);
    }
  } catch (err) {
    hideDots('D');
    hideDots('M');
    const isRateLimit = err?.isRateLimit ||
      (err?.message || '').includes('RATE_LIMIT') ||
      (err?.message || '').includes('429');
    const msg = isRateLimit
      ? `⏳ Kuota AI lagi penuh nih Sob. Tunggu ${err?.waitSeconds ?? 20} detik ya baru coba lagi!`
      : `⚠️ Error: ${err?.message || 'Gagal terhubung ke server.'}`;
    botMsg('D', msg, true);
    botMsg('M', msg, true);
  } finally {
    releaseChatBusy(sendD, sendM, inp);
  }
}

const ElektroChat = {
  init() {
    loadChatHistory();
  },

  sendMessage(v) {
    return send(v);
  },

  clearHistory() {
    clearChatHistory();
  }
};

window.ElektroChat = ElektroChat;
