const users = [
    { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Michael Lee', image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Alice Brown', image: 'https://via.placeholder.com/50' }
];

const userList = document.getElementById('user-list');
const chatHeader = document.getElementById('chat-header');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Load user profiles
users.forEach(user => {
    const userItem = document.createElement('li');
    userItem.classList.add('user-item');
    userItem.innerHTML = `
        <img src="${user.image}" alt="${user.name}" class="user-img">
        <span>${user.name}</span>
    `;
    userItem.addEventListener('click', () => loadChat(user));
    userList.appendChild(userItem);
});

// Load conversation for a specific user
function loadChat(user) {
    // Update header with selected user's name
    chatHeader.innerHTML = `<h3>Chatting with ${user.name}</h3>`;
    
    // Simulate a conversation (In real life, this would be dynamic)
    chatBox.innerHTML = `
        <p><strong>${user.name}:</strong> Hi! How are you?</p>
        <p><strong>You:</strong> I'm doing great! How about you?</p>
    `;

    // Enable message input and send button
    messageInput.disabled = false;
    sendBtn.disabled = false;

    // Handle sending a new message
    sendBtn.onclick = () => {
        const message = messageInput.value.trim();
        if (message) {
            const userMessage = `<p><strong>You:</strong> ${message}</p>`;
            chatBox.innerHTML += userMessage;
            messageInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to bottom
        }
    };
}
