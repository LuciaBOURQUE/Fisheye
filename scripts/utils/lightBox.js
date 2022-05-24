// GERER LA DYNAMIQUE DE LA LIGHTBOX
const main = document.getElementById("main");
const lightbox = document.getElementById("modal-lightbox");
const body = document.getElementById("body");

// Ouverture de la lightbox (à partir de l'image)
function openLightbox () {
    main.setAttribute('aria-hidden', 'true');
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.style.display = "block";
}

// Fermeture de la lightbox
function closeLightbox () {
    main.setAttribute('aria-hidden', 'false');
    lightbox.setAttribute('aria-hidden', 'true');
    const boxContainer = document.querySelector(".lightbox-container");
    lightbox.style.display = "none";

    lightbox.removeChild(boxContainer);
}

/*
// Bouton du type flèche "Précédent"
// Je veux afficher l'image précédent celle ou je suis
let btnPrevious = document.querySelector('.arrow-left');
console.log(btnPrevious);
function prevMedia () {
    // Enlever ici le eventListener DOM x
    // Faire un listener et passer en paramètre de displayLightBox (tableau de querySelector avec indexOf -1)
    // Si inférieur à 0 doit repasser à 0 par le lenght
    let img = document.querySelector('.media');
}
*/