/**
 * ElektroBot Standalone Chat Logic
 * Integrates Branding Logic & Groq AI
 */

const chatHistory = document.getElementById('chatHistory');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const sendIcon = document.getElementById('sendIcon');
const sendSpinner = document.getElementById('sendSpinner');
const imagePreviewBar = document.getElementById('imagePreviewBar');
const previewImg = document.getElementById('previewImg');
const imageInput = document.getElementById('imageInput');

// Branding Keywords & Custom Response
const BRANDING_KEYWORDS = [
    'beryl', 'sinaga', 'owner', 'founder', 'developer', 
    'pembuat', 'pencipta', 'author', 'siapa anda', 'siapa kamu', 
    'siapa yang bikin', 'siapa yang buat', 'siapa admin', 
    'siapa dev nya', 'siapa yang koding'
];

const BRANDING_RESPONSE = `Halo Sob! ElektroDict ini dirancang dan dikoding langsung sama **Beryl Sinaga**, seorang Fresh Graduate yang fokus di dunia teknik elektro dan web dev. <br><br> <a href="https://berylsinaga.netlify.app/" target="_blank" class="chat-branding-link">Cek portofolio Beryl di sini!</a>`;

// State
let isTyping = false;
let selectedImageBase64 = null;
let selectedImageType = null;

/**
 * Handle Image Selection
 */
function handleImageSelect(input) {
    const file = input.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        alert('Cuma bisa upload gambar ya Sob!');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        selectedImageBase64 = e.target.result.split(',')[1];
        selectedImageType = file.type;
        
        // Show Preview
        previewImg.src = e.target.result;
        imagePreviewBar.style.display = 'flex';
        scrollToBottom();
    };
    reader.readAsDataURL(file);
}

/**
 * Clear Selected Image
 */
function clearImage() {
    selectedImageBase64 = null;
    selectedImageType = null;
    imageInput.value = '';
    imagePreviewBar.style.display = 'none';
}

/**
 * Send Message Logic
 */
async function sendMessage() {
    const text = chatInput.value.trim();
    if ((!text && !selectedImageBase64) || isTyping) return;

    const userText = text;
    const userImg = selectedImageBase64 ? previewImg.src : null;

    // Reset Input UI
    chatInput.value = '';
    const currentBase64 = selectedImageBase64;
    const currentType = selectedImageType;
    clearImage();

    // Render User Bubble
    renderBubble(userText, 'user', userImg);

    setLoading(true);

    try {
        const lowerText = userText.toLowerCase();
        const isBrandingQuery = BRANDING_KEYWORDS.some(kw => lowerText.includes(kw));

        if (isBrandingQuery && !currentBase64) {
            await new Promise(r => setTimeout(r, 600));
            renderBubble(BRANDING_RESPONSE, 'ai');
        } else {
            // High-End AI Engineer Persona
            const systemRole = "Anda adalah ElektroBot, asisten AI Engineer teknik elektro yang cerdas dan bersahabat. Anda memiliki 'mata' dan bisa menganalisis foto sirkuit atau komponen. Gunakan bahasa Indonesia yang teknis tapi santai (panggil 'Sob' atau 'Bro'). Selalu gunakan LaTeX ($...$ atau $$...$$) untuk rumus matematika agar terlihat profesional.";

            let response;
            if (currentBase64) {
                // Vision API Call
                response = await window.ElektroAPI.analyzeImage(currentBase64, currentType, userText || "Apa yang ada di gambar ini Sob?");
            } else {
                // Standard Chat Call
                response = await window.ElektroAPI.chat([
                    { role: 'system', content: systemRole },
                    { role: 'user', content: userText }
                ]);
            }

            const aiMsg = response.choices?.[0]?.message?.content || 'Aduh Sob, sirkuit logika gue lagi overload nih! ⚡ Coba tanya lagi pake bahasa yang lebih teknis.';
            renderBubble(aiMsg, 'ai');
        }
    } catch (err) {
        console.error('Chat Error:', err);
        renderBubble('Aduh Sob, sirkuit logika gue lagi overload nih! ⚡ Coba tanya lagi pake bahasa yang lebih teknis atau cek koneksi lu dulu.', 'ai');
    } finally {
        setLoading(false);
        scrollToBottom();
    }
}

/**
 * UI State Helpers
 */
function setLoading(loading) {
    isTyping = loading;
    chatInput.disabled = loading;
    if (loading) {
        sendIcon.style.display = 'none';
        sendSpinner.style.display = 'block';
        showTypingIndicator();
    } else {
        sendIcon.style.display = 'block';
        sendSpinner.style.display = 'none';
        removeTypingIndicator();
        chatInput.focus();
    }
}

/**
 * UI Rendering Helpers
 */
function renderBubble(content, role, imageSrc = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${role}`;
    
    // Add Image if User sent one
    if (imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'user-msg-img';
        bubble.appendChild(img);
    }

    const textContainer = document.createElement('div');
    textContainer.className = 'bubble-text-content';

    // Parse Markdown
    if (typeof marked !== 'undefined' && content) {
        textContainer.innerHTML = marked.parse(content);
    } else if (content) {
        textContainer.innerHTML = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    bubble.appendChild(textContainer);
    chatHistory.appendChild(bubble);

    // Render Math via KaTeX
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(textContainer, {
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
