// Récupération des données JSON avec la méthode "FETCH"

fetch('data/photographers.json') // On va contacter le fichier ou se situe les données
    .then(response => { // Je récupère une réponse('response') avec THEN
    return response.json(); // On formate ici la réponse('reponse') en JSON pour pouvoir la lire
    })
            
    .then(data => {
        const photographers = data.photographers;
        displayProfilData(photographers);
    })

    .catch(error => {
    console.log('Vous avez fait une erreur:' + error);
    })


/*
- Fonction affichage PHOTOGRAPHE (data)
- Avec appel de la Factory Photographer
*/
function displayProfilData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};