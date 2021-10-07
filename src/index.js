import data from './menu.json'
import template from './menu.handlebars'
//console.log(template)
let menuCards = template(data);
const checkBoxs = document.getElementById('theme-switch-toggle');
const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', menuCards);

checkBoxs.addEventListener('change', (e)=>{
if(e.target.checked){
    document.querySelector('body').classList.add('dark-theme')
    localStorage.setItem('theme', 'dark-theme')
}
else{
    document.querySelector('body').classList.remove('dark-theme')
    localStorage.setItem('theme','')}
})
let theme = localStorage.getItem('theme')
if(theme === 'dark-theme'){
    document.querySelector('body').classList.add('dark-theme')
}else{document.querySelector('body').classList.remove('dark-theme')}