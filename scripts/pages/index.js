// Récupération des données JSON avec la méthode "FETCH"
fetch('data/photographers.json') // On va contacter le fichier ou se situe les données
.then(response => { // Je récupère une réponse('response') avec THEN
return response.json(); // On formate ici la réponse('reponse') en JSON pour pouvoir la lire
})
            
.then(data => {
        const photographers = data.photographers;
        displayData(photographers);
    })

    .catch(error => {
    console.log('Vous avez fait une erreur:' + error);
    })



// Création d'une fonction pour l'affichage des données d'UN photographe
function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);

            const userCardDOM = photographerModel.getUserCardDOM();

            photographersSection.appendChild(userCardDOM);
        });
};