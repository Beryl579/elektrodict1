/**
 * ElektroBot Standalone Chat Logic
 * Integrates Branding Logic & Pro Features
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
let chatHistoryState = JSON.parse(localStorage.getItem('main_chatbot_history')) || [];

// --- Custom Marked Renderer for Code Blocks ---
if (typeof marked !== 'undefined') {
    const renderer = new marked.Renderer();
    renderer.code = function(code, language) {
        if (typeof code !== 'string') code = String(code);
        const id = 'code-' + Math.random().toString(36).substr(2, 9);
        return `
            <div class="code-block-wrapper">
                <div class="code-lang-tag">${language || 'code'}</div>
                <button class="copy-code-btn" onclick="copyCode(this)">Copy</button>
                <pre><code id="${id}">${code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
            </div>
        `;
    };
    marked.setOptions({ renderer: renderer });
}

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
        selectedFileBase64 = null;
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
    chatInput.style.height = 'auto';
    const currentBase64 = selectedFileBase64;
    const currentType = selectedFileType;
    const currentFileName = selectedFileName;
    clearImage();

    // Render & Save User Bubble
    renderBubble(userText, 'user', userImg, userFile);
    saveToHistory('user', userText, userImg, userFile);

    setLoading(true);

    try {
        const lowerText = userText.toLowerCase();
        const isBrandingQuery = BRANDING_KEYWORDS.some(kw => lowerText.includes(kw));

        if (isBrandingQuery && !currentBase64) {
            await new Promise(r => setTimeout(r, 600));
            renderBubble(BRANDING_RESPONSE, 'ai');
            saveToHistory('ai', BRANDING_RESPONSE);
        } else {
            let response;
            if (currentBase64) {
                response = await window.ElektroAPI.analyzeImage(currentBase64, currentType, userText || "Apa yang ada di gambar ini Sob?");
            } else {
                let fullPrompt = userText;
                if (currentFileName && !currentBase64) {
                    fullPrompt = `[Lampiran File: ${currentFileName}]\n\n${userText || "Saya menglampirkan file ini Sob, ada yang bisa dibantu?"}`;
                }

                // We pass the history for context if available
                const context = chatHistoryState.slice(-6).map(m => ({ role: m.role, content: m.content }));

                response = await window.ElektroAPI.chat([
                    ...context,
                    { role: 'user', content: fullPrompt }
                ], { model: selectedModel });
            }

            const aiMsg = response.choices?.[0]?.message?.content || 'Aduh Sob, sirkuit logika gue lagi overload nih! ⚡ Coba tanya lagi pake bahasa yang lebih teknis.';
            renderBubble(aiMsg, 'ai');
            saveToHistory('ai', aiMsg);
        }
    } catch (err) {
        console.error('Chat Error:', err);
        renderBubble('Waduh Sob, sirkuit logika gue lagi overload/short-circuit nih! ⚡ Coba tanya lagi pake bahasa yang lebih teknis atau cek koneksi lu dulu biar arusnya stabil.', 'ai');
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

/**
 * UI Rendering Helpers
 */
function renderBubble(content, role, imageSrc = null, fileName = null) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${role}`;
    
    if (imageSrc) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'user-msg-img';
        bubble.appendChild(img);
    }
    
    if (fileName && !imageSrc) {
        const fInfo = document.createElement('div');
        fInfo.className = 'chat-file-attachment';
        fInfo.innerHTML = `<span>📄</span> ${fileName}`;
        bubble.appendChild(fInfo);
    }

    const textContainer = document.createElement('div');
    textContainer.className = 'bubble-text-content';

    if (typeof marked !== 'undefined' && content) {
        textContainer.innerHTML = marked.parse(content);
    } else if (content) {
        textContainer.innerHTML = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    bubble.appendChild(textContainer);
    chatHistory.appendChild(bubble);

    setTimeout(() => {
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
    }, 150);
    
    scrollToBottom();
}

/**
 * History & Session Persistence
 */
function saveToHistory(role, content, image = null, file = null) {
    chatHistoryState.push({ role, content, image, file, timestamp: Date.now() });
    localStorage.setItem('main_chatbot_history', JSON.stringify(chatHistoryState));
}

function loadHistory() {
    if (chatHistoryState.length > 0) {
        chatHistory.innerHTML = '';
        chatHistoryState.forEach(m => {
            renderBubble(m.content, m.role, m.image, m.file);
        });
    }
}

function confirmClearHistory() {
    if (confirm("Hapus seluruh riwayat chat Sob? Tindakan ini gak bisa dibatalin.")) {
        chatHistoryState = [];
        localStorage.removeItem('main_chatbot_history');
        chatHistory.innerHTML = '<div class="chat-bubble chat-bubble-ai">Riwayat dihapus. Ada yang baru yang bisa saya bantu, Sob? ⚡</div>';
    }
}

/**
 * Pro Features: Copy & PDF
 */
function copyCode(btn) {
    const wrapper = btn.closest('.code-block-wrapper');
    const code = wrapper.querySelector('code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('copied');
        }, 2000);
    });
}

function exportToPDF() {
    const element = document.getElementById('chatHistory');
    const opt = {
        margin:       [15, 15],
        filename:     'ElektroBot_Chat_History.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#0f172a' },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    const header = document.createElement('div');
    header.style.color = '#4f9cf9';
    header.style.fontSize = '24px';
    header.style.fontWeight = 'bold';
    header.style.marginBottom = '20px';
    header.style.fontFamily = 'Outfit, sans-serif';
    header.innerText = 'ElektroBot AI - Chat Report';
    
    element.prepend(header);
    
    html2pdf().set(opt).from(element).save().then(() => {
        header.remove();
    });
}

// Initialize
loadHistory();
scrollToBottom();
chatInput.focus();

// --- Textarea Auto-Resize Logic ---
chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Handle Enter (Send) vs Shift+Enter (New Line)
chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});
