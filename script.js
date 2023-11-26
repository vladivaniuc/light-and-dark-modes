const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const toggleSwitch = document.querySelector('input[type="checkbox');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(mode) {
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

function toggleDarkLightMode(theme) {
    nav.style.backgroundColor= (theme==DARK_THEME) ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor= (theme==DARK_THEME)? 'rgb(255 255 255 /50%)' :'rgb(0 0 0 / 50%)'; 
    toggleIcon.children[0].textContent = (theme==DARK_THEME)? 'Dark Mode':'Light Mode';
    (theme==DARK_THEME) ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon'): toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    (theme=DARK_THEME) ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

function switchTheme(event) {
    const theme = event.target.checked? DARK_THEME : LIGHT_THEME;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleDarkLightMode(theme);
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = currentTheme===DARK_THEME;
    toggleDarkLightMode(currentTheme);
}; 