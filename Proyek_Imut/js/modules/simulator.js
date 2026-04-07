/**
 * ElektroDict Simulator Module
 * Logic Gate Simulator and Interactive Schematics (SKEMA).
 */

const SKEMA = [
  {
    id:'saklar-tunggal',
    title:'Saklar Tunggal — 1 Lampu',
    desc:'Satu saklar mengontrol satu lampu. Arus mengalir dari L → Saklar → Lampu → N.',
    toggles:[{id:'s1',label:'Saklar'}],
    render(states){
      const on = states.s1;
      const lampColor = on ? '#facc15' : '#d1d5db';
      const lampGlow  = on ? 'drop-shadow(0 0 6px #facc15)' : 'none';
      const wireColor = on ? '#22c55e' : '#9ca3af';
      const swY1=80, swY2=110;
      return `<svg viewBox="0 0 320 180" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <text x="12" y="62" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">N</text>
        <text x="12" y="102" font-size="13" font-weight="700" fill="#ef4444" font-family="monospace">L</text>
        <line x1="30" y1="58" x2="260" y2="58" class="wire-n"/>
        <line x1="30" y1="98" x2="140" y2="98" class="wire-l"/>
        <rect x="128" y="88" width="24" height="36" rx="4" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
        <circle cx="140" cy="${swY1}" r="3" fill="#6b7280"/>
        <circle cx="140" cy="${swY2}" r="3" fill="#6b7280"/>
        ${on
          ? `<line x1="140" y1="${swY1}" x2="140" y2="${swY2}" stroke="#22c55e" stroke-width="2.5"/>`
          : `<line x1="140" y1="${swY1}" x2="152" y2="${swY2-8}" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>`}
        <polyline points="140,88 140,58 220,58" stroke="${wireColor}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <polyline points="140,124 140,140 260,140 260,58" stroke="${wireColor}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <circle cx="260" cy="100" r="22" fill="${lampColor}" stroke="#d97706" stroke-width="2" style="filter:${lampGlow}"/>
        <line x1="253" y1="93" x2="267" y2="107" stroke="#92400e" stroke-width="2"/>
        <line x1="267" y1="93" x2="253" y2="107" stroke="#92400e" stroke-width="2"/>
        ${on?`<circle cx="260" cy="100" r="28" fill="#facc1522" stroke="none"/>`:``}
        <line x1="260" y1="122" x2="260" y2="140" stroke="#9ca3af" stroke-width="2"/>
        <text x="160" y="170" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'● LAMPU MENYALA':'○ LAMPU MATI'}</text>
      </svg>`;
    }
  },
  {
    id:'saklar-ganda',
    title:'Saklar Ganda — 2 Lampu Independen',
    desc:'Dua saklar mengontrol dua lampu secara terpisah. Masing-masing independen.',
    toggles:[{id:'sa',label:'Saklar A'},{id:'sb',label:'Saklar B'}],
    render(states){
      const onA=states.sa, onB=states.sb;
      const ca=onA?'#facc15':'#d1d5db', cb=onB?'#facc15':'#d1d5db';
      const ga=onA?'drop-shadow(0 0 6px #facc15)':'none';
      const gb=onB?'drop-shadow(0 0 6px #facc15)':'none';
      const wa=onA?'#22c55e':'#9ca3af', wb=onB?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 340 190" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <text x="12" y="55" font-size="13" font-weight="700" fill="#3b82f6" font-family="monospace">N</text>
        <text x="12" y="95" font-size="13" font-weight="700" fill="#ef4444" font-family="monospace">L</text>
        <line x1="30" y1="50" x2="310" y2="50" class="wire-n"/>
        <line x1="30" y1="90" x2="80" y2="90" class="wire-l"/>
        <line x1="80" y1="90" x2="200" y2="90" class="wire-l"/>
        <rect x="70" y="80" width="20" height="30" rx="3" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
        <circle cx="80" cy="84" r="2.5" fill="#6b7280"/>
        <circle cx="80" cy="106" r="2.5" fill="#6b7280"/>
        ${onA?`<line x1="80" y1="84" x2="80" y2="106" stroke="#22c55e" stroke-width="2.5"/>`:`<line x1="80" y1="84" x2="90" y2="100" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>`}
        <polyline points="80,80 80,50 180,50" stroke="${wa}" stroke-width="3" fill="none" ${onA?'class="wire-flow"':''}/>
        <polyline points="80,110 80,150 180,150 180,50" stroke="${wa}" stroke-width="3" fill="none" ${onA?'class="wire-flow"':''}/>
        <rect x="190" y="80" width="20" height="30" rx="3" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.5"/>
        <circle cx="200" cy="84" r="2.5" fill="#6b7280"/>
        <circle cx="200" cy="106" r="2.5" fill="#6b7280"/>
        ${onB?`<line x1="200" y1="84" x2="200" y2="106" stroke="#22c55e" stroke-width="2.5"/>`:`<line x1="200" y1="84" x2="210" y2="100" stroke="#6b7280" stroke-width="2" stroke-linecap="round"/>`}
        <polyline points="200,80 200,50 295,50" stroke="${wb}" stroke-width="3" fill="none" ${onB?'class="wire-flow"':''}/>
        <polyline points="200,110 200,150 295,150 295,50" stroke="${wb}" stroke-width="3" fill="none" ${onB?'class="wire-flow"':''}/>
        <circle cx="180" cy="95" r="18" fill="${ca}" stroke="#d97706" stroke-width="2" style="filter:${ga}"/>
        <line x1="174" y1="89" x2="186" y2="101" stroke="#92400e" stroke-width="1.5"/>
        <line x1="186" y1="89" x2="174" y2="101" stroke="#92400e" stroke-width="1.5"/>
        ${onA?`<circle cx="180" cy="95" r="24" fill="#facc1522"/>`:``}
        <circle cx="295" cy="95" r="18" fill="${cb}" stroke="#d97706" stroke-width="2" style="filter:${gb}"/>
        <line x1="289" y1="89" x2="301" y2="101" stroke="#92400e" stroke-width="1.5"/>
        <line x1="301" y1="89" x2="289" y2="101" stroke="#92400e" stroke-width="1.5"/>
        ${onB?`<circle cx="295" cy="95" r="24" fill="#facc1522"/>`:``}
        <text x="180" y="122" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">Lampu A</text>
        <text x="295" y="122" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">Lampu B</text>
        <text x="80" y="175" font-size="9" fill="${onA?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${onA?'● ON':'○ OFF'}</text>
        <text x="200" y="175" font-size="9" fill="${onB?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${onB?'● ON':'○ OFF'}</text>
      </svg>`;
    }
  },
  {
    id:'seri',
    title:'Rangkaian Seri — Resistor',
    desc:'Resistor terhubung ujung-ke-ujung. Arus sama di semua komponen, tegangan terbagi.',
    toggles:[{id:'sw',label:'Hubungkan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      const r1v=on?'4.0V':'—', r2v=on?'8.0V':'—';
      return `<svg viewBox="0 0 340 160" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="55" width="16" height="50" rx="3" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="22" y1="60" x2="34" y2="60" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="68" x2="31" y2="68" stroke="#374151" stroke-width="1.5"/>
        <line x1="22" y1="76" x2="34" y2="76" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="84" x2="31" y2="84" stroke="#374151" stroke-width="1.5"/>
        <text x="28" y="118" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">12V</text>
        <polyline points="36,62 36,38 300,38 300,80" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <rect x="100" y="70" width="60" height="24" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="130" y="86" font-size="11" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R1 20Ω</text>
        <rect x="200" y="70" width="60" height="24" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="230" y="86" font-size="11" font-weight="700" fill="#5b21b6" text-anchor="middle" font-family="monospace">R2 40Ω</text>
        <line x1="36" y1="80" x2="100" y2="80" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="160" y1="80" x2="200" y2="80" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <polyline points="260,80 300,80 300,120 36,120 36,100" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <text x="130" y="110" font-size="10" fill="${on?'#d97706':'#9ca3af'}" text-anchor="middle" font-family="monospace">${r1v}</text>
        <text x="230" y="110" font-size="10" fill="${on?'#7c3aed':'#9ca3af'}" text-anchor="middle" font-family="monospace">${r2v}</text>
        <text x="175" y="32" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'I = 0.2A →':''}</text>
        <text x="175" y="150" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Rtotal = 60Ω':'Hubungkan untuk mengalirkan arus'}</text>
      </svg>`;
    }
  },
  {
    id:'paralel',
    title:'Rangkaian Paralel — Resistor',
    desc:'Resistor terhubung ujung bersama. Tegangan sama, arus terbagi.',
    toggles:[{id:'sw',label:'Hubungkan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 340 175" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="62" width="16" height="50" rx="3" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="22" y1="67" x2="34" y2="67" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="75" x2="31" y2="75" stroke="#374151" stroke-width="1.5"/>
        <line x1="22" y1="83" x2="34" y2="83" stroke="#374151" stroke-width="2.5"/>
        <line x1="25" y1="91" x2="31" y2="91" stroke="#374151" stroke-width="1.5"/>
        <text x="28" y="122" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">12V</text>
        <polyline points="36,68 36,38 280,38" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <polyline points="36,112 36,138 280,138" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <line x1="120" y1="38" x2="120" y2="65" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <rect x="103" y="65" width="34" height="44" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="120" y="91" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R1</text>
        <text x="120" y="103" font-size="9" fill="#92400e" text-anchor="middle" font-family="monospace">30Ω</text>
        <line x1="120" y1="109" x2="120" y2="138" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <line x1="200" y1="38" x2="200" y2="65" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <rect x="183" y="65" width="34" height="44" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="200" y="91" font-size="10" font-weight="700" fill="#5b21b6" text-anchor="middle" font-family="monospace">R2</text>
        <text x="200" y="103" font-size="9" fill="#5b21b6" text-anchor="middle" font-family="monospace">60Ω</text>
        <line x1="200" y1="109" x2="200" y2="138" stroke="${wc}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        ${on?`<text x="120" y="160" font-size="9" fill="#d97706" text-anchor="middle" font-family="monospace">I1=0.4A</text>
        <text x="200" y="160" font-size="9" fill="#7c3aed" text-anchor="middle" font-family="monospace">I2=0.2A</text>
        <text x="160" y="172" font-size="9" fill="#22c55e" text-anchor="middle" font-family="monospace">Itotal=0.6A | Req=20Ω</text>`:
        `<text x="160" y="165" font-size="10" fill="#9ca3af" text-anchor="middle" font-family="monospace">Hubungkan untuk melihat arus</text>`}
      </svg>`;
    }
  },
  {
    id:'rc-filter',
    title:'Filter RC Low-Pass',
    desc:'Kapasitor + Resistor. Frekuensi rendah diloloskan, frekuensi tinggi diblokir.',
    toggles:[{id:'freq',label:'Frekuensi Tinggi'}],
    render(states){
      const hiFreq=states.freq;
      const outColor=hiFreq?'#ef4444':'#22c55e';
      const outLabel=hiFreq?'Sinyal Terblokir':'Sinyal Lewat';
      const capColor=hiFreq?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 340 165" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38" cy="88" r="22" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
        <text x="38" y="84" font-size="8" fill="#15803d" text-anchor="middle" font-family="monospace">Vin</text>
        <text x="38" y="96" font-size="8" fill="#15803d" text-anchor="middle" font-family="monospace">~AC</text>
        <line x1="60" y1="76" x2="110" y2="76" stroke="#22c55e" stroke-width="3" class="wire-flow"/>
        <rect x="110" y="66" width="60" height="22" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="140" y="81" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R  1kΩ</text>
        <line x1="170" y1="76" x2="220" y2="76" stroke="${outColor}" stroke-width="3" ${!hiFreq?'class="wire-flow"':''}/>
        <line x1="220" y1="60" x2="220" y2="72" stroke="${capColor}" stroke-width="2.5"/>
        <line x1="208" y1="72" x2="232" y2="72" stroke="${capColor}" stroke-width="3"/>
        <line x1="208" y1="80" x2="232" y2="80" stroke="${capColor}" stroke-width="3"/>
        <line x1="220" y1="80" x2="220" y2="112" stroke="${capColor}" stroke-width="2.5"/>
        <text x="238" y="79" font-size="9" fill="#0891b2" font-family="monospace">C</text>
        <text x="238" y="89" font-size="9" fill="#0891b2" font-family="monospace">10μF</text>
        <line x1="220" y1="76" x2="290" y2="76" stroke="${outColor}" stroke-width="3" ${!hiFreq?'class="wire-flow"':''}/>
        <circle cx="290" cy="76" r="5" fill="${outColor}"/>
        <text x="290" y="65" font-size="9" fill="${outColor}" text-anchor="middle" font-family="monospace">Vout</text>
        <polyline points="60,100 60,112 290,112 290,81" stroke="#9ca3af" stroke-width="2" fill="none"/>
        <line x1="290" y1="112" x2="290" y2="130"/>
        <line x1="278" y1="130" x2="302" y2="130" stroke="#9ca3af" stroke-width="2"/>
        <line x1="283" y1="135" x2="297" y2="135" stroke="#9ca3af" stroke-width="2"/>
        <line x1="287" y1="140" x2="293" y2="140" stroke="#9ca3af" stroke-width="2"/>
        <text x="170" y="155" font-size="10" fill="${outColor}" text-anchor="middle" font-family="monospace">● ${outLabel}</text>
        <text x="170" y="140" font-size="9" fill="#6b7280" text-anchor="middle" font-family="monospace">${hiFreq?'fc=159Hz — diatas cutoff':'fc=159Hz — dibawah cutoff'}</text>
      </svg>`;
    }
  },
  {
    id:'transistor-switch',
    title:'Transistor BJT sebagai Saklar',
    desc:'Arus kecil di Base (IB) mengontrol arus besar di Collector. ON/OFF digital.',
    toggles:[{id:'ib',label:'Beri sinyal Base'}],
    render(states){
      const on=states.ib;
      const lampC=on?'#facc15':'#d1d5db';
      const lampG=on?'drop-shadow(0 0 6px #facc15)':'none';
      const icC=on?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 300 190" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="20" x2="240" y2="20" stroke="#ef4444" stroke-width="2.5"/>
        <text x="20" y="25" font-size="10" font-weight="700" fill="#ef4444" font-family="monospace">VCC</text>
        <circle cx="180" cy="55" r="18" fill="${lampC}" stroke="#d97706" stroke-width="2" style="filter:${lampG}"/>
        <line x1="174" y1="49" x2="186" y2="61" stroke="#92400e" stroke-width="1.5"/>
        <line x1="186" y1="49" x2="174" y2="61" stroke="#92400e" stroke-width="1.5"/>
        ${on?`<circle cx="180" cy="55" r="24" fill="#facc1522"/>`:''}
        <line x1="180" y1="20" x2="180" y2="37" stroke="${icC}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="180" y1="73" x2="180" y2="100" stroke="${icC}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <circle cx="180" cy="115" r="20" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        <text x="180" y="112" font-size="9" fill="#334155" text-anchor="middle" font-family="monospace">NPN</text>
        <text x="180" y="123" font-size="8" fill="#64748b" text-anchor="middle" font-family="monospace">BJT</text>
        <line x1="40" y1="115" x2="160" y2="115" stroke="${on?'#f59e0b':'#9ca3af'}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <text x="30" y="112" font-size="9" font-weight="700" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">B</text>
        <text x="30" y="122" font-size="8" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">${on?'0.7V':'0V'}</text>
        <line x1="180" y1="135" x2="180" y2="160" stroke="${icC}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="165" y1="160" x2="195" y2="160" stroke="#6b7280" stroke-width="2.5"/>
        <line x1="170" y1="165" x2="190" y2="165" stroke="#6b7280" stroke-width="2"/>
        <line x1="175" y1="170" x2="185" y2="170" stroke="#6b7280" stroke-width="1.5"/>
        <text x="210" y="165" font-size="10" fill="#6b7280" font-family="monospace">GND</text>
        <rect x="68" y="107" width="34" height="18" rx="3" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
        <text x="85" y="119" font-size="8" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">Rb 10k</text>
        <text x="150" y="185" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'● TRANSISTOR ON — Lampu Nyala':'○ TRANSISTOR OFF — Lampu Mati'}</text>
      </svg>`;
    }
  },
  {
    id:'led-resistor',
    title:'LED + Resistor Pembatas Arus',
    desc:'Resistor seri wajib untuk melindungi LED dari arus berlebih.',
    toggles:[{id:'sw',label:'Nyalakan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      const ledC=on?'#4ade80':'#d1d5db';
      const ledG=on?'drop-shadow(0 0 8px #4ade80)':'none';
      return `<svg viewBox="0 0 320 140" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <rect x="18" y="45" width="16" height="50" rx="3" fill="#f3f4f6" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="20" y1="50" x2="32" y2="50" stroke="#374151" stroke-width="2.5"/>
        <line x1="23" y1="58" x2="29" y2="58" stroke="#374151" stroke-width="1.5"/>
        <line x1="20" y1="66" x2="32" y2="66" stroke="#374151" stroke-width="2.5"/>
        <text x="26" y="108" font-size="8" fill="#6b7280" text-anchor="middle" font-family="monospace">5V</text>
        <line x1="34" y1="52" x2="34" y2="35" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="34" y1="35" x2="260" y2="35" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <rect x="80" y="25" width="60" height="20" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="110" y="39" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R  220Ω</text>
        <line x1="140" y1="35" x2="190" y2="35" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <polygon points="190,22 190,48 212,35" fill="${ledC}" stroke="#16a34a" stroke-width="2" style="filter:${ledG}"/>
        <line x1="212" y1="22" x2="212" y2="48" stroke="#16a34a" stroke-width="3"/>
        ${on?`<line x1="218" y1="25" x2="226" y2="18" stroke="#4ade80" stroke-width="1.5"/>
        <line x1="220" y1="32" x2="230" y2="28" stroke="#4ade80" stroke-width="1.5"/>
        <line x1="218" y1="44" x2="226" y2="50" stroke="#4ade80" stroke-width="1.5"/>`:''}
        <polyline points="212,35 260,35 260,95 34,95 34,92" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <text x="110" y="120" font-size="9" fill="${on?'#d97706':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Vr=3.3V':'—'}</text>
        <text x="200" y="65" font-size="9" fill="${on?'#16a34a':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Vf=1.7V':'—'}</text>
        <text x="160" y="120" font-size="10" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'I = 15mA ● LED MENYALA':'○ LED MATI'}</text>
      </svg>`;
    }
  },
  {
    id:'voltage-divider',
    title:'Pembagi Tegangan',
    desc:'Dua resistor seri membagi tegangan input. Vout = Vin × R2/(R1+R2).',
    toggles:[{id:'sw',label:'Hubungkan'}],
    render(states){
      const on=states.sw;
      const wc=on?'#22c55e':'#9ca3af';
      return `<svg viewBox="0 0 280 175" class="sk-diagram" xmlns="http://www.w3.org/2000/svg">
        <text x="14" y="45" font-size="10" fill="#ef4444" font-weight="700" font-family="monospace">Vin</text>
        <text x="14" y="56" font-size="9" fill="#ef4444" font-family="monospace">12V</text>
        <polyline points="40,48 40,30 140,30" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <rect x="123" y="30" width="34" height="50" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="140" y="60" font-size="10" font-weight="700" fill="#92400e" text-anchor="middle" font-family="monospace">R1</text>
        <text x="140" y="72" font-size="9" fill="#92400e" text-anchor="middle" font-family="monospace">10k</text>
        <line x1="140" y1="80" x2="140" y2="95" stroke="${wc}" stroke-width="3" ${on?'class="wire-flow"':''}/>
        <line x1="140" y1="95" x2="220" y2="95" stroke="${on?'#f59e0b':'#9ca3af'}" stroke-width="2.5" ${on?'class="wire-flow"':''}/>
        <circle cx="220" cy="95" r="5" fill="${on?'#f59e0b':'#9ca3af'}"/>
        <text x="230" y="92" font-size="9" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">Vout</text>
        <text x="230" y="104" font-size="10" font-weight="700" fill="${on?'#f59e0b':'#9ca3af'}" font-family="monospace">${on?'4V':'—'}</text>
        <rect x="123" y="95" width="34" height="50" rx="4" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="140" y="124" font-size="10" font-weight="700" fill="#5b21b6" text-anchor="middle" font-family="monospace">R2</text>
        <text x="140" y="136" font-size="9" fill="#5b21b6" text-anchor="middle" font-family="monospace">5k</text>
        <polyline points="140,145 140,155 40,155 40,48" stroke="${wc}" stroke-width="3" fill="none" ${on?'class="wire-flow"':''}/>
        <line x1="125" y1="155" x2="155" y2="155" stroke="#6b7280" stroke-width="2"/>
        <line x1="130" y1="160" x2="150" y2="160" stroke="#6b7280" stroke-width="1.5"/>
        <line x1="134" y1="165" x2="146" y2="165" stroke="#6b7280" stroke-width="1"/>
        <text x="14" y="158" font-size="10" fill="#6b7280" font-family="monospace">GND</text>
        <text x="140" y="175" font-size="9" fill="${on?'#22c55e':'#9ca3af'}" text-anchor="middle" font-family="monospace">${on?'Vout=Vin×R2/(R1+R2)':'Hubungkan untuk lihat tegangan'}</text>
      </svg>`;
    }
  },
];

let skemaStates = {};
let swA = 0, swB = 0;

const ElektroSimulator = {
  init() {
    this.initSkema();
    this.updateLogic();
  },

  initSkema() {
    const list = document.getElementById('skema-list');
    if (!list) return;
    list.innerHTML = SKEMA.map(sk => {
      skemaStates[sk.id] = {};
      sk.toggles.forEach(t => { skemaStates[sk.id][t.id] = false; });

      const togglesHtml = sk.toggles.map(t => `
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
          <span class="sk-toggle-lbl">${t.label}</span>
          <label class="sk-toggle">
            <input type="checkbox" onchange="ElektroSimulator.toggleSkema('${sk.id}','${t.id}',this.checked)">
            <span class="sk-slider"></span>
          </label>
        </div>`).join('');

      return `
        <div class="sk-card">
          <div class="sk-title">${sk.title}</div>
          <div class="sk-desc">${sk.desc}</div>
          <div id="svg-${sk.id}">${sk.render(skemaStates[sk.id])}</div>
          <div class="sk-info">
            <div class="sk-status">
              <span class="sk-status-dot" id="dot-${sk.id}"></span>
              <span class="sk-status-txt" id="stxt-${sk.id}">OFF / Terbuka</span>
            </div>
            <div class="sk-toggle-wrap">${togglesHtml}</div>
          </div>
        </div>`;
    }).join('');
  },

  toggleSkema(skId, tId, val) {
    skemaStates[skId][tId] = val;
    const sk = SKEMA.find(s => s.id === skId);
    if (sk) {
      const svgEl = document.getElementById(`svg-${skId}`);
      if (svgEl) svgEl.innerHTML = sk.render(skemaStates[skId]);
      const anyOn = Object.values(skemaStates[skId]).some(v=>v);
      const dot = document.getElementById(`dot-${skId}`);
      const txt = document.getElementById(`stxt-${skId}`);
      if (dot) dot.className = 'sk-status-dot' + (anyOn?' on':'');
      if (txt) {
        txt.textContent = anyOn ? 'ON / Aktif' : 'OFF / Terbuka';
        txt.style.color = anyOn ? 'var(--green)' : '';
      }
    }
  },

  toggleSwitch(id) {
    if(id === 'A') { 
      swA = swA ? 0 : 1; 
      document.getElementById('swA')?.classList.toggle('on'); 
    }
    if(id === 'B') { 
      swB = swB ? 0 : 1; 
      document.getElementById('swB')?.classList.toggle('on'); 
    }
    this.updateLogic();
  },

  updateLogic() {
    const gateEl = document.getElementById('gateSelect');
    if (!gateEl) return;
    const gate = gateEl.value;
    let out = 0;

    switch(gate) {
      case 'AND':  out = (swA && swB) ? 1 : 0; break;
      case 'OR':   out = (swA || swB) ? 1 : 0; break;
      case 'NOT':  out = (!swA) ? 1 : 0; break;
      case 'NAND': out = !(swA && swB) ? 1 : 0; break;
      case 'NOR':  out = !(swA || swB) ? 1 : 0; break;
      case 'XOR':  out = (swA !== swB) ? 1 : 0; break;
      case 'XNOR': out = (swA === swB) ? 1 : 0; break;
    }

    const led = document.getElementById('ledOut');
    const ledVal = document.getElementById('ledVal');
    if(led) {
      if(out) led.classList.add('on');
      else led.classList.remove('on');
    }
    if(ledVal) ledVal.innerText = out ? '1' : '0';
    
    this.renderTruthTable(gate, out);
  },

  renderTruthTable(gate, out) {
    const tbody = document.getElementById('tt-body');
    const thead = document.getElementById('tt-head');
    if (!tbody || !thead) return;
    
    if(gate === 'NOT') {
      thead.innerHTML = `<tr><th>A</th><th>Output (Y)</th></tr>`;
      tbody.innerHTML = `
        <tr class="tt-row ${swA===0?'active':''}"><td>0</td><td>1</td></tr>
        <tr class="tt-row ${swA===1?'active':''}"><td>1</td><td>0</td></tr>
      `;
      const rowB = document.getElementById('row-swB');
      if (rowB) rowB.style.display='none';
    } else {
      const rowB = document.getElementById('row-swB');
      if (rowB) rowB.style.display='flex';
      thead.innerHTML = `<tr><th>A</th><th>B</th><th>Output (Y)</th></tr>`;
      const tt = {
        'AND':  [0,0,0,1],
        'OR':   [0,1,1,1],
        'NAND': [1,1,1,0],
        'NOR':  [1,0,0,0],
        'XOR':  [0,1,1,0],
        'XNOR': [1,0,0,1]
      };
      const r = tt[gate];
      const currIdx = (swA<<1) | swB;
      tbody.innerHTML = `
        <tr class="tt-row ${currIdx===0?'active':''}"><td>0</td><td>0</td><td>${r[0]}</td></tr>
        <tr class="tt-row ${currIdx===1?'active':''}"><td>0</td><td>1</td><td>${r[1]}</td></tr>
        <tr class="tt-row ${currIdx===2?'active':''}"><td>1</td><td>0</td><td>${r[2]}</td></tr>
        <tr class="tt-row ${currIdx===3?'active':''}"><td>1</td><td>1</td><td>${r[3]}</td></tr>
      `;
    }
  }
};

window.ElektroSimulator = ElektroSimulator;
