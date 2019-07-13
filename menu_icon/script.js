const menu = document.querySelector('.menu');
const stripes = document.querySelectorAll('.stripe');

menu.addEventListener('click', () => {
  stripes.forEach(stripe => stripe.classList.toggle('active'));
});
