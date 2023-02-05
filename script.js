const nav=document.querySelector('nav');
const hamburgerMenu=document.querySelector('.hamburger-menu');
const arrowDowm=document.querySelector('.arrow-down');

hamburgerMenu.addEventListener('click',()=>{
    nav.classList.toggle('open');


})