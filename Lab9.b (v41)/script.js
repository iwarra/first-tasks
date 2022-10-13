let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burger.addEventListener('click', e => {
  menu.classList.toggle("hidden-on-mobile")
})