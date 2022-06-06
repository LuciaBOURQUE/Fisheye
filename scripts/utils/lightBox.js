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

function changeMediaOnLightbox(arr, index) {
    const slideIndex = arr[index]

    const src = slideIndex.firstElementChild.getAttribute("src");
    const here = document.querySelector('.media');

    here.setAttribute("src", src);
}