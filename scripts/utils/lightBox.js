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
function changeMediaOnLightbox(arr, index, medias) {
    let slideIndex = arr[index].closest('div'); // Aperçu de l'image précédente ou suivante
    let id = slideIndex.id

    let titleMediaLightbox = document.querySelector('.lightbox-title');
    let altTitleLightbox = arr[index].firstElementChild.getAttribute("alt");
    titleMediaLightbox.innerHTML = altTitleLightbox;

    let video = document.querySelector('.video-lightbox');
    let img = document.querySelector('.img-lightbox');

    const media = medias.find(element => element.id === parseInt(id));

    if(media.image) { // IMAGE
        let pathImg = `assets/images/${media.image}`

        let hereMedia = document.querySelector('.img-lightbox');
        hereMedia.setAttribute("src", pathImg);

        video.classList.add('none');
        img.classList.remove('none');

    } else { // VIDEO
        let pathVideo = `assets/images/${media.video}`

        let hereVideo = document.querySelector('.media-video');
        hereVideo.setAttribute("src", pathVideo);
        video.load();

        img.classList.add('none');
        video.classList.remove('none');

        const controlAccessibilityVideo = document.querySelector('.video-lightbox')
        console.log(controlAccessibilityVideo);
        window.addEventListener('keydown', (e) => {
            console.log(e);
            if (e.key == "Space") {
                controlAccessibilityVideo.play();
            } else if (e.key == "Space") {
                controlAccessibilityVideo.pause();
            }
        });
        
    }
}
