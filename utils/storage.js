
window.addEventListener('DOMContentLoaded', () => {
    const formData = localStorage.getItem('formData');
    if (formData) {
      const { name, email, message } = JSON.parse(formData);
      document.getElementById('user').value = name || '';
      document.getElementById('email').value = email || '';
      document.getElementById('comment').value = message || '';
    }
  });
  
  // Save form data to local storage whenever the input fields change
  
  document.getElementById('contact-form').addEventListener('input', () => {
    const name = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('comment').value;
    const formData = { name, email, message };
    localStorage.setItem('formData', JSON.stringify(formData));
  });