// Fonction pour créer une publication (exemple)
function createPublication() {
    alert("Fonction de création d'une nouvelle publication.");
    // Ajouter la logique pour créer une nouvelle publication
}

// Fonction pour sélectionner une publication
function selectPublication(element) {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("publicationTitle").value = element.innerText;
    document.getElementById("publicationContent").value = "Contenu de " + element.innerText;
    // Ajouter la logique pour charger les détails de la publication sélectionnée
}

// Fonction pour enregistrer les modifications
function saveChanges() {
    alert("Modifications enregistrées pour la publication.");
    // Ajouter la logique pour enregistrer les modifications
}

// Fonction pour supprimer la publication sélectionnée
function deleteSelectedPublication() {
    alert("Publication supprimée.");
    // Ajouter la logique pour supprimer la publication
}