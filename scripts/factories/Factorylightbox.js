// FACTORY FUNCTION (Design pattern type Creational Design) - LA LIGHTBOX
// Affichage de la lightboxs
let medias;
function lightboxFactory () {

    initMedia = function (data) {
        medias = data;
    }
    //const movie = `assets/images/${video}`;

    // Création de l'aside de la lightbox (photos)
    function getLightboxImageDOM(id) {
        const media = medias.find(element => element.id === parseInt(id));
        // TODO: gérer si pas de correspondances
        const lightbox = document.createElement('div');
        lightbox.classList.add("lightbox-container");

        lightbox.innerHTML = `  <div class="lightbox-container__media">
                                    <img class="media" aria-label="${media.title}" src="assets/images/${media.image}" alt="${media.title}" >
                                </div>
                                <p class="title">${media.title}</p>
                                <button class="arrow-left" aria-label="précédent" tabindex="0" ><i role="button" class="fas fa-chevron-left"></i></button>
                                <button class="arrow-right" aria-label="suivant" tabindex="0"><i role="button" class="fas fa-chevron-right"></i></button>
                                <button class="close" aria-label="fermeture de la lightbox" onclick="closeLightbox()"><i class="fas fa-times"></i></button>`
        

        return (lightbox);
    }


    // Création de la section "Les médias du photographe" (videos)
    function getLightboxVideoDOM() {
        const lightbox = document.createElement('div');
        lightbox.classList.add("lightbox-container");

        lightbox.innerHTML = `  <div class="lightbox-container__media">
                                    <video class="media"  aria-label="${title}" alt="${title}">
                                        <source src="assets/images/${video}" type="video/mp4">
                                    </video>
                                </div>
                                <p class="title">${title}</p>
                                <button class="arrow-left" aria-label="précédent"><i role="button" class="fas fa-chevron-left"></i></button>
                                <button class="arrow-right" aria-label="suivant"><i role="button" class="fas fa-chevron-right"></i></button>
                                <button class="close" aria-label="fermeture de la lightbox" onclick="closeLightbox()"><i class="fas fa-times"></i></button>`
        return (lightbox);
    }


    return {
        getLightboxImageDOM,
        initMedia,
        medias,
        //getLightboxVideoDOM
    }
}