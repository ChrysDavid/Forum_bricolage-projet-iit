// Sélectionne les éléments
const loginButton = document.querySelector('.login-button');
const loginContainer = document.querySelector('.login-container');
const closeButton = document.querySelector('.login-button-close a');

// Cache le conteneur de connexion lorsque le bouton de fermeture est cliqué
closeButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de rediriger
    loginContainer.style.display = 'none'; // Cache le conteneur
});

// Affiche le conteneur de connexion lorsque le bouton de connexion est cliqué
loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de rediriger
    loginContainer.style.display = 'flex'; // Affiche le conteneur
});