const btn = document.querySelector('.btn'); 
const box = document.querySelector('.box');

btn.addEventListener('click', function () {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = randomColor;
});