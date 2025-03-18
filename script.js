const socket = io();

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");

function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
        socket.emit("chat message", message);
        messageInput.value = "";
    }
}

socket.on("chat message", (msg) => {
    const messageElement = document.createElement("p");
    messageElement.textContent = msg;
    chatBox.appendChild(messageElement);
});
