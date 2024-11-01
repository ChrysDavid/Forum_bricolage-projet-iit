document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.login-button');
    const loginContainer = document.querySelector('.login-container');
    const closeButtonLogin = document.querySelector('.login-button-close');
    const closeButtonRegister = document.querySelector('.register-button-close');
    const registerLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const registerZone = document.querySelector('.zone-register-info');
    const loginZone = document.querySelector('.zone-login-info');

    function toggleLoginContainer(show) {
        loginContainer.style.display = show ? 'flex' : 'none';
    }

    // Afficher le formulaire de connexion
    loginButton.addEventListener('click', function (event) {
        event.preventDefault();
        toggleLoginContainer(true);
        loginZone.style.display = 'block';
        registerZone.style.display = 'none';
    });

    // Fermer le formulaire
    [closeButtonLogin, closeButtonRegister].forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            toggleLoginContainer(false);
        });
    });

    // Afficher le formulaire d'inscription
    registerLink.addEventListener('click', function (event) {
        event.preventDefault();
        loginZone.style.display = 'none';
        registerZone.style.display = 'block';
    });

    // Retour au formulaire de connexion
    showLoginLink.addEventListener('click', function (event) {
        event.preventDefault();
        registerZone.style.display = 'none';
        loginZone.style.display = 'block';
    });

    function togglePasswordVisibility(passwordInput, eyeIcon) {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        eyeIcon.classList.toggle('fa-eye');
        eyeIcon.classList.toggle('fa-eye-slash');
    }

    // Password visibility toggle for login
    const passwordInputLogin = document.getElementById('password');
    const eyeIconLogin = document.getElementById('toggle-password-visibility-login');
    eyeIconLogin.addEventListener('click', () => togglePasswordVisibility(passwordInputLogin, eyeIconLogin));

    // Password visibility toggle for register
    const passwordInputRegister = document.getElementById('password-register');
    const eyeIconRegister = document.getElementById('toggle-password-visibility-register');
    eyeIconRegister.addEventListener('click', () => togglePasswordVisibility(passwordInputRegister, eyeIconRegister));
});