const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    let theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    if (theme === 'light') {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('theme', theme);
});