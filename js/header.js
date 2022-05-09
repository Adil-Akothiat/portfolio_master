const navBarMenu = document.querySelector('.nav_bar_menu');
const menuList = document.querySelector('.drop');
navBarMenu.addEventListener('click', open);

function open() {
    this.classList.toggle('open');
    menuList.classList.toggle('down');
}