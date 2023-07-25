const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailInput.value === emailInput.value.toLowerCase()) {
    form.submit();
  } else {
    errorMsg.classList.remove('hidden');
  }
});