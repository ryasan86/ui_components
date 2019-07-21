const notifications = document.querySelector('.notifications-wrap');
const menu          = document.querySelector('.menu-wrap');
const menuIcon      = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
  notifications.classList.toggle('active');
    menu.classList.toggle('active');
});
