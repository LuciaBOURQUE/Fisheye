// GERER LA DYNAMIQUE DES LIKES

//Affichage du nombre total des likes
function initAllLikeCounter () {
    let totalLike = document.querySelector('.like-total');
    let allLikes = document.querySelectorAll('.likes');
    let count = 0;
    
    allLikes.forEach((like)=> {
        let change = like.innerHTML;
        let parse = Number.parseInt(change);
        
        count += parse;
    });
    totalLike.innerHTML = count;
}

// Dynamique des likes avec toggle
function attachEventListenerToggleLike () {
    let icons = document.querySelectorAll('.icon');
    icons.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let totalLike = document.querySelector('.like-total');
            let counter = e.target.closest(".icon").previousElementSibling;
            let isLike = counter.getAttribute('aria-label') === 'like';

            if (!isLike) {
                let count = parseInt(counter.innerText) +1;
                counter.setAttribute('aria-label', 'like');
                counter.innerHTML = count;

                let countTotal = parseInt(totalLike.innerText) +1;
                totalLike.innerHTML = countTotal;

            } else {
                let count = parseInt(counter.innerText) -1;
                counter.removeAttribute('aria-label');
                counter.innerHTML = count;

                let countTotal = parseInt(totalLike.innerText) -1;
                totalLike.innerHTML = countTotal;
            }
       });
    })
}