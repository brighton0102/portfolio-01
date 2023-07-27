const names = document.querySelector('#user');
const email = document.querySelector('#email');
const message = document.querySelector('#comment');

form.addEventListener('keyup', () => {
    const formData = {
      names: names.value,
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  });