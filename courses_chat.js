document.addEventListener('DOMContentLoaded', () => {
    // Lấy các đối tượng từ DOM
    const chatBtn = document.getElementById('aiChatbotButton');
    const chatbotWindow = document.getElementById('aiChatbotWindow');
    const closeChatbotBtn = document.getElementById('closeChatbotBtn');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('sendChatbotMessageBtn');

    // Mở/đóng cửa sổ chat
    chatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        chatbotWindow.classList.toggle('hidden');
        if (!chatbotWindow.classList.contains('hidden')) {
            chatbotInput.focus();
        }
    });

    closeChatbotBtn.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
    });

    // Hàm gửi tin nhắn khi nhấn nút hoặc Enter
    const sendMessage = () => {
        const messageText = chatbotInput.value.trim();
        if (messageText === '') return;

        // Hiển thị tin nhắn của người dùng
        appendMessage(messageText, 'user');
        chatbotInput.value = '';

        // Hiển thị chỉ báo "đang gõ..."
        showTypingIndicator();

        // Gọi hàm để lấy phản hồi từ AI
        getChatGPTResponse(messageText);
    };

    sendBtn.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Hàm thêm tin nhắn vào giao diện
    function appendMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', type);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        // Tự động cuộn xuống tin nhắn mới nhất
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Hàm hiển thị chỉ báo "đang gõ..."
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'typing-indicator');
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Hàm ẩn chỉ báo "đang gõ..."
    function hideTypingIndicator() {
        const indicator = chatbotMessages.querySelector('.typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    // --- PHẦN QUAN TRỌNG: GỌI API ---
    async function getChatGPTResponse(userMessage) {
        // !!! THAY THẾ ĐƯỜNG DẪN NÀY bằng đường dẫn đến backend của BẠN
        const API_ENDPOINT = '/api/chatgpt'; 

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();
            const aiResponse = data.reply; // Giả sử backend trả về JSON có key là 'reply'

            // Ẩn chỉ báo "đang gõ..." và hiển thị phản hồi của AI
            hideTypingIndicator();
            appendMessage(aiResponse, 'bot');

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            // Ẩn chỉ báo và hiển thị thông báo lỗi
            hideTypingIndicator();
            appendMessage('Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.', 'bot');
        }
    }
});