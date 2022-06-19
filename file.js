const burger = document.querySelector('.burger');
const menuMob = document.querySelector('.menuMob');
const close =document.querySelector('.close');

burger.addEventListener('click', function(){
	menuMob.style.display = 'block';
	burger.style.display = 'none';
})
close.addEventListener('click', function(){
	menuMob.style.display = 'none';
	burger.style.display = 'block';
})