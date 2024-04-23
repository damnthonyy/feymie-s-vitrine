// Écouteur d'événements pour tous les éléments <a>
document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Vérifiez si le lien est censé être suivi
        if (link.getAttribute('href').startsWith('#') || link.getAttribute('href') === '') {
            event.preventDefault();
            // Votre code ici pour gérer les actions après le clic
        }
    });
});
