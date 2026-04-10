/**
 * ElektroDict UI Utilities
 * Fungsi bersama untuk me-render matematika (KaTeX) dan memproses teks AI.
 */

const ElektroUtils = {
  /**
   * Render KaTeX pada elemen tunggal
   */
  renderMath(el) {
    if (typeof katexLoaded !== 'undefined' && katexLoaded && typeof renderMathInElement === 'function') {
      this.doRenderMath(el);
    } else if (typeof pendingMathEls !== 'undefined') {
      pendingMathEls.push(el);
    }
  },

  /**
   * Fungsi internal untuk auto-render KaTeX
   */
  doRenderMath(el) {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(el, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    }

    // Juga render elemen yang sudah di-parse oleh parseAIText (menggunakan atribut data-latex)
    if (typeof katex !== 'undefined') {
      el.querySelectorAll('[data-latex]').forEach(span => {
        const latex = span.getAttribute('data-latex');
        const display = span.getAttribute('data-display') === 'true';
        try {
          // Render ke dalam span tersebut
          katex.render(latex, span, { 
            throwOnError: false, 
            displayMode: display,
            output: 'html'
          });
          // Hapus atribut agar tidak ter-render dua kali jika fungsi dipanggil lagi
          span.removeAttribute('data-latex');
        } catch (e) {
          console.error("KaTeX render error:", e);
          span.textContent = latex;
        }
      });
    }
  },

  /**
   * Render KaTeX khusus untuk fitur AI Vision (menggunakan data-latex)
   */
  renderAIVMath(el) {
    if (typeof katex === 'undefined') {
      setTimeout(() => this.renderAIVMath(el), 300);
      return;
    }
    el.querySelectorAll('[data-latex]').forEach(span => {
      const latex = span.getAttribute('data-latex');
      const display = span.getAttribute('data-display') === 'true';
      try {
        katex.render(latex, span, { throwOnError: false, displayMode: display, output: 'html' });
      } catch (e) {
        span.textContent = latex;
      }
    });
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  },

  /**
   * Parsing teks AI (Markdown + LaTeX) ke HTML
   */
  parseAIText(text) {
    const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    let result = text;
    const latexBlocks = [];

    // 1. Protect $$ display math
    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      const idx = latexBlocks.length;
      latexBlocks.push({ type: 'display', math: math.trim() });
      return `\x00LATEX${idx}\x00`;
    });
    // 2. Protect \[...\] display
    result = result.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
      const idx = latexBlocks.length;
      latexBlocks.push({ type: 'display', math: math.trim() });
      return `\x00LATEX${idx}\x00`;
    });
    // 3. Protect \(...\) inline
    result = result.replace(/\\\(([^)]*?)\\\)/g, (_, math) => {
      const idx = latexBlocks.length;
      latexBlocks.push({ type: 'inline', math: math.trim() });
      return `\x00LATEX${idx}\x00`;
    });
    // 4. Protect $...$ inline
    result = result.replace(/\$([^\$\n\r]{1,200}?)\$/g, (_, math) => {
      const m = math.trim();
      if (!m || !/[a-zA-Z\\^_{}\|=><]/.test(m)) return `$${math}$`;
      const idx = latexBlocks.length;
      latexBlocks.push({ type: 'inline', math: m });
      return `\x00LATEX${idx}\x00`;
    });

    result = esc(result);

    // Markdown simple
    result = result.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, '<em>$1</em>');
    result = result.replace(/`([^`]+)`/g, '<code style="background:var(--bg4);padding:1px 5px;border-radius:4px;font-family:var(--mono);font-size:.9em;color:var(--amber)">$1</code>');
    result = result.replace(/^###\s+(.+)$/gm, '<h4 style="font-size:14px;font-weight:700;color:var(--accent);margin:12px 0 4px">$1</h4>');
    result = result.replace(/^##\s+(.+)$/gm, '<h3 style="font-size:15px;font-weight:700;color:var(--accent);margin:14px 0 5px">$1</h3>');
    result = result.replace(/^#\s+(.+)$/gm, '<h2 style="font-size:16px;font-weight:700;color:var(--accent);margin:16px 0 6px">$1</h2>');
    result = result.replace(/^[\*\-]\s+(.+)$/gm, '<div style="display:flex;gap:8px;margin:4px 0"><span style="color:var(--accent);flex-shrink:0">▸</span><span>$1</span></div>');
    result = result.replace(/^(\d+)\.\s+(.+)$/gm, '<div style="display:flex;gap:8px;margin:4px 0"><span style="color:var(--accent);font-family:var(--mono);font-size:11px;flex-shrink:0;margin-top:2px">$1.</span><span>$2</span></div>');
    result = result.replace(/\n\n/g, '<br><br>');
    result = result.replace(/\n/g, '<br>');

    // Restore LaTeX as renderable spans
    result = result.replace(/\x00LATEX(\d+)\x00/g, (_, idx) => {
      const block = latexBlocks[parseInt(idx)];
      const latexEsc = block.math.replace(/"/g, '&quot;');
      if (block.type === 'display') {
        return `<span class="katex-display-wrap" data-latex="${latexEsc}" data-display="true" style="display:block;text-align:center;margin:12px 0;overflow-x:auto;padding:4px 0"></span>`;
      } else {
        return `<span class="katex-inline-wrap" data-latex="${latexEsc}" data-display="false"></span>`;
      }
    });

    return result;
  }
};

window.ElektroUtils = ElektroUtils;
