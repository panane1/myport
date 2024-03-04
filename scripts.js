function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return false;
  }

  // Additional validation logic can be added here

  // If all validation passes, show success message
  showSuccessMessage();
  return true;
}

function showSuccessMessage() {
  var form = document.getElementById('contactForm');
  var successMessage = document.getElementById('successMessage');

  // Hide the form
  form.style.display = 'none';

  // Show the success message
  successMessage.classList.remove('hidden');
}

