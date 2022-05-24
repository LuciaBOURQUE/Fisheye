// FACTORY FUNCTION (Design pattern type Creational Design) - LES PHOTOGRAPHES
// Page d'accueil > Affichage de tout les profils
function mediaFactory (data) {
    const { id, photographerId, title, image, video, likes, date } = data;
    const photo = `assets/images/${image}`;
    //const movie = `assets/images/${video}`;
    //console.log(movie);


    // Création de la section "Les médias du photographe" (photos)
    function getMediaCardDOM() {
        const mediaUser = document.createElement('div');
        mediaUser.classList.add("media_photo");
        mediaUser.setAttribute("id", `${id}`);

        mediaUser.innerHTML = `
                                        <a class="media_photo__image"><img src="assets/images/${image}" alt="${title}" aria-label="Ouvre la lightbox"/></a>
                                        <div class="media_photo__information">
                                            <h3>${title}</h3>
                                            <div class="information-likes">
                                                <h3 class="likes">${likes}</h3>
                                                <svg class="icon" role="button" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                                                </svg>
                                            </div> 
                                        </div>`
    return (mediaUser);
    }


    // Création de la section "Les médias du photographe" (videos)
    function getVideoCardDOM() {
    const videoUser = document.createElement('div');
    videoUser.classList.add("media_video");
    videoUser.setAttribute("id", `${id}`);
    
    videoUser.innerHTML = `
                                        <a class="media_photo__video"><video alt="${title}" aria-label="Ouvre la lightbox"><source src="assets/images/${video}" type="video/mp4"></video></a>
                                         <div class="media_photo__information">
                                            <h3>${title}</h3>
                                            <div class="information-likes">
                                                <h3 class="likes" >${likes}</h3>
                                                <svg class="icon" role="button" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                                                </svg>
                                            </div> 
                                        </div>`
    return (videoUser);
    }


    // Création de l'input pour le trie
    function getInputSelection() {
        const input = document.createElement('div');
        input.classList.add("photograph-media__input");
        
        input.innerHTML = ` <label for="trie">Trier par</label>
                            <select name="trie" id="trie">
                                <option value="popularite" class="${likes}">Popularité</option>
                                <option value="date" class="${date}">Date</option>
                                <option value="titre" class="${title}" selected>Titre</option>
                            </select>
                            <p class="test-trie"></p>`
    return (input);  
    }

    return {
        id,
        photo,
        //movie,
        getInputSelection,
        getMediaCardDOM,
        //getVideoCardDOM
    }
}