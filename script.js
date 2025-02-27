// Dark Mode Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    // Load saved preference
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }
});

// AI Assistant Chatbot
function askAI() {
    const input = document.getElementById("chatInput").value.toLowerCase();
    const response = document.getElementById("chatResponse");

    let replies = {
        "hello": "Hi there! How can I assist you today? 😊",
        "what is neuroxcel?": "NeuroXcel is an AI-powered suite designed to enhance learning and productivity.",
        "how can ai help me?": "AI can assist with automation, learning, writing, and optimizing your workflow.",
        "who created this?": "NeuroXcel AI Suite was developed to revolutionize AI assistance across multiple fields."
    };

    response.innerText = replies[input] || "I'm still learning! Ask me something else. 🤖";
}
