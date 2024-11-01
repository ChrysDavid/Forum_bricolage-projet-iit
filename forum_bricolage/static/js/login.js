document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button'); // Remplacez par votre vrai bouton
    const loginContainer = document.querySelector('.login-container');
    const closeButtonLogin = document.querySelector('.login-button-close');
    const closeButtonRegister = document.querySelector('.register-button-close');
    const registerLink = document.getElementById('show-register'); // Lien pour passer à l'inscription
    const showLoginLink = document.getElementById('show-login'); // Lien pour revenir à la connexion
    const registerZone = document.querySelector('.zone-register-info');
    const loginZone = document.querySelector('.zone-login-info');

    // Afficher le formulaire de connexion
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        loginContainer.style.display = 'flex'; // Affiche le formulaire
        loginZone.style.display = 'block'; // Affiche la zone de connexion
        registerZone.style.display = 'none'; // Cache la zone d'inscription
    });

    // Fermer le formulaire
    closeButtonLogin.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        loginContainer.style.display = 'none'; // Cache le formulaire
    });
     closeButtonRegister.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        loginContainer.style.display = 'none'; // Cache le formulaire
    });

    // Afficher le formulaire d'inscription
    registerLink.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        loginZone.style.display = 'none'; // Cache la zone de connexion
        registerZone.style.display = 'block'; // Affiche la zone d'inscription
    });

    // Afficher la zone de connexion lorsque l'on clique sur "Se connecter"
    showLoginLink.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        registerZone.style.display = 'none'; // Cache la zone d'inscription
        loginZone.style.display = 'block'; // Affiche la zone de connexion
    });
});
