function validateForm(event) {
    event.preventDefault();

    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Email validation.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // If all validations pass, alert user.
    alert('Form submitted successfully!');
}

