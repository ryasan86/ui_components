const menu = document.querySelector('.menu');
const stripe = document.querySelector('.stripe');


menu.addEventListener('click', () => {
    stripe.classList.toggle('active');
})