/**
 * ElektroBot Standalone Chat Logic
 * Integrates Branding Logic & Groq AI
 */

const chatHistory = document.getElementById('chatHistory');
const chatInput = document.getElementById('chatInput');

// Branding Keywords & Custom Response
const BRANDING_KEYWORDS = [
    'beryl', 'sinaga', 'owner', 'founder', 'developer', 
    'pembuat', 'pencipta', 'author', 'siapa anda', 'siapa kamu', 
    'siapa yang bikin', 'siapa yang buat', 'siapa admin', 
    'siapa dev nya', 'siapa yang koding'
];

const BRANDING_RESPONSE = `Halo! ElektroDict dirancang dan dikembangkan oleh **Beryl Sinaga**, seorang Fresh Graduate yang fokus pada pengembangan aplikasi web edukasi teknik elektro. <br><br> <a href="https://berylsinaga.netlify.app/" target="_blank" class="chat-branding-link">Klik Disini untuk mengetahui siapa Beryl</a>`;

let isTyping = false;

/**
 * Send Message Logic
 */
async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text || isTyping) return;

    chatInput.value = '';
    renderBubble(text, 'user');

    isTyping = true;
    showTypingIndicator();

    try {
        const lowerText = text.toLowerCase();
        const isBrandingQuery = BRANDING_KEYWORDS.some(kw => lowerText.includes(kw));

        if (isBrandingQuery) {
            // Bypass AI for branding
            await new Promise(r => setTimeout(r, 800)); // Simulasikan berpikir
            removeTypingIndicator();
            renderBubble(BRANDING_RESPONSE, 'ai');
        } else {
            // General technical query -> Groq API
            const response = await window.ElektroAPI.chat([
                { role: 'system', content: 'Kamu adalah ElektroBot, asisten ahli teknik elektro. Jawab dengan gaya SaaS premium, teknis tapi mudah dimengerti.' },
                { role: 'user', content: text }
            ]);

            removeTypingIndicator();
            const aiMsg = response.choices?.[0]?.message?.content || 'Maaf, saya sedang mengalami gangguan sinyal. Coba lagi nanti.';
            renderBubble(aiMsg, 'ai');
        }
    } catch (err) {
        removeTypingIndicator();
        renderBubble(`⚠️ Error: ${err.message}`, 'ai');
    } finally {
        isTyping = false;
        scrollToBottom();
    }
}

/**
 * UI Rendering Helpers
 */
function renderBubble(content, role) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${role}`;
    
    // Parse Markdown if marked.js is available
    if (typeof marked !== 'undefined') {
        bubble.innerHTML = marked.parse(content);
    } else {
        // Fallback simple bolding
        bubble.innerHTML = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    chatHistory.appendChild(bubble);

    // Render Math if KaTeX auto-render is available
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(bubble, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\(", right: "\\)", display: false},
                {left: "\\[", right: "\\]", display: true}
            ],
            throwOnError: false
        });
    }
    
    scrollToBottom();
}

function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'chat-bubble chat-bubble-ai typing-indicator';
    indicator.id = 'typing-indicator';
    indicator.innerHTML = '<span>.</span><span>.</span><span>.</span>';
    chatHistory.appendChild(indicator);
    scrollToBottom();
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

function scrollToBottom() {
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Initial entry focus
chatInput.focus();
