const notifications = document.querySelector('.notifications-wrap');
const menu          = document.querySelector('.menu-wrap');
const menuIcon      = document.querySelector('.menu-icon');
const searchIcon    = document.querySelector('.search-icon');
const searchInput   = document.querySelector('.search-input');

menuIcon.addEventListener('click', () => {
  notifications.classList.toggle('active');
  menu.classList.toggle('active');
});

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
});
