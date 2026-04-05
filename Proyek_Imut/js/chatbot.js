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
const fileInfo = document.getElementById('fileInfo');
const fileNameDisplay = document.getElementById('fileName');
const imageInput = document.getElementById('imageInput');
const modelSelector = document.getElementById('modelSelector');

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
let selectedFileBase64 = null;
let selectedFileType = null;
let selectedFileName = null;

/**
 * Handle File Selection (Images & Documents)
 */
function handleImageSelect(input) {
    const file = input.files[0];
    if (!file) return;

    selectedFileName = file.name;
    selectedFileType = file.type;

    const isImage = file.type.startsWith('image/');
    
    if (isImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedFileBase64 = e.target.result.split(',')[1];
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
            fileInfo.style.display = 'none';
            imagePreviewBar.style.display = 'flex';
            scrollToBottom();
        };
        reader.readAsDataURL(file);
    } else {
        // Document selection
        selectedFileBase64 = null; // Currently only images sent to Vision
        previewImg.style.display = 'none';
        fileNameDisplay.textContent = file.name;
        fileInfo.style.display = 'flex';
        imagePreviewBar.style.display = 'flex';
        scrollToBottom();
    }
}

/**
 * Clear Selected File
 */
function clearImage() {
    selectedFileBase64 = null;
    selectedFileType = null;
    selectedFileName = null;
    imageInput.value = '';
    imagePreviewBar.style.display = 'none';
}

/**
 * Send Message Logic
 */
async function sendMessage() {
    const text = chatInput.value.trim();
    if ((!text && !selectedFileBase64 && !selectedFileName) || isTyping) return;

    const userText = text;
    const userImg = selectedFileBase64 ? previewImg.src : null;
    const userFile = !selectedFileBase64 && selectedFileName ? selectedFileName : null;
    const selectedModel = modelSelector.value;

    // Reset Input UI
    chatInput.value = '';
    const currentBase64 = selectedFileBase64;
    const currentType = selectedFileType;
    const currentFileName = selectedFileName;
    clearImage();

    // Render User Bubble
    renderBubble(userText, 'user', userImg, userFile);

    setLoading(true);

    try {
        const lowerText = userText.toLowerCase();
        const isBrandingQuery = BRANDING_KEYWORDS.some(kw => lowerText.includes(kw));

        if (isBrandingQuery && !currentBase64) {
            await new Promise(r => setTimeout(r, 600));
            renderBubble(BRANDING_RESPONSE, 'ai');
        } else {
            // High-End AI Engineer Persona
            const systemRole = "Anda adalah ElektroBot, asisten AI Engineer teknik elektro yang cerdas dan bersahabat. Gunakan bahasa Indonesia yang teknis tapi santai (panggil 'Sob' atau 'Bro'). Selalu gunakan LaTeX ($...$ atau $$...$$) untuk rumus matematika agar terlihat profesional.";

            let response;
            if (currentBase64) {
                // Vision API Call (Always uses Vision model)
                response = await window.ElektroAPI.analyzeImage(currentBase64, currentType, userText || "Apa yang ada di gambar ini Sob?");
            } else {
                // Standard Chat Call (Uses selected model)
                let fullPrompt = userText;
                if (currentFileName && !currentBase64) {
                    fullPrompt = `[Lampiran File: ${currentFileName}]\n\n${userText || "Saya menglampirkan file ini Sob, ada yang bisa dibantu?"}`;
                }

                response = await window.ElektroAPI.chat([
                    { role: 'system', content: systemRole },
                    { role: 'user', content: fullPrompt }
                ], { model: selectedModel });
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
function renderBubble(content, role, imageSrc = null, fileName = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${role}`;
    
    // Add Image if User sent one
    if (imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'user-msg-img';
        bubble.appendChild(img);
    }
    
    // Add Filename if User sent a document
    if (fileName && !imageSrc) {
        const fInfo = document.createElement('div');
        fInfo.className = 'chat-file-attachment';
        fInfo.innerHTML = `<span>📄</span> ${fileName}`;
        bubble.appendChild(fInfo);
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
