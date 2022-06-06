// GERER LE FORMULAIRE DE CONTACT 
const modal = document.getElementById("contact_modal");

// Ouverture de la modale
function openModal() {
    main.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('no-scroll');
    modal.style.display = "block";
}

// Fermeture de la modale
function closeModal() {
    main.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('no-scroll');
    modal.style.display = "none";
}


// Fonctions des évènements inputs au Submit
const btnSubmit = document.querySelector(".contact_button");
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
})


// Gérer la connexion avec une base de données
// --- Apparition des données entrées par l'utilisateur ----
function validateForm () {
    if (
        firstNameInput()&&
        lastNameInput()&&
        emailInput()&&
        messageInput() ) {
            console.log("Prénom; " + first.value);
            console.log("Nom; " + last.value);
            console.log("Email; " + email.value);
            console.log("Message; " + message.value);
            return true;
        } else {
            validationOfInput();
            return false
        }
}

function validationOfInput() {
    firstNameInput();
    lastNameInput();
    emailInput();
    messageInput();
}


// Entrer du Prénom utilisateur
function firstNameInput() {
    const first = document.forms["myForm"]["first"].value;

    if(first.length <= 2 || first == ""){
        document.querySelector('.first-name').classList.add("error");
        document.querySelector('.first-error').style.opacity = "1";
        return false;
        } else {
        document.querySelector('.first-name').classList.remove("error");
        document.querySelector('.first-error').style.opacity = "0";
        return true;
        }
}

// Entrer du Nom utilisateur
function lastNameInput() {
    const last = document.forms["myForm"]["last"].value;

    if(last.length <= 2 || last == ""){
        document.querySelector('.last-name').classList.add("error");
        document.querySelector('.last-error').style.opacity = "1";
        return false;
        } else {
        document.querySelector('.last-name').classList.remove("error");
        document.querySelector('.last-error').style.opacity = "0";
        return true;
        }
}

// Entrer de l'Email(regex) utilisateur
function emailInput() {
    const email = document.forms["myForm"]["email"].value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!regex.test(email)) {
        document.querySelector('.email-name').classList.add("error");
        document.querySelector('.email-error').style.opacity = "1";
        return false;
        } else {
        document.querySelector('.email-name').classList.remove("error");
        document.querySelector('.email-error').style.opacity = "0";
        return true;
        }
}

// Entrer du Message utilisateur
function messageInput() {
    const message = document.forms["myForm"]["message"].value;

    if(message.trim() == null || message === "" ){
        document.querySelector('.message').classList.add("error");
        document.querySelector('.message-error').style.opacity = "1";
        return false;
        } else {
        document.querySelector('.message').classList.remove("error");
        document.querySelector('.message-error').style.opacity = "0";
        return true;
        }
}