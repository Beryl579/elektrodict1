/**
 * ElektroDict — Firebase IoT Dashboard Module
 * Membaca & menulis Firebase Realtime Database via REST API (tanpa SDK).
 * Dipakai untuk memantau proyek ESP32: suhu, kelembaban, jarak, gerakan,
 * cahaya, gas, serta kontrol servo & LED RGB dari halaman web.
 */
(function () {
  'use strict';

  const DB_KEY = 'ed_firebase_config';
  const CHART_MAX = 40; // jumlah titik pada grafik riwayat

  // ── state ──
  let cfg = { host: '', secret: '' };
  let timer = null;
  let charts = {};
  let history = {};   // path -> array titik {t, v}
  let lastJson = null;

  // ── helper REST ──
  function apiUrl(path) {
    const base = String(cfg.host || '').trim().replace(/\/+$/, '');
    const p = String(path || '/').replace(/^\/+/, '');
    return base + '/' + p + '.json' + (cfg.secret ? '?auth=' + encodeURIComponent(cfg.secret) : '');
  }

  async function fbRead(path) {
    const r = await fetch(apiUrl(path), { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }

  async function fbWrite(path, value) {
    const r = await fetch(apiUrl(path), {
      method: 'PUT',
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value)
    });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }

  // ── elemen ──
  function $(id) { return document.getElementById(id); }

  function el(id) {
    const e = $(id);
    if (!e) console.warn('[FBDash] elemen #' + id + ' tidak ditemukan');
    return e;
  }

  // ── init / lifecycle ──
  function init() {
    loadCfg();
    bindEvents();
  }

  function loadCfg() {
    try { cfg = JSON.parse(localStorage.getItem(DB_KEY) || '{"host":"","secret":""}'); }
    catch (e) { cfg = { host: '', secret: '' }; }
    if (el('fb-host')) el('fb-host').value = cfg.host;
    if (el('fb-secret')) el('fb-secret').value = cfg.secret;
  }

  function saveCfg() {
    cfg.host = (el('fb-host') && el('fb-host').value.trim()) || '';
    cfg.secret = (el('fb-secret') && el('fb-secret').value.trim()) || '';
    localStorage.setItem(DB_KEY, JSON.stringify(cfg));
  }

  function bindEvents() {
    const saveBtn = el('fb-save-btn');
    if (saveBtn) saveBtn.addEventListener('click', () => {
      saveCfg();
      showToast('✅ Konfigurasi Firebase disimpan!');
      start();
    });

    const connBtn = el('fb-connect-btn');
    if (connBtn) connBtn.addEventListener('click', () => {
      saveCfg();
      start();
    });

    const stopBtn = el('fb-stop-btn');
    if (stopBtn) stopBtn.addEventListener('click', stop);

    // kontrol servo
    const sv = el('fb-servo-slider');
    if (sv) sv.addEventListener('input', () => {
      if (el('fb-servo-val')) el('fb-servo-val').textContent = sv.value + '°';
    });
    const svSend = el('fb-servo-send');
    if (svSend) svSend.addEventListener('click', () => {
      write('/servo/sudut', parseInt(el('fb-servo-slider').value, 10), 'Servo');
    });

    // kontrol RGB
    ['r', 'g', 'b'].forEach(c => {
      const s = el('fb-rgb-' + c);
      if (s) s.addEventListener('input', updateRgbPreview);
    });
    const rgbSend = el('fb-rgb-send');
    if (rgbSend) rgbSend.addEventListener('click', sendRgb);

    // tombol test koneksi
    const testBtn = el('fb-test-btn');
    if (testBtn) testBtn.addEventListener('click', testConnection);

    // ekspor JSON
    const expBtn = el('fb-export-btn');
    if (expBtn) expBtn.addEventListener('click', exportJson);
  }

  // ── koneksi & polling ──
  async function testConnection() {
    saveCfg();
    setStatus('Menguji koneksi...', 'warn');
    try {
      const data = await fbRead('/');
      setStatus('✅ Terhubung! Data ditemukan di database.', 'ok');
      el('fb-json').textContent = JSON.stringify(data, null, 2) || '(database kosong)';
      return true;
    } catch (e) {
      setStatus('❌ Gagal: ' + e.message + ' — cek host & secret, atau atur database ke mode test.', 'err');
      return false;
    }
  }

  async function start() {
    saveCfg();
    if (!cfg.host) {
      setStatus('⚠️ Isi dulu URL database Firebase (host) di panel konfigurasi.', 'warn');
      return;
    }
    const ok = await testConnection();
    if (!ok) return;
    stop(); // bersihkan timer lama
    setStatus('🟢 Memantau real-time (refresh tiap 2 dtk)...', 'ok');
    el('fb-start-cta').classList.add('hide');
    el('fb-live-panel').classList.remove('hide');
    await refresh();
    timer = setInterval(refresh, 2000);
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    setStatus('⏸️ Pemantauan dihentikan.', 'warn');
  }

  function setStatus(msg, kind) {
    const s = el('fb-status');
    if (!s) return;
    s.textContent = msg;
    s.className = 'fb-status fb-status-' + (kind || '');
  }

  // ── pembacaan & render ──
  function push(path, v) {
    if (!history[path]) history[path] = [];
    history[path].push({ t: Date.now(), v });
    if (history[path].length > CHART_MAX) history[path].shift();
  }

  async function refresh() {
    if (!cfg.host) return;
    try {
      const data = await fbRead('/');
      lastJson = data;
      renderCards(data);
      renderJson(data);
      renderCharts();
    } catch (e) {
      setStatus('⚠️ Gagal baca: ' + e.message, 'err');
    }
  }

  function num(v) { return (typeof v === 'number') ? v : parseFloat(v); }

  function renderCards(d) {
    const g = (path) => {
      const parts = String(path).split('/').filter(Boolean);
      let cur = d;
      for (const p of parts) { if (cur && typeof cur === 'object') cur = cur[p]; else return undefined; }
      return cur;
    };

    const cards = [
      { id: 'fb-card-suhu', path: '/sensor/suhu', unit: '°C', label: 'Suhu' },
      { id: 'fb-card-lembab', path: '/sensor/kelembaban', unit: '%', label: 'Kelembaban' },
      { id: 'fb-card-jarak', path: '/jarak/cm', unit: 'cm', label: 'Jarak' },
      { id: 'fb-card-cahaya', path: '/cahaya/nilai_adc', unit: '', label: 'Cahaya (ADC)' },
      { id: 'fb-card-gas', path: '/gas/nilai_adc', unit: '', label: 'Gas (ADC)' },
      { id: 'fb-card-suhu2', path: '/termostat/suhu', unit: '°C', label: 'Suhu Termostat' }
    ];

    cards.forEach(c => {
      const v = g(c.path);
      if (v === undefined) return;
      const elCard = el(c.id);
      if (!elCard) return;
      const n = num(v);
      elCard.querySelector('.fb-card-val').textContent = (isNaN(n) ? v : (n % 1 === 0 ? n : n.toFixed(1))) + ' ' + c.unit;
      push(c.path, isNaN(n) ? 0 : n);
    });

    // status boolean (gerakan, bahaya, lampu, relay, bel)
    const bools = [
      { id: 'fb-card-gerakan', path: '/keamanan/gerakan', label: 'Gerakan' },
      { id: 'fb-card-bahaya', path: '/jarak/bahaya', label: 'Bahaya Jarak' },
      { id: 'fb-card-lampu', path: '/cahaya/lampu_nyala', label: 'Lampu' },
      { id: 'fb-card-relay', path: '/termostat/beban_nyala', label: 'Beban Relay' },
      { id: 'fb-card-gas-b', path: '/gas/bahaya', label: 'Gas Bahaya' },
      { id: 'fb-card-bell', path: '/bel/ditekan', label: 'Bel' }
    ];
    bools.forEach(c => {
      const v = g(c.path);
      if (v === undefined) return;
      const elCard = el(c.id);
      if (!elCard) return;
      const on = !!v;
      elCard.querySelector('.fb-card-val').textContent = on ? 'AKTIF' : 'aman';
      elCard.classList.toggle('fb-state-on', on);
    });

    // sensor status online
    const st = g('/sensor/status');
    if (st !== undefined && el('fb-card-status')) {
      el('fb-card-status').querySelector('.fb-card-val').textContent = String(st);
    }
  }

  function renderJson(d) {
    const pre = el('fb-json');
    if (pre) pre.textContent = JSON.stringify(d, null, 2);
  }

  function renderCharts() {
    Object.keys(history).forEach(path => {
      const key = path.replace(/\W+/g, '_');
      const canvas = el('fb-chart-' + key);
      if (!canvas) return;
      drawLine(canvas, history[path]);
    });
  }

  function drawLine(canvas, points) {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 300;
    const h = canvas.clientHeight || 90;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    if (!points || points.length < 2) {
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('menunggu data…', w / 2, h / 2);
      return;
    }

    const vals = points.map(p => p.v);
    let min = Math.min.apply(null, vals);
    let max = Math.max.apply(null, vals);
    if (min === max) { min -= 1; max += 1; }
    const pad = 4;
    const x = (i) => pad + (i / (points.length - 1)) * (w - pad * 2);
    const y = (v) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);

    // grid
    ctx.strokeStyle = 'rgba(255,255,255,.06)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 3; i++) {
      const gy = pad + (i / 3) * (h - pad * 2);
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
    }

    // garis data
    ctx.strokeStyle = '#4facfe';
    ctx.lineWidth = 2;
    ctx.beginPath();
    points.forEach((p, i) => { i === 0 ? ctx.moveTo(x(i), y(p.v)) : ctx.lineTo(x(i), y(p.v)); });
    ctx.stroke();

    // area fill
    ctx.lineTo(x(points.length - 1), h - pad);
    ctx.lineTo(x(0), h - pad);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(79,172,254,.25)');
    grad.addColorStop(1, 'rgba(79,172,254,0)');
    ctx.fillStyle = grad;
    ctx.fill();

    // nilai terkini
    ctx.fillStyle = '#fff';
    ctx.font = '600 11px sans-serif';
    ctx.textAlign = 'right';
    const last = points[points.length - 1];
    ctx.fillText((last.v % 1 === 0 ? last.v : last.v.toFixed(1)), w - pad, 12);
  }

  // ── kontrol keluar (write) ──
  async function write(path, value, label) {
    if (!cfg.host) { showToast('⚠️ Isi host Firebase dulu.'); return; }
    try {
      await fbWrite(path, value);
      showToast('✅ ' + label + ' dikirim → ' + path + ' = ' + value);
    } catch (e) {
      showToast('❌ Gagal kirim: ' + e.message);
    }
  }

  function updateRgbPreview() {
    const r = parseInt(el('fb-rgb-r').value, 10) || 0;
    const g = parseInt(el('fb-rgb-g').value, 10) || 0;
    const b = parseInt(el('fb-rgb-b').value, 10) || 0;
    const pv = el('fb-rgb-preview');
    if (pv) pv.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    if (el('fb-rgb-val')) el('fb-rgb-val').textContent = r + ', ' + g + ', ' + b;
  }

  async function sendRgb() {
    const r = parseInt(el('fb-rgb-r').value, 10) || 0;
    const g = parseInt(el('fb-rgb-g').value, 10) || 0;
    const b = parseInt(el('fb-rgb-b').value, 10) || 0;
    await write('/rgb/merah', r, 'RGB merah');
    await write('/rgb/hijau', g, 'RGB hijau');
    await write('/rgb/biru', b, 'RGB biru');
  }

  function exportJson() {
    if (!lastJson) { showToast('⚠️ Belum ada data.'); return; }
    const blob = new Blob([JSON.stringify(lastJson, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'firebase-snapshot.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ── toast kecil ──
  function showToast(msg) {
    let t = el('fb-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'fb-toast';
      t.className = 'fb-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('on');
    clearTimeout(t._tm);
    t._tm = setTimeout(() => t.classList.remove('on'), 2600);
  }

  // ── lifecycle dari switchTab ──
  window.ElektroFBDash = {
    init,
    start,
    stop,
    open() {
      loadCfg();
      // panel mulai selalu tampil; panel live disembunyikan sampai start
      el('fb-start-cta') && el('fb-start-cta').classList.remove('hide');
      el('fb-live-panel') && el('fb-live-panel').classList.add('hide');
      setStatus('Masukkan host & secret Firebase lalu klik "Mulai Pantau".', '');
      history = {};
    }
  };

  // auto-init bila halaman dashboard dimuat
  document.addEventListener('DOMContentLoaded', init);
})();
