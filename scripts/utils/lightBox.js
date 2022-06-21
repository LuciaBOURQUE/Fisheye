// GERER LA DYNAMIQUE DE LA LIGHTBOX

const main = document.getElementById("main");
const lightbox = document.getElementById("modal-lightbox");
const body = document.getElementById("body");

// Ouverture de la lightbox (à partir de l'image)
function openLightbox () {
    main.setAttribute('aria-hidden', 'true');
    lightbox.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
    lightbox.style.display = "block";
}

// Fermeture de la lightbox
function closeLightbox () {
    main.setAttribute('aria-hidden', 'false');
    lightbox.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');

    const boxContainer = document.querySelector(".lightbox-container");
    lightbox.style.display = "none";
    lightbox.removeChild(boxContainer);
}

// Changement d'image/video et de texte au niveau de la lightbox
function changeMediaOnLightbox(arr, index) {
    const slideIndex = arr[index] // Aperçu de l'image précédente ou suivante
    console.log(arr);
    const titleImageLightbox = document.querySelector('.lightbox-title');

    const srcImageLightbox = slideIndex.firstElementChild.getAttribute("src");
    const altTitleLightbox = slideIndex.firstElementChild.getAttribute("alt");
    const hereMedia = document.querySelector('.media');

    hereMedia.setAttribute("src", srcImageLightbox);
    hereMedia.setAttribute("alt", altTitleLightbox);
    titleImageLightbox.innerHTML = altTitleLightbox;
}