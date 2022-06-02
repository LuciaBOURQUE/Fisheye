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

function changeMediaOnLightbox(arr, index) {
    const prevIndex = arr[index] // Image précédente
    console.log(index)
    console.log(prevIndex);

    const src = prevIndex.firstElementChild.getAttribute("src");
    const here = document.querySelector('.media');
    console.log(src);

    here.setAttribute("src", src);
    console.log(here);
}