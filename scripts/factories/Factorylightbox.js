// FACTORY FUNCTION - LA LIGHTBOX

let medias; // Initalisations des médias ici
function lightboxFactory () {

    initMedia = function (data) {
        medias = data;
    }

    // Lightbox PHOTOS
    function getLightboxImageDOM(id) {
        const media = medias.find(element => element.id === parseInt(id));
        const lightbox = document.createElement('div');
        lightbox.classList.add("lightbox-container");

        lightbox.innerHTML = `  <div class="lightbox-container__media">
                                    <img class="media" src="assets/images/${media.image}" alt="${media.title}" >
                                </div>
                                <p class="lightbox-title">${media.title}</p>
                                <button class="arrow-left" aria-label="précédent" tabindex="0" ><i role="button" class="fas fa-chevron-left"></i></button>
                                <button class="arrow-right" aria-label="suivant" tabindex="0"><i role="button" class="fas fa-chevron-right"></i></button>
                                <button class="close" aria-label="fermeture de la lightbox" onclick="closeLightbox()"><i class="fas fa-times"></i></button>`
        

        return (lightbox);
    }



    // Lightbox VIDEOS
    function getLightboxVideoDOM(id) {
        const media = medias.find(element => element.id === parseInt(id));
        const lightbox = document.createElement('div');
        lightbox.classList.add("lightbox-container");

        lightbox.innerHTML = `  <div class="lightbox-container__media">
                                    <video class="media" alt="${media.title}" controls="controls" >
                                        <source src="assets/images/${media.video}" type="video/mp4">
                                    </video>
                                </div>
                                <p class="lightbox-title">${media.title}</p>
                                <button class="arrow-left" aria-label="précédent"><i role="button" class="fas fa-chevron-left"></i></button>
                                <button class="arrow-right" aria-label="suivant"><i role="button" class="fas fa-chevron-right"></i></button>
                                <button class="close" aria-label="fermeture de la lightbox" onclick="closeLightbox()"><i class="fas fa-times"></i></button>`
        return (lightbox);
    }


    return {
        initMedia,
        medias,
        getLightboxImageDOM,
        getLightboxVideoDOM
    }
}