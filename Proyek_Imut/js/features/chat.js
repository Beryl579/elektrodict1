/**
 * ElektroBot Chat Module
 * Menangani logika chatbot, speech recognition, dan history.
 */

const SYS_PROMPT = `Lo adalah ElektroBot — asisten AI teknik elektro yang gaul, asik, dan relate sama mahasiswa. Gaya ngomong lo santai kayak temen sendiri, pake bahasa sehari-hari (lu/gua), tapi tetep akurat secara teknis.

KEPRIBADIAN LO:
- Ngobrol santai, sesekali pake emoji biar hidup ⚡🔥
- Kalau ada yang nanya hal basic, jangan nyepelein — jelasin dengan asik
- Boleh bercanda tipis-tipis, tapi tetep on-point
- Kalau ada salah konsep, benerin dengan cara yang enak, bukan menghakimi
- Semangatin user kalau lagi struggle sama materi

ATURAN FORMAT RUMUS (WAJIB):
- Rumus inline: gunakan \\(...\\) contoh: \\(V = IR\\)
- Rumus display: gunakan $$...$$ contoh: $$P = \\frac{V^2}{R}$$
- JANGAN tulis rumus sebagai teks biasa

Jawab padat dan jelas, maksimal 3-4 paragraf. Kalau pertanyaannya simpel, jawab singkat aja jangan kebanyakan.`;

let chatHistory = [];
const MAX_HIST = 40;
const HIST_STORAGE_KEY = 'elektrobot_history';
let isBusy = false;

const ElektroChat = {
  /**
   * Inisialisasi chat
   */
  init() {
    this.loadHistory();
    // Re-render history on both panels
    this.renderHistory('D');
    this.renderHistory('M');
  },

  /**
   * Muat riwayat dari localStorage
   */
  loadHistory() {
    try {
      const saved = localStorage.getItem(HIST_STORAGE_KEY);
      if (saved) chatHistory = JSON.parse(saved);
      if (chatHistory.length === 0) {
        chatHistory.push({ role: 'assistant', content: 'Halo! Gua ElektroBot. Ada yang bisa gua bantu hari ini? ⚡' });
      }
    } catch (e) {
      chatHistory = [{ role: 'assistant', content: 'Halo! Gua ElektroBot. Ada yang bisa gua bantu hari ini? ⚡' }];
    }
  },

  /**
   * Simpan riwayat ke localStorage
   */
  saveHistory() {
    try {
      localStorage.setItem(HIST_STORAGE_KEY, JSON.stringify(chatHistory));
    } catch (e) {
      if (chatHistory.length > 10) chatHistory.splice(0, 10);
      try { localStorage.setItem(HIST_STORAGE_KEY, JSON.stringify(chatHistory)); } catch (e2) {}
    }
  },

  /**
   * Kirim pesan ke AI
   */
  async sendMessage(v) {
    if (isBusy) return;
    const inp = document.getElementById('inp' + v);
    const q = inp.value.trim();
    if (!q) return;

    // Reset input
    inp.value = '';
    inp.style.height = 'auto';

    // Add user message
    chatHistory.push({ role: 'user', content: q });
    if (chatHistory.length > MAX_HIST) chatHistory.shift();
    this.saveHistory();
    this.renderHistory('D');
    this.renderHistory('M');

    isBusy = true;
    this.showTyping(true);

    try {
      const messages = [{ role: 'system', content: SYS_PROMPT }, ...chatHistory];
      const data = await ElektroAPI.chat(messages);
      
      const reply = data.choices?.[0]?.message?.content || "(Gak ada respon nih, coba lagi ya)";
      chatHistory.push({ role: 'assistant', content: reply });
      if (chatHistory.length > MAX_HIST) chatHistory.shift();
      this.saveHistory();

      this.showTyping(false);
      this.renderHistory('D');
      this.renderHistory('M');

      // TTS if enabled
      if (typeof speak === 'function') speak(reply);

    } catch (err) {
      console.error(err);
      chatHistory.push({ role: 'assistant', content: `⚠️ Waduh, ada error nih: ${err.message}. Coba cek koneksi lu ya!` });
      this.showTyping(false);
      this.renderHistory('D');
      this.renderHistory('M');
    } finally {
      isBusy = false;
    }
  },

  /**
   * Render riwayat ke DOM
   */
  renderHistory(v) {
    const container = document.getElementById('msgs' + v);
    if (!container) return;
    
    container.innerHTML = chatHistory.map(m => `
      <div class="msg ${m.role}">
        <div class="mbubble">${ElektroUtils.parseAIText(m.content)}</div>
      </div>
    `).join('');
    
    container.scrollTop = container.scrollHeight;
    ElektroUtils.renderMath(container);
  },

  /**
   * Tampilkan indikator mengetik
   */
  showTyping(show) {
    ['D', 'M'].forEach(v => {
      const container = document.getElementById('msgs' + v);
      if (!container) return;
      const existing = container.querySelector('.typing-indicator');
      if (show && !existing) {
        const div = document.createElement('div');
        div.className = 'msg assistant typing-indicator';
        div.innerHTML = '<div class="mbubble"><div class="tbbl"><div class="tdots"><span></span><span></span><span></span></div></div></div>';
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
      } else if (!show && existing) {
        existing.remove();
      }
    });
  },

  /**
   * Reset riwayat
   */
  clearHistory() {
    if (confirm('Hapus semua riwayat chat?')) {
      chatHistory = [{ role: 'assistant', content: 'Riwayat dihapus. Ada lagi yang mau ditanyain? ⚡' }];
      this.saveHistory();
      this.renderHistory('D');
      this.renderHistory('M');
    }
  }
};

window.ElektroChat = ElektroChat;
