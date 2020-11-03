let headerBurger = document.querySelector('.header__burger');
let topLine = document.querySelector('.top-line');
let secondLine = document.querySelector('.second-line');
let thirdLine = document.querySelector('.third-line');
let mobileMenu = document.querySelector('.mobile-menu')
headerBurger.addEventListener('click', clickFunction);
function clickFunction() {
    topLine.classList.toggle('top-line_active');
    secondLine.classList.toggle('second-line_active');
    thirdLine.classList.toggle('third-line_active')
    mobileMenu.classList.toggle('mobile-menu_active')
}
