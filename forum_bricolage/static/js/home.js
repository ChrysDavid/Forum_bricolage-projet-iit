// Sélection des éléments
const testimonialItems = document.querySelectorAll('.testimonial-item');
const carousel = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Fonction pour mettre à jour les témoignages
function updateTestimonials() {
    testimonialItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

// Fonction pour afficher le slide
function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Fonction pour changer les éléments
function changeElements() {
    currentIndex = (currentIndex + 1) % (slides.length + testimonialItems.length);
    
    if (currentIndex < slides.length) {
        showSlide(currentIndex);
    } else {
        currentIndex -= slides.length; // Passer à l'index des témoignages
        updateTestimonials();
    }
}

// Gestion des événements pour les boutons
nextBtn.addEventListener('click', changeElements);
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + (slides.length + testimonialItems.length)) % (slides.length + testimonialItems.length);
    if (currentIndex < slides.length) {
        showSlide(currentIndex);
    } else {
        currentIndex -= slides.length; // Passer à l'index des témoignages
        updateTestimonials();
    }
});

// Changement automatique toutes les 5 secondes
setInterval(changeElements, 5000);

// Initialisation lors du chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    updateTestimonials();
    showSlide(currentIndex); // Affiche le premier slide au chargement
});
