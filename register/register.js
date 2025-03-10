<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Login and Registration">
    <title>Login and Registration</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="auth-container">
        <h1>Login / Register</h1>
        <div id="register-form">
            <h2>Register</h2>
            <form id="register">
                <label for="register-username">Username:</label>
                <input type="text" id="register-username" required>
                <label for="register-password">Password:</label>
                <input type="password" id="register-password" required>
                <button type="submit">Register</button>
            </form>
        </div>

        <div id="login-form">
            <h2>Login</h2>
            <form id="login">
                <label for="login-username">Username:</label>
                <input type="text" id="login-username" required>
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
    
    <script src="auth.js"></script>
</body>
</html>
