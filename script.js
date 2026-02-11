const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const form = document.getElementById("login-form");
const message = document.getElementById("message");

// Toggle Password Visibility
togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "🙈" : "👁️";
});

// Fake Login Validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const userPassword = password.value;

    if (username === "admin" && userPassword === "1234") {
        message.style.color = "#00ffae";
        message.textContent = "Login Successful ✅";
        
        setTimeout(() => {
            alert("Welcome to Dashboard 🎉");
        }, 800);
    } else {
        message.style.color = "#ff4b5c";
        message.textContent = "Invalid Username or Password ❌";
    }
});
