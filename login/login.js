// Get elements for the forms
const registerForm = document.getElementById('register');
const loginForm = document.getElementById('login');
const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

// Handle Registration
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = registerUsername.value;
    const password = registerPassword.value;

    if (!username || !password) {
        alert("Username and Password are required!");
        return;
    }

    // Store username and password in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful!');
    registerUsername.value = '';
    registerPassword.value = '';
});

// Handle Login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = loginUsername.value;
    const password = loginPassword.value;

    // Retrieve stored username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered details match the stored ones
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password!');
    }

    loginUsername.value = '';
    loginPassword.value = '';
});
