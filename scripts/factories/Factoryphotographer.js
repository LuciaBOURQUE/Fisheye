// FACTORY FUNCTION - LES PHOTOGRAPHES

function photographerFactory (data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
    
    // Création de type carte pour un PHOTOGRAPHE
    function getUserCardDOM() {
        const profil = document.createElement('article');
        profil.setAttribute("class", "photographer");
        profil.setAttribute("id", `${id}`);

        profil.innerHTML =` <a class="photographer__image" href="photographer.html?id=${id}&name=${name}">
                                <img src="${picture}" alt="${name} - Aller à la page profil de ${name}" />
                                <h2>${name}</h2>
                            <a/>
                            <div class="place">
                                <h3>${city}, </h3>
                                <h3>${country}</h3>
                            </div>
                            <h4>${tagline}</h4>
                            <p>${price} €/jour</p> `
        return (profil);
    }

    return {
        name,
        picture,
        getUserCardDOM
    }
}