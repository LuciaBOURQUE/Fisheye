// GERER LA DYNAMIQUE DE L'INPUT(menu déroulant)

// Sélection par tri
function selectChange(event, media) {
    let selectElement = event.target;
    let value = selectElement.value;

    if (value == "popularite") {
        sortPopularite(media);
    }
    if (value == "date") {
        sortDate(media);
    }
    if (value == "titre") {
        sortTitle(media);
    }
}


// POPULARITÉ - Fonction de tri par ordre décroissant des likes
function sortPopularite (medias) {
    medias.sort( (a, b) => {
        return (b.likes) - (a.likes);
    })
}


// DATE - Fonction de tri par date du plus récent au moins récent
function sortDate (medias) {
    medias.sort( (a, b) => {
        return new Date(b.date) - new Date(a.date);
    })
}


// TITRE - Fonction de tri par titre par ordre alphabétique
function sortTitle (medias) {
    medias.sort( (a, b) => {
        return a.title.localeCompare(b.title);
    })
}