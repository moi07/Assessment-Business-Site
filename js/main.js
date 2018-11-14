let menu = document.querySelector('label.menu');
//menu.addEventListener('click', alert('what!'),false);
const copyYear = document.querySelector('.copyrightYear');
var today=new Date();
var y = today.getFullYear();
copyYear.textContent = y;
