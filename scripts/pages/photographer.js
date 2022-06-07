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
        profilUser.setAttribute("aria-label", "informations general du photographe");
        profilUser.innerHTML = `<aside class="photograph-header__informations">
                                    <div class="informations">
                                        <h1>${profilPhotograph.name}</h1>
                                        <div class="informations__place">
                                            <h3>${profilPhotograph.city}, </h3>
                                            <h3>${profilPhotograph.country}</h3>
                                        </div>
                                        <h4>${profilPhotograph.tagline}</h4>
                                    </div>
                                </aside>
                                
                                <button class="open-modal-button">Contactez-moi</button>
                                
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
        mediaPhoto.forEach((image) => {
            image.addEventListener('click', () => {
                displayLightbox(medias, image.parentNode.id);
                openLightbox();

                const arr = Array.from(mediaPhoto);
                let index = arr.indexOf(image); // Image actuel

                let btnPrevious = document.querySelector('.arrow-left');
                btnPrevious.addEventListener('click', (e) => {
                    index -= 1; 

                    if (index < 0) {
                        index = arr.length - 1
                    }
                    changeMediaOnLightbox(arr, index);
                });

                let btnNext = document.querySelector('.arrow-right');
                btnNext.addEventListener('click', (e) => {
                    index += 1; 

                    if (index >= arr.length) {
                        index = 0
                    }
                    changeMediaOnLightbox(arr, index);
                });

            });
        })

        // --- Ouverture et fermeture de la modal ----
        // Affichage du nom du Photographe dans la modal
        function modalNamePhotographe() {
            const namePhotographer = document.querySelector(".name-photographer");
            const nameTemplate = `${profilPhotograph.name}`
            namePhotographer.innerHTML = nameTemplate;
        }

        // Ouverture de la modal + Acessibilité via la touche "Enter"
        const openAcessKeydownModal = document.querySelector('.open-modal-button');
        openAcessKeydownModal.addEventListener("click", () => {
            openModal();
            modalNamePhotographe();
        });
        openAcessKeydownModal.addEventListener("keydown", (e) => {
            if(e.key === "Enter") {
                openModal();
                modalNamePhotographe();
            }
        })

        // Fermeture de la modal pour l'Acessibilité via la touche "Escape"
        const closeAcessKeydownModal = document.querySelector('.open-modal-button');
        closeAcessKeydownModal.addEventListener("keydown", (e) => {
            if(e.key === "Escape") {
                closeModal();
            }
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