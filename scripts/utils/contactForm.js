// GERER LE FORMULAIRE DE CONTACT 

const main = document.getElementById("main");
const modal = document.getElementById("contact_modal");
const body = document.getElementById("body");


// Ouverture de la modale
const open = () => {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
    modal.style.display = "block";
}

function openModal() {
    open();
}


// Fermeture de la modale
const close = () => {
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    modal.style.display = "none";
}

function closeModal() {
    close();
}


// SINGLETON PATTERN (Design pattern type Creational Design)
// Gérer la connexion avec une base de données
// --- Apparition des données entrées par l'utilisateur ----


const firstName = document.forms["myForm"]["first"].value;
console.log(firstName);

/*
function User () {
    const firstName = document.forms["myForm"]["first"].value;
    //return firstName;
    console.log(firstName);
}*/

//console.log(User)
/*
// BOUTON Submit
const btnSubmit = document.querySelector('.contact_button')
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    User();
})*/
