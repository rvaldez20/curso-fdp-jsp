
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDescktopMenu)


function toggleDescktopMenu() {
  desktopMenu.classList.toggle('inactive');
}