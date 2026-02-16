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
// Gestion de la modale "Mon Entreprise"
const modal = document.getElementById("modal-artemys");
const btnEntreprise = document.getElementById("btn-entreprise");
const spanClose = document.querySelector(".close-btn");

if (btnEntreprise && modal && spanClose) {
    // Ouvrir la modale au clic sur le bouton
    btnEntreprise.addEventListener('click', () => {
        modal.style.display = "block";
    });

    // Fermer la modale au clic sur la croix (X)
    spanClose.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Fermer la modale si l'utilisateur clique en dehors de la boîte
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}
