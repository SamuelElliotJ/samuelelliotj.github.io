const navbar = document.querySelector('#mobile_menu')
const navbarmenu = document.querySelector('.navbar_menu')

navbar.addEventListener('click', function(){
    navbar.classList.toggle('is-active');
    navbarmenu.classList.toggle('active');
})