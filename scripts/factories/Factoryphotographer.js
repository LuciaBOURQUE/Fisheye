
// FACTORY FUNCTION (Design pattern type Creational Design) - LES PHOTOGRAPHES
// Page d'accueil > Affichage de tout les profils
function photographerFactory (data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    
    function getUserCardDOM() {
        const profil = document.createElement('article');
        profil.setAttribute("class", "photographer");
        profil.setAttribute("id", `${id}`);
        profil.setAttribute("aria-label", `profil de ${name}`);

        profil.innerHTML = `<a class="photographer__image" href="photographer.html?id=${id}&name=${name}">
                                <img src="${picture}" alt="${name} - Aller à la page profil de ${name}" />
                                <h2>${name}</h2>
                            <a/>
                            <div class="place">
                                <h3>${city}, </h3>
                                <h3>${country}</h3>
                            </div>
                            <h4>${tagline}</h4>
                            <p>${price} €/jour</p>`
return (profil);
    }

    return {
        name,
        picture,
        getUserCardDOM
    }
}