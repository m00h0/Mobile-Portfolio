/* eslint-disable linebreak-style */
const hamburgar = document.querySelector('.hamburgar');
const navmenu = document.querySelector('.nav-menu');
hamburgar.addEventListener('click', () => {
  hamburgar.classList.toggle('active');
  navmenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburgar.classList.remove('active');
  navmenu.classList.remove('active');
}));
