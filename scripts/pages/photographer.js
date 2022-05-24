// Récupération de l'ID dans l'URL avec la méthode "URLSearchParams"
const queryString = window.location.search;
const query = new URLSearchParams(queryString);
const id = query.get('id');


// Afficher toutes les données de l'ID avec la méthode ".find"
fetch('data/photographers.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        // --------- SECTION 1 : Le Photographe --------- //
        const photographer = data.photographers;
        const profilPhotograph = photographer.find((profil) => profil.id == id);

        // Création de la section "Les information du photographe" à partir des données de l'ID
        const profilUser = document.createElement('section');
        profilUser.setAttribute("class", "photograph-header");
        profilUser.innerHTML = `<aside class="photograph-header__informations">
                                    <div class="informations">
                                        <h1>${profilPhotograph.name}</h1>
                                        <div class="place">
                                            <h3>${profilPhotograph.city}</h3>
                                            <h3>${profilPhotograph.country}</h3>
                                        </div>
                                        <h4>${profilPhotograph.tagline}</h4>
                                    </div>
                                </aside>
                                
                                <button class="open-modal-button" onclick="openModal()">Contactez-moi</button>
                                
                                <img src="assets/photographers/${profilPhotograph.portrait}" alt="${profilPhotograph.name}"/>`


        const photographerMain = document.getElementById("main");
        photographerMain.appendChild(profilUser);


        // --------- SECTION 2 : Les Médias --------- //
        const medias = data.media;

        // Affichage de l'input et des médias
        displayMedia(medias);
        displayInput(medias);

        // Affichage par tri "menuSort.js"
        document.getElementById('trie').addEventListener('change', (e) => {
            selectChange(e, medias);
            displayMedia(medias);
        })

        // Affichage dynamique des likes
        initAllLikeCounter();
        attachEventListenerToggleLike();


        // Affichage dynamique de la lightbox
        const mediaPhoto = document.querySelectorAll(".media_photo__image");
        console.log(mediaPhoto)

        mediaPhoto.forEach((image) => {
            image.addEventListener('click', () => {
                displayLightbox(medias, image.parentNode.id);
                openLightbox();

                const arr = Array.from(mediaPhoto);
                let index = arr.indexOf(image); // Image actuel

                let btnPrevious = document.querySelector('.arrow-left');
                console.log(btnPrevious);
                btnPrevious.addEventListener('click', (e) => {
                    index -= 1; // Image précédente
                    const mediaLightboxImage = document.querySelector(".media");
                    const mediaLightboxTitle = document.querySelector(".title");

                    if (index < 0) {
                        index = arr.length - 1
                        index = name.length - 1
                      }
                
                      const src = arr[index]
                      const nameSrc = name[this.index]
                
                      mediaLightboxImage.innerHTML = `${src}`
                      mediaLightboxTitle.innerHTML = `${nameSrc}`

                    /*
                    displayLightbox(arr[index]); //on rappelle la fonction avec l'élement au nouvel index
                    */
                })
            });
        })


    })
/*
.catch(error => {
console.log('Vous avez fait une erreur:' + error);
})*/











// Création d'une fonction pour l'input du menu déroulant
function displayInput(medias) {
    const mediaSection = document.querySelector(".photograph-media");
    const input = mediaFactory(medias);
    const inputUser = input.getInputSelection();
    mediaSection.appendChild(inputUser);
}

// Création d'une fonction forEach pour chaque média
function displayMedia(medias) {
    const mediaGrid = document.querySelector(".photograph-media__grid");
    mediaGrid.innerHTML = '';

    medias.forEach((media) => {
        const photographerMedia = mediaFactory(media);
        if (media.photographerId == id) {
            const mediaUser = photographerMedia.getMediaCardDOM();
            mediaGrid.appendChild(mediaUser);

            //const videoUser = photographerMedia.getVideoCardDOM();
            //mediaGrid.appendChild(videoUser);
        }
    });
}

// Création d'une fonction pour la lightbox
function displayLightbox(medias, id, image) {
    const lightboxAside = document.getElementById("modal-lightbox");
    lightboxFactory().initMedia(medias);
    const lightboxImage = lightboxFactory().getLightboxImageDOM(id);
    lightboxAside.appendChild(lightboxImage);
}