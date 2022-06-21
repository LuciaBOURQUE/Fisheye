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
    var slideIndex = arr[index] // Aperçu de l'image précédente ou suivante
    console.log(slideIndex);

    var titleImageLightbox = document.querySelector('.lightbox-title');
    let altTitleLightbox = slideIndex.firstElementChild.getAttribute("alt");
    titleImageLightbox.innerHTML = altTitleLightbox;


    if(slideIndex.image) { // IMAGE
        console.log("slideIndex.image")

        let srcMediaLightbox = slideIndex.firstElementChild.getAttribute("src");
        let hereMedia = document.querySelector('.media');
        hereMedia.setAttribute("src", srcMediaLightbox);

    } 
    /*else { // VIDEO
        console.log("video")

        let srcMediaLightbox = slideIndex.getAttribute("src");
        console.log(srcMediaLightbox);

        let hereVideo = document.querySelector('.media-video');
        console.log(hereVideo);

        hereVideo.setAttribute("src", srcMediaLightbox);
    }*/
}