/**
 * ElektroDict — Toolkit Module (FileKit port)
 * 6 alat client-side: Resizer, Cropper, Converter, Word→PDF, Merge, Split
 * Semua proses 100% di browser, tidak upload server.
 */
(function(){
'use strict';

// ── SVG ICONS (neobrutalism stroke 2.5, 24x24) ──
const ICONS = {
  // ALAT hub icon (toolbox)
  toolkit: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  resizer: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/>',
  cropper: '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',
  converter: '<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  word2pdf: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>',
  merger: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
  splitter: '<rect x="3" y="3" width="8" height="18" rx="1"/><rect x="13" y="3" width="8" height="18" rx="1"/><line x1="12" x2="12" y1="8" y2="16"/>'
};

function svg(icon, size){
  const s=size||22;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="width:${s}px;height:${s}px;flex-shrink:0">${ICONS[icon]||''}</svg>`;
}

// ── TOOL DEFINITIONS ──
const TOOLS = [
  { id:'toolkit-resizer', label:'Image Resizer', short:'Resizer', icon:'resizer', color:'#FFDE59', desc:'Ubah dimensi gambar — preset IG, YT, HD, 4K' },
  { id:'toolkit-cropper', label:'Image Cropper', short:'Cropper', icon:'cropper', color:'#C1FF72', desc:'Pangkas dengan rasio 1:1, 4:3, 16:9, free' },
  { id:'toolkit-converter', label:'Format Converter', short:'Converter', icon:'converter', color:'#FF6B9D', desc:'PNG ↔ JPG ↔ WebP + kontrol kualitas' },
  { id:'toolkit-word2pdf', label:'Word → PDF', short:'Word→PDF', icon:'word2pdf', color:'#6EC1E4', desc:'Konversi .docx ke PDF (mammoth + jsPDF)' },
  { id:'toolkit-merger', label:'PDF Merger', short:'Merger', icon:'merger', color:'#FF9F43', desc:'Gabung banyak PDF, drag untuk urutkan' },
  { id:'toolkit-splitter', label:'PDF Splitter', short:'Splitter', icon:'splitter', color:'#C1FF72', desc:'Pecah PDF per halaman / rentang, ZIP' },
];

// ── HUB RENDER ──
function renderHub(){
  const grid = TOOLS.map(t=>`
    <button class="toolkit-card" onclick="switchTab('${t.id}')" style="--card-accent:${t.color}">
      <div class="toolkit-card-icon" style="background:${t.color}">${svg(t.icon,26)}</div>
      <div class="toolkit-card-info">
        <div class="toolkit-card-title">${t.label}</div>
        <div class="toolkit-card-desc">${t.desc}</div>
      </div>
      <span class="toolkit-card-arrow">→</span>
    </button>
  `).join('');
  return `
    <div class="toolkit-wrap">
      <div class="toolkit-header">
        <div class="toolkit-header-icon" style="background:#FFDE59">${svg('toolkit',28)}</div>
        <div>
          <h2>🧰 Toolkit File</h2>
          <p>6 alat file 100% di browser — gambar & PDF tanpa upload server. Privasi terjaga.</p>
        </div>
      </div>
      <div class="toolkit-privacy">🔒 Semua proses di browser Anda — file tidak pernah meninggalkan perangkat</div>
      <h3 class="toolkit-section-title">Pilih Alat</h3>
      <div class="toolkit-grid">${grid}</div>
      <div class="toolkit-features">
        <div class="toolkit-feat"><div class="toolkit-feat-ico">🔒</div><b>Privacy First</b><p>File tidak upload, proses lokal via Canvas & PDFLib.</p></div>
        <div class="toolkit-feat"><div class="toolkit-feat-ico">⚡</div><b>Lightning Fast</b><p>Tanpa tunggu server, langsung jadi.</p></div>
        <div class="toolkit-feat"><div class="toolkit-feat-ico">🆓</div><b>Free Forever</b><p>Tanpa batas, watermark, atau login.</p></div>
      </div>
    </div>
  `;
}

// ── HELPERS ──
function fmtSize(b){
  if(b<1024) return b+' B';
  if(b<1024*1024) return (b/1024).toFixed(1)+' KB';
  return (b/1024/1024).toFixed(2)+' MB';
}
function downloadBlob(blob, name){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=name; a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function loadLib(url){
  // use global loadScript if exists, else dynamic
  if(typeof loadScript==='function') return loadScript(url);
  return new Promise((res,rej)=>{
    if(document.querySelector(`script[src="${url}"]`)) return res();
    const s=document.createElement('script'); s.src=url; s.onload=res; s.onerror=rej; document.head.appendChild(s);
  });
}

// ── RESIZER ──
let resizerState={ file:null, preview:'', result:'', w:800, h:600, ratio:1, keep:true };
function initResizer(){
  const c=document.getElementById('page-toolkit-resizer');
  if(!c || c.dataset.inited) return;
  c.dataset.inited='1';
  c.innerHTML = `
    <div class="toolkit-wrap">
      <button class="toolkit-back" onclick="switchTab('toolkit')">← Kembali ke Toolkit</button>
      <div class="toolkit-tool-head">
        <div class="toolkit-tool-icon" style="background:#FFDE59">${svg('resizer',24)}</div>
        <div><h2>Image Resizer</h2><p>Ubah dimensi dengan preview real-time</p></div>
      </div>
      <div class="toolkit-privacy">🔒 File Anda tidak pernah diunggah — proses di browser</div>
      <div class="toolkit-grid2">
        <div class="toolkit-panel">
          <div id="resizer-drop" class="toolkit-drop" tabindex="0">
            <div style="font-size:36px">📁</div><b>Drop gambar atau klik</b><span>JPG, PNG, WebP</span>
            <input id="resizer-input" type="file" accept="image/*" hidden>
          </div>
          <div id="resizer-controls" class="toolkit-ctrls" style="display:none">
            <div class="toolkit-preview"><img id="resizer-preview" alt="preview"></div>
            <div class="toolkit-card-white">
              <b class="toolkit-small-title">Presets</b>
              <div class="toolkit-presets">
                <button onclick="Toolkit.applyResizerPreset(1080,1080)">IG Post</button>
                <button onclick="Toolkit.applyResizerPreset(1080,1920)">IG Story</button>
                <button onclick="Toolkit.applyResizerPreset(1280,720)">YT Thumb</button>
                <button onclick="Toolkit.applyResizerPreset(1920,1080)">Full HD</button>
                <button onclick="Toolkit.applyResizerPreset(3840,2160)">4K</button>
                <button onclick="Toolkit.applyResizerPreset(1500,500)">Twitter Header</button>
              </div>
            </div>
            <div class="toolkit-card-white">
              <b class="toolkit-small-title">Dimensi</b>
              <div class="toolkit-dims">
                <label>W <input id="resizer-w" type="number" class="toolkit-input" value="800"></label>
                <span>×</span>
                <label>H <input id="resizer-h" type="number" class="toolkit-input" value="600"></label>
              </div>
              <label class="toolkit-check"><input id="resizer-keep" type="checkbox" checked> Maintain Aspect Ratio</label>
            </div>
            <div class="toolkit-actions">
              <button id="resizer-do" class="toolkit-btn toolkit-btn-yellow">🔄 RESIZE</button>
              <button id="resizer-clear" class="toolkit-btn toolkit-btn-pink">✕</button>
            </div>
          </div>
        </div>
        <div class="toolkit-panel">
          <div class="toolkit-result" id="resizer-result"><span class="toolkit-muted">Hasil akan muncul di sini</span><canvas id="resizer-canvas" hidden></canvas></div>
        </div>
      </div>
    </div>
  `;
  const drop=document.getElementById('resizer-drop');
  const input=document.getElementById('resizer-input');
  drop.addEventListener('click',()=> input.click());
  drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag');});
  drop.addEventListener('dragleave',()=> drop.classList.remove('drag'));
  drop.addEventListener('drop',e=>{e.preventDefault(); drop.classList.remove('drag'); const f=e.dataTransfer.files[0]; if(f) handleResizerFile(f);});
  input.addEventListener('change',e=>{ const f=e.target.files[0]; if(f) handleResizerFile(f);});
  document.getElementById('resizer-w').addEventListener('input',e=> handleResizerW(Number(e.target.value)));
  document.getElementById('resizer-h').addEventListener('input',e=> handleResizerH(Number(e.target.value)));
  document.getElementById('resizer-keep').addEventListener('change',e=> resizerState.keep=e.target.checked);
  document.getElementById('resizer-do').addEventListener('click', doResizer);
  document.getElementById('resizer-clear').addEventListener('click', clearResizer);
}
function handleResizerFile(f){
  if(!f.type.startsWith('image/')) return;
  resizerState.file=f;
  const url=URL.createObjectURL(f);
  resizerState.preview=url;
  document.getElementById('resizer-preview').src=url;
  document.getElementById('resizer-controls').style.display='block';
  document.getElementById('resizer-drop').style.display='none';
  const img=new Image(); img.onload=()=>{ resizerState.w=img.naturalWidth; resizerState.h=img.naturalHeight; resizerState.ratio=img.naturalWidth/img.naturalHeight; document.getElementById('resizer-w').value=resizerState.w; document.getElementById('resizer-h').value=resizerState.h; }; img.src=url;
  document.getElementById('resizer-result').innerHTML='<span class="toolkit-muted">Klik RESIZE untuk proses</span><canvas id="resizer-canvas" hidden></canvas>';
}
function handleResizerW(v){ resizerState.w=v; if(resizerState.keep && resizerState.ratio) { resizerState.h=Math.round(v/resizerState.ratio); document.getElementById('resizer-h').value=resizerState.h; } }
function handleResizerH(v){ resizerState.h=v; if(resizerState.keep && resizerState.ratio) { resizerState.w=Math.round(v*resizerState.ratio); document.getElementById('resizer-w').value=resizerState.w; } }
function applyResizerPreset(w,h){ resizerState.w=w; resizerState.h=h; resizerState.keep=false; document.getElementById('resizer-w').value=w; document.getElementById('resizer-h').value=h; document.getElementById('resizer-keep').checked=false; }
function doResizer(){
  const img=new Image(); img.onload=()=>{
    const canvas=document.getElementById('resizer-canvas'); canvas.width=resizerState.w; canvas.height=resizerState.h;
    const ctx=canvas.getContext('2d'); ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality='high'; ctx.drawImage(img,0,0,resizerState.w,resizerState.h);
    canvas.toBlob(blob=>{
      const url=URL.createObjectURL(blob); resizerState.result=url;
      document.getElementById('resizer-result').innerHTML=`<img src="${url}" alt="result" style="max-height:240px;object-fit:contain;margin-bottom:12px"><div class="toolkit-outmeta">${resizerState.w} × ${resizerState.h}px</div><button class="toolkit-btn toolkit-btn-green" id="resizer-dl">⬇ DOWNLOAD</button><canvas id="resizer-canvas" hidden></canvas>`;
      document.getElementById('resizer-dl').addEventListener('click', ()=>{
        const a=document.createElement('a'); a.href=url; const ext=resizerState.file.name.split('.').pop()||'png'; a.download=`resized_${resizerState.w}x${resizerState.h}.${ext}`; a.click();
      });
    }, resizerState.file.type, 0.95);
  }; img.src=resizerState.preview;
}
function clearResizer(){ resizerState={ file:null, preview:'', result:'', w:800, h:600, ratio:1, keep:true }; document.getElementById('resizer-controls').style.display='none'; document.getElementById('resizer-drop').style.display='block'; document.getElementById('resizer-result').innerHTML='<span class="toolkit-muted">Hasil akan muncul di sini</span><canvas id="resizer-canvas" hidden></canvas>'; }

// ── CROPPER (simple draggable overlay, no external lib) ──
let cropState={ file:null, preview:'', result:'', aspect:0, zoom:1, x:0, y:0, imgW:0, imgH:0, drag:false, sx:0, sy:0, ox:0, oy:0 };
function initCropper(){
  const c=document.getElementById('page-toolkit-cropper');
  if(!c || c.dataset.inited) return;
  c.dataset.inited='1';
  c.innerHTML=`
    <div class="toolkit-wrap">
      <button class="toolkit-back" onclick="switchTab('toolkit')">← Kembali ke Toolkit</button>
      <div class="toolkit-tool-head"><div class="toolkit-tool-icon" style="background:#C1FF72">${svg('cropper',24)}</div><div><h2>Image Cropper</h2><p>Pangkas dengan rasio preset & drag</p></div></div>
      <div class="toolkit-privacy">🔒 File Anda tidak pernah diunggah — proses di browser</div>
      <div id="cropper-drop" class="toolkit-drop"><div style="font-size:36px">📁</div><b>Drop gambar atau klik</b><span>JPG, PNG, WebP</span><input id="cropper-input" type="file" accept="image/*" hidden></div>
      <div id="cropper-work" style="display:none">
        <div class="toolkit-card-white" style="margin-bottom:12px">
          <b class="toolkit-small-title">Aspect Ratio</b>
          <div class="toolkit-presets">
            <button onclick="Toolkit.setCropAspect(0)" class="crop-aspect on" data-v="0">Free</button>
            <button onclick="Toolkit.setCropAspect(1)" class="crop-aspect" data-v="1">1:1</button>
            <button onclick="Toolkit.setCropAspect(1.333)" class="crop-aspect" data-v="1.333">4:3</button>
            <button onclick="Toolkit.setCropAspect(1.777)" class="crop-aspect" data-v="1.777">16:9</button>
            <button onclick="Toolkit.setCropAspect(0.75)" class="crop-aspect" data-v="0.75">3:4</button>
            <button onclick="Toolkit.setCropAspect(0.562)" class="crop-aspect" data-v="0.562">9:16</button>
          </div>
        </div>
        <div class="toolkit-crop-area" id="crop-area">
          <img id="crop-img" alt="crop">
          <div id="crop-box" class="toolkit-crop-box"></div>
        </div>
        <div class="toolkit-actions" style="margin-top:12px">
          <button id="crop-do" class="toolkit-btn toolkit-btn-yellow">✂️ CROP IMAGE</button>
          <button id="crop-clear" class="toolkit-btn toolkit-btn-pink">✕</button>
        </div>
        <div class="toolkit-result" id="cropper-result" style="margin-top:12px"><span class="toolkit-muted">Hasil crop akan muncul di sini</span></div>
      </div>
    </div>
  `;
  const drop=document.getElementById('cropper-drop');
  const inp=document.getElementById('cropper-input');
  drop.addEventListener('click',()=> inp.click());
  drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag');});
  drop.addEventListener('dragleave',()=> drop.classList.remove('drag'));
  drop.addEventListener('drop',e=>{e.preventDefault(); drop.classList.remove('drag'); const f=e.dataTransfer.files[0]; if(f) handleCropperFile(f);});
  inp.addEventListener('change',e=>{ const f=e.target.files[0]; if(f) handleCropperFile(f);});
  document.getElementById('crop-do').addEventListener('click', doCrop);
  document.getElementById('crop-clear').addEventListener('click', clearCropper);
}
function handleCropperFile(f){
  if(!f.type.startsWith('image/')) return;
  cropState.file=f; cropState.preview=URL.createObjectURL(f);
  document.getElementById('cropper-drop').style.display='none';
  document.getElementById('cropper-work').style.display='block';
  const img=document.getElementById('crop-img'); img.src=cropState.preview;
  img.onload=()=>{
    cropState.imgW=img.naturalWidth; cropState.imgH=img.naturalHeight;
    const area=document.getElementById('crop-area'); const rect=area.getBoundingClientRect();
    // init box centered 60%
    const bw=rect.width*0.6; const bh=cropState.aspect? bw/cropState.aspect : rect.height*0.6;
    cropState.x=(rect.width-bw)/2; cropState.y=(rect.height-bh)/2; cropState.bw=bw; cropState.bh=bh;
    updateCropBox();
    initCropDrag();
  };
}
function setCropAspect(v){
  cropState.aspect=v;
  document.querySelectorAll('.crop-aspect').forEach(b=> b.classList.toggle('on', Number(b.dataset.v)===v));
  // adjust box
  const area=document.getElementById('crop-area'); if(!area) return;
  const rect=area.getBoundingClientRect();
  if(v){ const bw=Math.min(rect.width*0.6, rect.height*0.6*v); const bh=bw/v; cropState.bw=bw; cropState.bh=bh; }
  updateCropBox();
}
function updateCropBox(){
  const box=document.getElementById('crop-box'); if(!box) return;
  box.style.left=cropState.x+'px'; box.style.top=cropState.y+'px'; box.style.width=cropState.bw+'px'; box.style.height=cropState.bh+'px';
}
function initCropDrag(){
  const box=document.getElementById('crop-box'); const area=document.getElementById('crop-area');
  if(!box||!area) return;
  let dragging=false;
  box.addEventListener('mousedown',e=>{dragging=true; cropState.sx=e.clientX; cropState.sy=e.clientY; cropState.ox=cropState.x; cropState.oy=cropState.y; e.preventDefault();});
  window.addEventListener('mousemove',e=>{
    if(!dragging) return;
    const dx=e.clientX-cropState.sx, dy=e.clientY-cropState.sy;
    const rect=area.getBoundingClientRect();
    cropState.x=Math.max(0, Math.min(rect.width-cropState.bw, cropState.ox+dx));
    cropState.y=Math.max(0, Math.min(rect.height-cropState.bh, cropState.oy+dy));
    updateCropBox();
  });
  window.addEventListener('mouseup',()=> dragging=false);
  // touch
  box.addEventListener('touchstart',e=>{ dragging=true; cropState.sx=e.touches[0].clientX; cropState.sy=e.touches[0].clientY; cropState.ox=cropState.x; cropState.oy=cropState.y; });
  window.addEventListener('touchmove',e=>{ if(!dragging) return; const dx=e.touches[0].clientX-cropState.sx, dy=e.touches[0].clientY-cropState.sy; const rect=area.getBoundingClientRect(); cropState.x=Math.max(0, Math.min(rect.width-cropState.bw, cropState.ox+dx)); cropState.y=Math.max(0, Math.min(rect.height-cropState.bh, cropState.oy+dy)); updateCropBox(); });
  window.addEventListener('touchend',()=> dragging=false);
}
function doCrop(){
  const img=document.getElementById('crop-img'); const area=document.getElementById('crop-area');
  if(!img||!area) return;
  const rect=area.getBoundingClientRect();
  const scaleX=cropState.imgW/rect.width; const scaleY=cropState.imgH/rect.height;
  const sx=cropState.x*scaleX, sy=cropState.y*scaleY, sw=cropState.bw*scaleX, sh=cropState.bh*scaleY;
  const canvas=document.createElement('canvas'); canvas.width=sw; canvas.height=sh;
  const ctx=canvas.getContext('2d');
  const tmp=new Image(); tmp.onload=()=>{
    ctx.drawImage(tmp, sx, sy, sw, sh, 0,0, sw, sh);
    canvas.toBlob(blob=>{
      const url=URL.createObjectURL(blob);
      document.getElementById('cropper-result').innerHTML=`<img src="${url}" alt="cropped" style="max-height:240px;object-fit:contain;margin-bottom:12px"><br><button class="toolkit-btn toolkit-btn-green" id="crop-dl">⬇ DOWNLOAD CROPPED</button>`;
      document.getElementById('crop-dl').onclick=()=> downloadBlob(blob, `cropped_${cropState.file.name}`);
    }, 'image/png');
  }; tmp.src=cropState.preview;
}
function clearCropper(){ cropState={ file:null, preview:'', result:'', aspect:0, zoom:1, x:0, y:0, imgW:0, imgH:0 }; document.getElementById('cropper-drop').style.display='block'; document.getElementById('cropper-work').style.display='none'; }

// ── CONVERTER ──
let convState={ file:null, preview:'', result:'', fmt:'image/webp', q:85, orig:0, rsize:0 };
function initConverter(){
  const c=document.getElementById('page-toolkit-converter');
  if(!c || c.dataset.inited) return;
  c.dataset.inited='1';
  c.innerHTML=`
    <div class="toolkit-wrap">
      <button class="toolkit-back" onclick="switchTab('toolkit')">← Kembali ke Toolkit</button>
      <div class="toolkit-tool-head"><div class="toolkit-tool-icon" style="background:#FF6B9D">${svg('converter',24)}</div><div><h2>Format Converter</h2><p>PNG ↔ JPG ↔ WebP + kontrol kualitas</p></div></div>
      <div class="toolkit-privacy">🔒 File Anda tidak pernah diunggah — proses di browser</div>
      <div class="toolkit-grid2">
        <div class="toolkit-panel">
          <div id="conv-drop" class="toolkit-drop"><div style="font-size:36px">📁</div><b>Drop gambar atau klik</b><span>JPG, PNG, WebP</span><input id="conv-input" type="file" accept="image/*" hidden></div>
          <div id="conv-ctrls" style="display:none">
            <div class="toolkit-preview"><img id="conv-preview" alt="preview"><div id="conv-orig" class="toolkit-outmeta"></div></div>
            <div class="toolkit-card-white"><b class="toolkit-small-title">Output Format</b><div class="toolkit-presets" id="conv-fmts"><button data-fmt="image/webp" class="on">WebP</button><button data-fmt="image/jpeg">JPG</button><button data-fmt="image/png">PNG</button></div></div>
            <div class="toolkit-card-white" id="conv-qwrap"><label class="toolkit-small-title">QUALITY: <span id="conv-qval">85</span>%</label><input id="conv-q" type="range" min="10" max="100" step="5" value="85" style="width:100%"></div>
            <div class="toolkit-actions"><button id="conv-do" class="toolkit-btn toolkit-btn-yellow">🔄 CONVERT</button><button id="conv-clear" class="toolkit-btn toolkit-btn-pink">✕</button></div>
          </div>
        </div>
        <div class="toolkit-panel"><div class="toolkit-result" id="conv-result"><span class="toolkit-muted">Hasil konversi akan muncul di sini</span></div></div>
      </div>
    </div>
  `;
  const drop=document.getElementById('conv-drop'), inp=document.getElementById('conv-input');
  drop.addEventListener('click',()=> inp.click());
  drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag');});
  drop.addEventListener('dragleave',()=> drop.classList.remove('drag'));
  drop.addEventListener('drop',e=>{e.preventDefault(); drop.classList.remove('drag'); const f=e.dataTransfer.files[0]; if(f) handleConvFile(f);});
  inp.addEventListener('change',e=>{ const f=e.target.files[0]; if(f) handleConvFile(f);});
  document.querySelectorAll('#conv-fmts button').forEach(b=> b.addEventListener('click',()=>{ document.querySelectorAll('#conv-fmts button').forEach(x=>x.classList.remove('on')); b.classList.add('on'); convState.fmt=b.dataset.fmt; document.getElementById('conv-qwrap').style.display=(convState.fmt==='image/png'?'none':'block'); }));
  document.getElementById('conv-q').addEventListener('input',e=>{ convState.q=Number(e.target.value); document.getElementById('conv-qval').textContent=convState.q; });
  document.getElementById('conv-do').addEventListener('click', doConv);
  document.getElementById('conv-clear').addEventListener('click', clearConv);
}
function handleConvFile(f){
  if(!f.type.startsWith('image/')) return;
  convState.file=f; convState.orig=f.size; convState.preview=URL.createObjectURL(f);
  document.getElementById('conv-preview').src=convState.preview;
  document.getElementById('conv-orig').textContent=`Original: ${fmtSize(f.size)} (${f.type})`;
  document.getElementById('conv-ctrls').style.display='block'; document.getElementById('conv-drop').style.display='none';
}
function doConv(){
  const img=new Image(); img.onload=()=>{
    const canvas=document.createElement('canvas'); canvas.width=img.naturalWidth; canvas.height=img.naturalHeight;
    const ctx=canvas.getContext('2d'); ctx.drawImage(img,0,0);
    canvas.toBlob(blob=>{
      convState.rsize=blob.size; const url=URL.createObjectURL(blob);
      const saving=Math.round((convState.orig - blob.size)/convState.orig*100);
      const color=saving>0?'#C1FF72':'#FF6B9D';
      document.getElementById('conv-result').innerHTML=`
        <img src="${url}" alt="converted" style="max-height:220px;object-fit:contain;margin-bottom:12px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%;margin-bottom:12px">
          <div style="background:#f3f4f6;border:2px solid #000;padding:8px;text-align:center"><div style="font-size:10px;font-weight:700">ORIGINAL</div><b>${fmtSize(convState.orig)}</b></div>
          <div style="background:${color};border:2px solid #000;padding:8px;text-align:center"><div style="font-size:10px;font-weight:700">CONVERTED</div><b>${fmtSize(blob.size)}</b></div>
        </div>
        <div style="background:${color};border:2px solid #000;padding:6px;text-align:center;font-weight:700;font-size:13px">${saving>0?`📉 ${saving}% lebih kecil`:`📈 ${Math.abs(saving)}% lebih besar`}</div>
        <button class="toolkit-btn toolkit-btn-green" id="conv-dl" style="margin-top:12px">⬇ DOWNLOAD</button>
      `;
      document.getElementById('conv-dl').onclick=()=>{
        const ext=convState.fmt.split('/')[1].replace('jpeg','jpg'); const base=convState.file.name.replace(/\.[^.]+$/,'');
        const a=document.createElement('a'); a.href=url; a.download=`${base}_converted.${ext}`; a.click();
      };
    }, convState.fmt, convState.q/100);
  }; img.src=convState.preview;
}
function clearConv(){ convState={ file:null, preview:'', result:'', fmt:'image/webp', q:85, orig:0, rsize:0 }; document.getElementById('conv-ctrls').style.display='none'; document.getElementById('conv-drop').style.display='block'; document.getElementById('conv-result').innerHTML='<span class="toolkit-muted">Hasil konversi akan muncul di sini</span>'; }

// ── WORD TO PDF ──
let wordState={ file:null, result:'' };
function initWord2Pdf(){
  const c=document.getElementById('page-toolkit-word2pdf');
  if(!c || c.dataset.inited) return;
  c.dataset.inited='1';
  c.innerHTML=`
    <div class="toolkit-wrap">
      <button class="toolkit-back" onclick="switchTab('toolkit')">← Kembali ke Toolkit</button>
      <div class="toolkit-tool-head"><div class="toolkit-tool-icon" style="background:#6EC1E4">${svg('word2pdf',24)}</div><div><h2>Word → PDF</h2><p>Konversi .docx ke PDF (client-side)</p></div></div>
      <div class="toolkit-privacy">🔒 File Anda tidak pernah diunggah — proses di browser</div>
      <div class="toolkit-card-white" style="background:#FF9F43;border-color:#000;margin-bottom:16px"><b>⚠️ Note:</b> Tabel/gambar kompleks mungkin tidak 100% presisi. Untuk hasil sempurna gunakan LibreOffice.</div>
      <div class="toolkit-grid2">
        <div class="toolkit-panel">
          <div id="word-drop" class="toolkit-drop"><div style="font-size:36px">📝</div><b>Drop .docx atau klik</b><span>Hanya .docx</span><input id="word-input" type="file" accept=".docx" hidden></div>
          <div id="word-ctrls" style="display:none">
            <div class="toolkit-card-white"><div id="word-info"></div></div>
            <div class="toolkit-actions"><button id="word-do" class="toolkit-btn toolkit-btn-yellow">📄 CONVERT TO PDF</button><button id="word-clear" class="toolkit-btn toolkit-btn-pink">✕</button></div>
          </div>
        </div>
        <div class="toolkit-panel"><div class="toolkit-result" id="word-result"><span class="toolkit-muted">Hasil PDF akan muncul di sini</span></div></div>
      </div>
    </div>
  `;
  const drop=document.getElementById('word-drop'), inp=document.getElementById('word-input');
  drop.addEventListener('click',()=> inp.click());
  drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag');});
  drop.addEventListener('dragleave',()=> drop.classList.remove('drag'));
  drop.addEventListener('drop',e=>{e.preventDefault(); drop.classList.remove('drag'); const f=e.dataTransfer.files[0]; if(f) handleWordFile(f);});
  inp.addEventListener('change',e=>{ const f=e.target.files[0]; if(f) handleWordFile(f);});
  document.getElementById('word-do').addEventListener('click', doWord);
  document.getElementById('word-clear').addEventListener('click', clearWord);
}
function handleWordFile(f){
  if(!f.name.endsWith('.docx')){ alert('Hanya .docx'); return; }
  wordState.file=f; document.getElementById('word-drop').style.display='none'; document.getElementById('word-ctrls').style.display='block';
  document.getElementById('word-info').innerHTML=`<b>${f.name}</b><br><span style="font-size:12px;color:#666">${fmtSize(f.size)}</span>`;
}
async function doWord(){
  const btn=document.getElementById('word-do'); btn.textContent='⏳ Converting...'; btn.disabled=true;
  try{
    await Promise.all([
      loadLib('https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js').catch(()=> loadLib('https://unpkg.com/mammoth@1.8.0/mammoth.browser.min.js')),
      loadLib('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
    ]);
    const mammothLib = window.mammoth;
    const { jsPDF } = window.jspdf;
    const buf=await wordState.file.arrayBuffer();
    const result=await mammothLib.convertToHtml({ arrayBuffer: buf });
    const html=result.value;
    const div=document.createElement('div'); div.innerHTML=html; div.style.cssText='position:absolute;left:-9999px;top:0;width:700px;padding:40px;font-family:serif;font-size:12pt;line-height:1.6;'; document.body.appendChild(div);
    const pdf=new jsPDF('p','mm','a4'); const W=pdf.internal.pageSize.getWidth(), H=pdf.internal.pageSize.getHeight(), m=20, cw=W-m*2;
    const text=div.innerText||div.textContent||''; const lines=pdf.splitTextToSize(text, cw);
    let y=m; const lh=6;
    for(let i=0;i<lines.length;i++){ if(y+lh>H-m){ pdf.addPage(); y=m; } pdf.text(lines[i], m, y); y+=lh; }
    document.body.removeChild(div);
    const blob=pdf.output('blob'); const url=URL.createObjectURL(blob); wordState.result=url;
    document.getElementById('word-result').innerHTML=`<div style="font-size:48px">✅</div><b>Conversion Complete!</b><p style="font-size:13px;color:#666;margin:8px 0">Siap download</p><button class="toolkit-btn toolkit-btn-green" id="word-dl">⬇ DOWNLOAD PDF</button>`;
    document.getElementById('word-dl').onclick=()=>{ const a=document.createElement('a'); a.href=url; a.download=wordState.file.name.replace('.docx','.pdf'); a.click(); };
  }catch(e){ console.error(e); alert('Error: '+e.message); }
  btn.textContent='📄 CONVERT TO PDF'; btn.disabled=false;
}
function clearWord(){ wordState={ file:null, result:'' }; document.getElementById('word-drop').style.display='block'; document.getElementById('word-ctrls').style.display='none'; document.getElementById('word-result').innerHTML='<span class="toolkit-muted">Hasil PDF akan muncul di sini</span>'; }

// ── PDF MERGER ──
let mergerFiles=[]; let mergerResult='';
async function initMerger(){
  const c=document.getElementById('page-toolkit-merger');
  if(!c || c.dataset.inited) return;
  c.dataset.inited='1';
  c.innerHTML=`
    <div class="toolkit-wrap">
      <button class="toolkit-back" onclick="switchTab('toolkit')">← Kembali ke Toolkit</button>
      <div class="toolkit-tool-head"><div class="toolkit-tool-icon" style="background:#FF9F43">${svg('merger',24)}</div><div><h2>PDF Merger</h2><p>Gabung banyak PDF — drag untuk urutkan</p></div></div>
      <div class="toolkit-privacy">🔒 File Anda tidak pernah diunggah — proses di browser</div>
      <div class="toolkit-grid2">
        <div class="toolkit-panel">
          <div id="merge-drop" class="toolkit-drop"><div style="font-size:36px">📁</div><b>Drop PDF atau klik</b><span>Bisa banyak file</span><input id="merge-input" type="file" accept=".pdf" multiple hidden></div>
          <div id="merge-list" class="toolkit-card-white" style="display:none"></div>
          <button id="merge-do" class="toolkit-btn toolkit-btn-yellow" style="display:none;width:100%;margin-top:12px">📎 MERGE PDFs</button>
        </div>
        <div class="toolkit-panel"><div class="toolkit-result" id="merge-result"><span class="toolkit-muted">Hasil gabungan akan muncul di sini</span></div></div>
      </div>
    </div>
  `;
  const drop=document.getElementById('merge-drop'), inp=document.getElementById('merge-input');
  drop.addEventListener('click',()=> inp.click());
  drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag');});
  drop.addEventListener('dragleave',()=> drop.classList.remove('drag'));
  drop.addEventListener('drop',e=>{e.preventDefault(); drop.classList.remove('drag'); if(e.dataTransfer.files.length) handleMergeFiles(e.dataTransfer.files);});
  inp.addEventListener('change',e=> handleMergeFiles(e.target.files));
  document.getElementById('merge-do').addEventListener('click', doMerge);
}
async function handleMergeFiles(list){
  await loadLib('https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js').catch(()=> loadLib('https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js'));
  for(let i=0;i<list.length;i++){
    const f=list[i]; if(f.type!=='application/pdf') continue;
    const buf=await f.arrayBuffer(); const pdf=await PDFLib.PDFDocument.load(buf);
    mergerFiles.push({ id:`${f.name}-${Date.now()}-${Math.random()}`, file:f, name:f.name, pages:pdf.getPageCount() });
  }
  renderMergeList();
}
function renderMergeList(){
  const el=document.getElementById('merge-list');
  if(!mergerFiles.length){ el.style.display='none'; document.getElementById('merge-do').style.display='none'; return; }
  el.style.display='block'; document.getElementById('merge-do').style.display='block';
  const total=mergerFiles.reduce((s,f)=> s+f.pages,0);
  el.innerHTML=`<div style="display:flex;justify-content:space-between;margin-bottom:8px"><b>Files (${mergerFiles.length}) — ${total} pages</b><button onclick="Toolkit.clearMerger()" style="font-size:12px;color:#e11">Clear All</button></div>` + mergerFiles.map((f,i)=>`
    <div draggable="true" data-idx="${i}" class="toolkit-file-item" style="cursor:grab">
      <span>☰</span><b style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i+1}. ${f.name}</b><span style="font-size:11px;background:#eee;border:1px solid #000;padding:2px 6px">${f.pages}p</span><button onclick="Toolkit.removeMerger('${f.id}')" style="color:#e11;font-weight:700">✕</button>
    </div>
  `).join('');
  // drag reorder
  el.querySelectorAll('.toolkit-file-item').forEach(item=>{
    item.addEventListener('dragstart',e=> e.dataTransfer.setData('idx', item.dataset.idx));
    item.addEventListener('dragover',e=> e.preventDefault());
    item.addEventListener('drop',e=>{
      const from=Number(e.dataTransfer.getData('idx')), to=Number(item.dataset.idx);
      if(from===to) return;
      const [moved]=mergerFiles.splice(from,1); mergerFiles.splice(to,0,moved); renderMergeList();
    });
  });
}
function removeMerger(id){ mergerFiles=mergerFiles.filter(f=> f.id!==id); renderMergeList(); }
function clearMerger(){ mergerFiles=[]; renderMergeList(); document.getElementById('merge-result').innerHTML='<span class="toolkit-muted">Hasil gabungan akan muncul di sini</span>'; }
async function doMerge(){
  if(mergerFiles.length<2){ alert('Minimal 2 PDF'); return; }
  const btn=document.getElementById('merge-do'); btn.textContent='⏳ Merging...'; btn.disabled=true;
  try{
    await loadLib('https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js').catch(()=> loadLib('https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js'));
    const merged=await PDFLib.PDFDocument.create();
    for(const f of mergerFiles){
      const buf=await f.file.arrayBuffer(); const pdf=await PDFLib.PDFDocument.load(buf);
      const pages=await merged.copyPages(pdf, pdf.getPageIndices()); pages.forEach(p=> merged.addPage(p));
    }
    const bytes=await merged.save(); const blob=new Blob([bytes],{type:'application/pdf'}); const url=URL.createObjectURL(blob); mergerResult=url;
    document.getElementById('merge-result').innerHTML=`<div style="font-size:48px">✅</div><b>Merge Complete!</b><p style="font-size:13px;color:#666">${mergerFiles.length} files → ${mergerFiles.reduce((s,f)=>s+f.pages,0)} pages</p><button class="toolkit-btn toolkit-btn-green" id="merge-dl">⬇ DOWNLOAD MERGED PDF</button>`;
    document.getElementById('merge-dl').onclick=()=> downloadBlob(blob,'merged.pdf');
  }catch(e){ alert('Error: '+e.message); }
  btn.textContent='📎 MERGE PDFs'; btn.disabled=false;
}

// ── PDF SPLITTER ──
let splitFile=null, splitPages=0, splitMode='range', splitResult='', splitCount=0;
function initSplitter(){
  const c=document.getElementById('page-toolkit-splitter');
  if(!c || c.dataset.inited) return;
  c.dataset.inited='1';
  c.innerHTML=`
    <div class="toolkit-wrap">
      <button class="toolkit-back" onclick="switchTab('toolkit')">← Kembali ke Toolkit</button>
      <div class="toolkit-tool-head"><div class="toolkit-tool-icon" style="background:#C1FF72">${svg('splitter',24)}</div><div><h2>PDF Splitter</h2><p>Pecah per halaman / rentang, ZIP</p></div></div>
      <div class="toolkit-privacy">🔒 File Anda tidak pernah diunggah — proses di browser</div>
      <div class="toolkit-grid2">
        <div class="toolkit-panel">
          <div id="split-drop" class="toolkit-drop"><div style="font-size:36px">📁</div><b>Drop PDF atau klik</b><span>Hanya 1 PDF</span><input id="split-input" type="file" accept=".pdf" hidden></div>
          <div id="split-ctrls" style="display:none">
            <div class="toolkit-card-white"><div id="split-info"></div></div>
            <div class="toolkit-card-white">
              <b class="toolkit-small-title">Mode</b>
              <div class="toolkit-presets">
                <button id="split-range-btn" class="on">📋 By Range</button>
                <button id="split-each-btn">📄 Each Page</button>
              </div>
              <div id="split-range-wrap" style="margin-top:12px"><label class="toolkit-small-title">PAGE RANGES (e.g., 1-3, 5, 7-10)</label><input id="split-range" type="text" class="toolkit-input" placeholder="1-3"></div>
              <div id="split-each-hint" style="display:none;font-size:13px;color:#666;margin-top:8px">Akan pecah jadi tiap halaman → ZIP</div>
            </div>
            <div class="toolkit-actions"><button id="split-do" class="toolkit-btn toolkit-btn-yellow">📑 SPLIT PDF</button><button id="split-clear" class="toolkit-btn toolkit-btn-pink">✕</button></div>
          </div>
        </div>
        <div class="toolkit-panel"><div class="toolkit-result" id="split-result"><span class="toolkit-muted">Hasil split akan muncul di sini</span></div></div>
      </div>
    </div>
  `;
  const drop=document.getElementById('split-drop'), inp=document.getElementById('split-input');
  drop.addEventListener('click',()=> inp.click());
  drop.addEventListener('dragover',e=>{e.preventDefault(); drop.classList.add('drag');});
  drop.addEventListener('dragleave',()=> drop.classList.remove('drag'));
  drop.addEventListener('drop',e=>{e.preventDefault(); drop.classList.remove('drag'); const f=e.dataTransfer.files[0]; if(f) handleSplitFile(f);});
  inp.addEventListener('change',e=>{ const f=e.target.files[0]; if(f) handleSplitFile(f);});
  document.getElementById('split-range-btn').addEventListener('click',()=> setSplitMode('range'));
  document.getElementById('split-each-btn').addEventListener('click',()=> setSplitMode('each'));
  document.getElementById('split-do').addEventListener('click', doSplit);
  document.getElementById('split-clear').addEventListener('click', clearSplitter);
}
function setSplitMode(m){ splitMode=m; document.getElementById('split-range-btn').classList.toggle('on', m==='range'); document.getElementById('split-each-btn').classList.toggle('on', m==='each'); document.getElementById('split-range-wrap').style.display=m==='range'?'block':'none'; document.getElementById('split-each-hint').style.display=m==='each'?'block':'none'; }
async function handleSplitFile(f){
  if(f.type!=='application/pdf'){ alert('Hanya PDF'); return; }
  await loadLib('https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js').catch(()=> loadLib('https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js'));
  const buf=await f.arrayBuffer(); const pdf=await PDFLib.PDFDocument.load(buf);
  splitFile=f; splitPages=pdf.getPageCount();
  document.getElementById('split-drop').style.display='none'; document.getElementById('split-ctrls').style.display='block';
  document.getElementById('split-info').innerHTML=`<b>${f.name}</b><br><span style="font-size:12px;color:#666">${splitPages} pages • ${fmtSize(f.size)}</span>`;
  document.getElementById('split-range').placeholder=`1-${splitPages}`;
}
function parseRanges(input, max){
  const ranges=[]; const parts=input.split(',').map(s=>s.trim()).filter(Boolean);
  for(const part of parts){
    if(part.includes('-')){
      const [s,e]=part.split('-').map(Number);
      if(!isNaN(s)&&!isNaN(e)&&s>=1&&e<=max&&s<=e){ const arr=[]; for(let i=s;i<=e;i++) arr.push(i-1); ranges.push(arr); }
    } else {
      const p=Number(part); if(!isNaN(p)&&p>=1&&p<=max) ranges.push([p-1]);
    }
  }
  return ranges;
}
async function doSplit(){
  if(!splitFile) return;
  const btn=document.getElementById('split-do'); btn.textContent='⏳ Splitting...'; btn.disabled=true;
  try{
    await Promise.all([
      loadLib('https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js').catch(()=> loadLib('https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js')),
      loadLib('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js')
    ]);
    const buf=await splitFile.arrayBuffer(); const src=await PDFLib.PDFDocument.load(buf);
    if(splitMode==='each'){
      const zip=new JSZip();
      for(let i=0;i<splitPages;i++){
        const np=await PDFLib.PDFDocument.create(); const [pg]=await np.copyPages(src,[i]); np.addPage(pg); const bytes=await np.save(); zip.file(`page_${i+1}.pdf`, bytes);
      }
      const blob=await zip.generateAsync({type:'blob'}); const url=URL.createObjectURL(blob); splitResult=url; splitCount=splitPages;
      document.getElementById('split-result').innerHTML=`<div style="font-size:48px">✅</div><b>Split Complete!</b><p style="font-size:13px;color:#666">${splitCount} files (ZIP)</p><button class="toolkit-btn toolkit-btn-green" id="split-dl">⬇ DOWNLOAD ZIP</button>`;
      document.getElementById('split-dl').onclick=()=> downloadBlob(blob, splitFile.name.replace('.pdf','_split.zip'));
    } else {
      const ranges=parseRanges(document.getElementById('split-range').value, splitPages);
      if(!ranges.length){ alert('Range tidak valid. Contoh: 1-3, 5, 7-10'); btn.textContent='📑 SPLIT PDF'; btn.disabled=false; return; }
      if(ranges.length===1){
        const np=await PDFLib.PDFDocument.create(); const pgs=await np.copyPages(src, ranges[0]); pgs.forEach(p=> np.addPage(p)); const bytes=await np.save(); const blob=new Blob([bytes],{type:'application/pdf'}); const url=URL.createObjectURL(blob); splitResult=url; splitCount=1;
        document.getElementById('split-result').innerHTML=`<div style="font-size:48px">✅</div><b>Split Complete!</b><p style="font-size:13px;color:#666">1 file</p><button class="toolkit-btn toolkit-btn-green" id="split-dl">⬇ DOWNLOAD PDF</button>`;
        document.getElementById('split-dl').onclick=()=> downloadBlob(blob, splitFile.name.replace('.pdf','_split.pdf'));
      } else {
        const zip=new JSZip();
        for(let i=0;i<ranges.length;i++){
          const np=await PDFLib.PDFDocument.create(); const pgs=await np.copyPages(src, ranges[i]); pgs.forEach(p=> np.addPage(p)); const bytes=await np.save();
          const label=ranges[i].length===1? `page_${ranges[i][0]+1}` : `pages_${ranges[i][0]+1}-${ranges[i][ranges[i].length-1]+1}`;
          zip.file(`${label}.pdf`, bytes);
        }
        const blob=await zip.generateAsync({type:'blob'}); const url=URL.createObjectURL(blob); splitResult=url; splitCount=ranges.length;
        document.getElementById('split-result').innerHTML=`<div style="font-size:48px">✅</div><b>Split Complete!</b><p style="font-size:13px;color:#666">${splitCount} files (ZIP)</p><button class="toolkit-btn toolkit-btn-green" id="split-dl">⬇ DOWNLOAD ZIP</button>`;
        document.getElementById('split-dl').onclick=()=> downloadBlob(blob, splitFile.name.replace('.pdf','_split.zip'));
      }
    }
  }catch(e){ alert('Error: '+e.message); }
  btn.textContent='📑 SPLIT PDF'; btn.disabled=false;
}
function clearSplitter(){ splitFile=null; splitPages=0; splitResult=''; document.getElementById('split-drop').style.display='block'; document.getElementById('split-ctrls').style.display='none'; document.getElementById('split-result').innerHTML='<span class="toolkit-muted">Hasil split akan muncul di sini</span>'; }

// ── INIT HUB ──
function initHub(){
  const c=document.getElementById('page-toolkit');
  if(!c) return;
  if(c.dataset.inited) return;
  c.dataset.inited='1';
  c.innerHTML=renderHub();
}

// ── PUBLIC API ──
window.Toolkit={
  initHub, initResizer, initCropper, initConverter, initWord2Pdf, initMerger, initSplitter,
  applyResizerPreset, setCropAspect, removeMerger, clearMerger
};

// Auto-init hub when page-toolkit becomes visible (via switchTab)
document.addEventListener('DOMContentLoaded', ()=>{
  // lazy init when switchTab calls
});

})();
