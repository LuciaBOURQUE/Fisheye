// FACTORY FUNCTION (Design pattern type Creational Design) - LES PHOTOGRAPHES
function mediaFactory (data) {
    const { id, title, image, video, likes, date } = data;
    const photo = `assets/images/${image}`;
    const movie = `assets/images/${video}`;


    // Création de la section PHOTOS "Les médias du photographe"
    function getPhotoCardDOM() {
        const mediaUser = document.createElement('div');
        mediaUser.classList.add("media_photo");
        mediaUser.setAttribute("id", `${id}`);

        mediaUser.innerHTML = ` <a class="media_photo__image" tabindex="0" ><img src="assets/images/${image}" alt="${title}" aria-label="Ouvre la lightbox"/></a>
                                <div class="media_photo__information">
                                    <h3>${title}</h3>
                                    <div class="information-likes">
                                        <span class="likes">${likes}</span>
                                        <svg class="icon" role="button" aria-label="Bouton de like" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                                        </svg>
                                    </div> 
                                </div> `
        return (mediaUser);
    }

    // Création de la section VIDEOS "Les médias du photographe"
    function getVideoCardDOM() {
        const videoUser = document.createElement('div');
        videoUser.classList.add("media_video");
        videoUser.setAttribute("id", `${id}`);
    
        videoUser.innerHTML = ` <a class="media_photo__video" tabindex="0"><video src="assets/images/${video}" type="video/mp4" aria-label="Ouvre la lightbox"></video></a>
                                <div class="media_photo__information">
                                <h3>${title}</h3>
                                <div class="information-likes">
                                    <span class="likes" >${likes}</span>
                                    <svg class="icon" role="button" aria-label="Bouton de like" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                                    </svg>
                                </div> 
                            </div> `
        return (videoUser);
    }

    // Création de l'input pour le trie
    function getInputSelection() {
        const input = document.createElement('div');
        input.classList.add("photograph-media__input");
        
        input.innerHTML = ` <label for="trie" class="trie-text">Trier par</label>
                            <select name="trie" id="trie" aria-haspopup="liste de selection" role="Liste">
                                <option value="popularite" selected >Popularité</option>
                                <option value="date">Date</option>
                                <option value="titre">Titre</option>
                            </select> `
        return (input);  
    }

    return {
        id,
        photo,
        movie,
        getInputSelection,
        getPhotoCardDOM,
        getVideoCardDOM
    }
}