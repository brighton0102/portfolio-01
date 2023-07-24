const burger = document.querySelector('.burger');
const desktopNav = document.querySelector('.desktop-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  desktopNav.classList.toggle('active');
});

document.querySelectorAll('.nav-items').forEach((n) => n
  .addEventListener('click', () => {
    burger.classList.remove('active');
    desktopNav.classList.remove('active');
  }));