document.addEventListener('DOMContentLoaded', () => {
    console.log("Le DOM est chargé");

    // On récupère les informations du json
    
    /* fetch('assets/data/games.json')
        .then(response => response.json())
        .then((jsonGames) => {
            jsonGames.games.map((game) => {

                // On met les valeurs du json dans des variables 
                let title = game.game_title;
                let price = game.price;
                let poster = game.poster_path;
                let alt = game.alt;

                let test = () => {
                    console.log('test marche btn')
                };

                // On écrit le code html avec les variables ci-dessus pour chaque produit
                
                let gameToInject = `
        <div class="col-lg-3 gx-5 gy-5">
            <div class="grid-item">
                <img class="gameImg shadow" src="${poster}" alt="${alt}">
                <span class="gameText gameTitle border-top">${title}</span>
                <span class="gameText gamePrice">${price}</span>
                <div class="d-grid gap-2"><button class="js-btn btn bg-customBlue" id="addToCartId" type="button" >AJOUTER AU PANIER</button></div>
            </div>
        </div>
    `;
    
                // On met le code html gameToInject dans la div ayant pour ID : #gameList
                
                 document.getElementById('gameList').innerHTML += gameToInject;
                document.getElementsByTagName('js-btn').addEventListener('click', function() {
                    console.log('test ça marche')
                });
                test();
            });
        }); */

    let myCart = document.getElementById('cart');
    let addToCart = document.getElementById('addToCartId');
    let added = document.getElementById('addedToCartMsg');

    document.getElementsByTagName('js-btn').addEventListener('click', function() {
        console.log('test ça marche')
    });

    // addToCart.addEventListener("click", function() {

        // Affiche la div qui contient le message "L'article a été ajouté à votre panier"
        let test = () => {
        console.log('showing div')
        added.classList.add('show');
        setTimeout(hideTimeout, 2000);
        }
    
    // })

        // Cache la div qui contient le message "L'article a été ajouté à votre panier" au bout de 2 secondes
    let hideTimeout = () => {
        console.log('hiding div')
        added.classList.remove('show');
    }

    let addToCartBtn = document.getElementsByClassName('js-btn');
    for (let i = 0; i < addToCartBtn.length; i++){
        let btnClicked = addToCartBtn[i]
        console.log(i)
        btnClicked.addEventListener('click', addToCartClicked)
    }

    function addToCartClicked(event) {
        let button = event.target
        let shopItem = button.parentElement.parentElement
        let gameTitle = shopItem.getElementsByClassName('gameTitle').innerText

        console.log(gameTitle)
    }



    let removeCartItemBtn = document.getElementsByClassName('');

});