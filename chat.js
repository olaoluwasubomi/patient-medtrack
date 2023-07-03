// Get necessary elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Event listener for sending a message
sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const messageText = messageInput.value;

  if (messageText.trim() !== '') {
    // Create a new chat message element
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.textContent = messageText;

    // Append the new message element to the chat messages container
    chatMessages.appendChild(messageElement);

    // Clear the input field
    messageInput.value = '';

    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
 