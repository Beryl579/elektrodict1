/**
 * ElektroDict Utility Module
 * Shared helpers for Markdown parsing, KaTeX rendering, and PDF exports.
 */

const ElektroUtils = {
  // 1. Parsing & Rendering
  parseAIText(text) {
    const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    let result = text;
    const latexBlocks = [];

    // Protect LaTeX blocks
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      const idx = latexBlocks.length;
      latexBlocks.push({type:'display', math: math.trim()});
      return `@@LATEX_BLOCK_${idx}@@`;
    });
    result = result.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
      const idx = latexBlocks.length;
      latexBlocks.push({type:'display', math: math.trim()});
      return `@@LATEX_BLOCK_${idx}@@`;
    });
    result = result.replace(/\\\(([^)]*?)\\\)/g, (_, math) => {
      const idx = latexBlocks.length;
      latexBlocks.push({type:'inline', math: math.trim()});
      return `@@LATEX_BLOCK_${idx}@@`;
    });
    result = result.replace(/\$([^\$\n\r]{1,200}?)\$/g, (_, math) => {
      const m = math.trim();
      if(!m || !/[a-zA-Z\\^_{}\|=><]/.test(m)) return `$${math}$`;
      const idx = latexBlocks.length;
      latexBlocks.push({type:'inline', math: m});
      return `@@LATEX_BLOCK_${idx}@@`;
    });

    if (typeof marked !== 'undefined') {
      result = marked.parse(result, { breaks: true, gfm: true });
    } else {
      result = esc(result);
      result = result.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
      result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      result = result.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em>$1</em>');
      result = result.replace(/`([^`]+)`/g, '<code class="code-inline">$1</code>');
      result = result.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    }

    // Restore LaTeX
    result = result.replace(/@@LATEX_BLOCK_(\d+)@@/g, (_, idx) => {
      const block = latexBlocks[parseInt(idx)];
      const latexEsc = block.math.replace(/"/g,'&quot;');
      return `<span class="katex-${block.type}-wrap" data-latex="${latexEsc}" data-display="${block.type==='display'}"></span>`;
    });

    return result;
  },

  renderMath(el) {
    if (typeof katex === 'undefined') return;
    el.querySelectorAll('[data-latex]').forEach(span => {
      const latex = span.getAttribute('data-latex');
      const display = span.getAttribute('data-display') === 'true';
      try {
        katex.render(latex, span, {throwOnError:false, displayMode:display, output:'html'});
      } catch(e){ span.textContent = latex; }
    });
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(el, {
        delimiters:[
          {left:'$$', right:'$$', display:true},
          {left:'\\(', right:'\\)', display:false},
          {left:'\\[', right:'\\]', display:true},
          {left:'$', right:'$', display:false}
        ],
        throwOnError:false
      });
    }
  },

  // 2. String Helpers
  escapeHTML(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },

  cleanTextForSpeech(text) {
    if (!text) return '';
    let clean = String(text).replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');
    clean = clean.replace(/[*#_`~|]/g, ' ').replace(/(?:^|\n)\s*-\s+/g, ' ');
    clean = clean.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, ' $1 per $2 ').replace(/\\cdot|\\times/g, ' dikali ');
    clean = clean.replace(/\+/g, ' ditambah ').replace(/-/g, ' dikurangi ').replace(/=/g, ' sama dengan ');
    clean = clean.replace(/\^2/g, ' kuadrat ').replace(/[{}]/g, ' ').replace(/\\[a-zA-Z]+/g, ' ');
    return clean.replace(/\s+/g, ' ').trim();
  },

  // 3. Export
  exportKamusPDF() {
    if (typeof window.jspdf === 'undefined' || !window.KAMUS) {
      alert("PDF library or data not loaded.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    doc.setFontSize(22); doc.setTextColor(79, 156, 249);
    doc.text("ELEKTRODICT", (pageWidth / 2), 20, { align: "center" });
    doc.setFontSize(10); doc.setTextColor(100);
    doc.text("Kamus Istilah Teknik Elektro — Database Lengkap", (pageWidth / 2), 28, { align: "center" });

    const rows = window.KAMUS.sort((a,b) => a.en.localeCompare(b.en)).map(item => [
      item.en, item.id, item.kat.toUpperCase(), item.desc
    ]);

    doc.autoTable({
      startY: 35,
      head: [['Term (EN)', 'Istilah (ID)', 'Kategori', 'Deskripsi Singkat']],
      body: rows,
      theme: 'grid',
      headStyles: { fillColor: [79, 156, 249], textColor: [255, 255, 255] },
      styles: { fontSize: 8, cellPadding: 3 }
    });

    doc.save(`ElektroDict_Kamus_${new Date().toLocaleDateString()}.pdf`);
  },

  CHAT_SYS_PROMPT: `ROLE: 
You are ElektroBot Mini, a friendly and helpful guide for the ElektroDict application. Your purpose is to provide quick help, welcome new users, and help them navigate features like the Dictionary, Quiz, AI Vision, and Calculators.

PERSONALITY & TONE:
- Tone: Extremely friendly, casual, and encouraging (use 'Sob', 'Bro', 'Suhu').
- Style: Rapid, brief, and helpful. Keep responses concise.

KNOWLEDGE BASE:
- Features: Dictionary, AI Quiz, AI Vision, Resistance Color Code, Unit Conversion, and Circuits.
- Navigation: Guide users to tabs like 📖 Kamus, 🧠 Latihan, 🔬 AI Vision, 🔢 Kalkulator.`
};

window.ElektroUtils = ElektroUtils;
window.parseAIText = ElektroUtils.parseAIText;
window.renderAIVMath = ElektroUtils.renderMath;
window.escapeHTML = ElektroUtils.escapeHTML;
window.cleanTextForSpeech = ElektroUtils.cleanTextForSpeech;
window.exportKamusPDF = ElektroUtils.exportKamusPDF;
