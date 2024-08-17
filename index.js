document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
 
 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
 
 
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validPassword = /^(?=.*\d).{8,}$/;
    errorMessage.textContent = '';
 
 
    if (!validEmail.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }
 
 
    if (!validPassword.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long and include at least one number.';
        return;
    }
 
 
    alert('Login successful!');
    window.location.href = 'main.html';
 });
 
 
 
 
 
 
 