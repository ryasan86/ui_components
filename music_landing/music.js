const navBar = document.querySelector('.nav-bar');
const albums = document.querySelectorAll('.album');

window.addEventListener('scroll', () => {
  window.scrollY > 0
    ? (navBar.style.background = 'rgba(0, 0, 0, 0.5)')
    : (navBar.style.background = 'transparent');
});

albums.forEach(album => {
  album.addEventListener('mouseenter', function() {
    const overlay = this.firstElementChild;
    overlay.style.display = 'block';
  });
  album.addEventListener('mouseleave', function() {
    const overlay = this.firstElementChild;
    overlay.style.display = 'none';
  });
});
