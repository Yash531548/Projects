const showcase = document.querySelector('.showcase');
const Toggle = document.querySelector('.Toggle');
const menucontent = document.querySelector('.menu');

Toggle.addEventListener('click', function(){
    Toggle.classList.toggle('active');
    showcase.classList.toggle('active');
    menucontent.classList.toggle('active');
})