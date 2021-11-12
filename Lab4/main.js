
const games = [
    {
        gameTitle: "God of War",
        developer: "Santa Monica",
        releaseDate: "2018",
        description: "A story about a god traveling with his son",
        price: 40, genre: "Action",
        rating: 4.8,
        platform: "PS4",
        image: "Images/GoW.jpg"
    },
    {
        gameTitle: "Dishonored",
        developer: "Arkane Studios",
        releaseDate: "2012",
        description: "Dishonored managed to breathe new life into a faltering stealth genre by invigorating players with a host of magical abilities and wickedly clever tools for every occasion.",
        price: 20.99,
        genre: "Action",
        rating: 3.5,
        platform: "PS4",
        image: "Images/Dishonered.jpg"
    },
    {
        gameTitle: "NFS Rivals",
        developer: "EA",
        releaseDate: "2013",
        description: "Players take on the role of a Racer or Cop, with each side of the law offering its own play style.",
        price: 10.99,
        genre: "Racing",
        rating: "4",
        platform: "PC, PS4, XBOX",
        image: "Images/NFS-Rivals.jpg"
    },
    {
        gameTitle: "Mortal Kombat 11",
        developer: "NetherRealm Studios",
        releaseDate: "2019",
        description: "Mortal Kombat 11 is a fighting game developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment",
        price: 13.99,
        genre: "Action",
        rating: 4.4,
        platform: "PC, XBOX, PS4",
        image: "https://s1.gaming-cdn.com/images/products/8310/orig/game-steam-mortal-kombat-11-ultimate-cover.jpg"
    },
    {
        gameTitle: "Infamous Second Son",
        developer: "",
        releaseDate: "2014",
        description: "Infamous Second Son is a 2014 action-adventure video game developed by Sucker Punch Productions and published by Sony Computer Entertainment for PlayStation 4.",
        price: 13.69,
        genre: "Action",
        rating: 4.3,
        platform: "PS4",
        image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2821/KXv6VplN1r1bNPdfR4r29w0m.png"
    },
    {
        gameTitle: "Marvel's SpiderMan",
        developer: "Insomniac Games",
        releaseDate: "2018",
        description: "Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment.",
        price: 15.99,
        genre: "Action",
        rating: "4.7",
        platform: "PS4",
        image: "Images/Spiderman.jpg"
    },
    {
        gameTitle: "Ghost of Tsushima",
        developer: "Sucker Punch",
        releaseDate: "2020",
        description: "Featuring an open world, the player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.",
        price: 49.99,
        genre: "Adventure",
        rating: 4.9,
        platform: "PS4",
        image: "Images/Ghost_of_Tsushima.jpg"
    },
    {
        gameTitle: "Legend of Zelda",
        developer: " Capcom",
        releaseDate: "2013",
        description: "The Legend of Zelda is a high fantasy action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka",
        price: 10.99,
        genre: "Adventure",
        rating: 4.5,
        platform: "Nintendo",
        image: "Images/Zelda.jpg"
    },
    {
        gameTitle: "Kena Bridge of Spirits",
        developer: "Ember Lab",
        releaseDate: "2021",
        description: " The story follows Kena, a young spirit guide who uses her magical abilities to help deceased people move from the physical to the spirit world.",
        price: 35.00,
        genre: "Adventure",
        rating: 4.7,
        platform: "PS5",
        image: "Images/Kena-Bridge-of-Spirits.jpg"
    },
    {
        gameTitle: "Forza Horizon",
        developer: "Ben Thaker-Fell",
        releaseDate: "2018",
        description: "Forza Horizon 4 is a 2018 racing video game developed by Playground Games and published by Microsoft Studios.",
        price: 35.00,
        genre: "Racing",
        rating: 4.4,
        platform: "XBOX",
        image: "Images/Forza-Horizon.jpg"
    },
    {
        gameTitle: "Godfall",
        developer: "Counterplay Games",
        releaseDate: "2020",
        description: "Godfall is an action role-playing game developed by Counterplay Games and published by Gearbox Publishing.",
        price: 30.00,
        genre: "Fantasy",
        rating: 3.5,
        platform: "PS4",
        image: "Images/Godfall.jpg"
    },
    {
        gameTitle: "Rocket League",
        developer: " Psyonix",
        releaseDate: "2015",
        description: "Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation 4 in July 2015.",
        price: 20,
        genre: "Racing",
        rating: 4.2,
        platform: "PS4",
        image: "Images/Rocket-league.jpg"
    },
    {
        gameTitle: "NFS Heat",
        developer: "EA Gothenburg",
        releaseDate: "2019",
        description: "Need for Speed Heat is a 2019 racing video game developed by Ghost Games and published by Electronic Arts for Microsoft Windows, PlayStation 4 and Xbox One.",
        price: 18.99,
        genre: "Racing",
        rating: 3.9,
        platform: "XBOX",
        image: "Images/NFS-Heat.jpg"
    },
    {
        gameTitle: "Burnout Paradise",
        developer: "Criterion Software",
        releaseDate: "2008",
        description: "Burnout Paradise is a 2008 open world racing video game developed by Criterion Games and published by Electronic Arts for PlayStation 3, Xbox 360 and Microsoft Windows",
        price: 5.99,
        genre: "Racing",
        rating: 4.6,
        platform: "PC",
        image: "Images/Burnout.jpg"
    },
    {
        gameTitle: "The Elder Scrolls V: Skyrim",
        developer: "Bethseda Game Studios",
        releaseDate: "2011",
        description: "The Elder Scrolls V: Skyrim is an open-world action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.",
        price: 15.00,
        genre: "Fantasy",
        rating: 4.8,
        platform: "XBOX",
        image: "Images/Skyrim.jpg"
    },
    {
        gameTitle: "World of Warcraft",
        developer: " Blizzard Entertainment",
        releaseDate: "2004",
        description: "World of Warcraft is a massively multiplayer online role-playing game released in 2004 by Blizzard Entertainment.",
        price: 10.95,
        genre: "Fantasy",
        rating: 3.9,
        platform: "PC",
        image: "Images/Warcraft.jpg"
    },
    {
        gameTitle: "League of Legends",
        developer: "Riot Games",
        releaseDate: "2009",
        description: "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games.",
        price: 0,
        genre: "Fantasy",
        rating: 3.3,
        platform: "PC",
        image: "Images/League.jpg"
    },
    {
        gameTitle: "Genshin Impact",
        developer: "Mihoyo",
        releaseDate: "2020",
        description: "Genshin Impact is an action role-playing game developed and published by miHoYo. It was released for Microsoft Windows, PlayStation 4, Android, and iOS in September 2020.",
        price: 0,
        genre: "Fantasy",
        rating: 4.3,
        platform: "PS$",
        image: "Images/Genshin-impact.jpg"
    },
    {
        gameTitle: "Ori and the Will of the Wisps",
        developer: "Moon Studios",
        releaseDate: "2020",
        description: "Ori and the Will of the Wisps is a platform-adventure Metroidvania video game developed by Moon Studios and published by Xbox Game Studios for Microsoft Windows and Xbox One.",
        price: 29.99,
        genre: "Adventure",
        rating: 4.9,
        platform: "XBOX",
        image: "Images/ori-will-of-wisp.png"
    },
    {
        gameTitle: "Ori and the Blind Forest",
        developer: "Moon Studios",
        releaseDate: "2015",
        description: "Ori and the Blind Forest is a platform-adventure Metroidvania video game developed by Moon Studios and published by Microsoft Studios.",
        price: 15.99,
        genre: "Adventure",
        rating: 4.7,
        platform: "XBOX",
        image: "Images/ori-blind-forest.jpg"
    },
    {
        gameTitle: "Death Stranding",
        developer: "Kojima Productions",
        releaseDate: "2019",
        description: "Death Stranding is a 2019 action game developed by Kojima Productions. It is the first game from director Hideo Kojima and Kojima Productions after their split from Konami in 2015. It was released by Sony Interactive Entertainment for the PlayStation 4.",
        price: 17.99,
        genre: "Horror",
        rating: 4.3,
        platform: "PS4",
        image: "Images/death-stranding.jpg"
    },
    {
        gameTitle: "The Last of Us: Part II",
        developer: "Naughty Dog",
        releaseDate: "2020",
        description: "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4.",
        price: 37.99,
        genre: "Horror",
        rating: 3.0,
        platform: "PS4",
        image: "Images/The-last-of-us.jpg"
    },
    {
        gameTitle: "Resident Evil Village",
        developer: "Capcom",
        releaseDate: "2021",
        description: "Resident Evil Village is a 2021 first-person survival horror game developed and published by Capcom. It is the sequel to Resident Evil 7: Biohazard",
        price: 59.99,
        genre: "Horror",
        rating: 4.6,
        platform: "PC",
        image: "Images/resident-evil.jpg"
    },
    {
        gameTitle: "Days Gone",
        developer: "Bend Studio",
        releaseDate: "2019",
        description: "Days Gone is a 2019 action-adventure survival horror video game developed by Bend Studio and published by Sony Interactive Entertainment.",
        price: 39.99,
        genre: "Horror",
        rating: 4.7,
        platform: "PS4",
        image: "Images/Days-gone.jpeg"
    },
    {
        gameTitle: "Back 4 Blood",
        developer: "Turtle Rock Studios",
        releaseDate: "2021",
        description: "Back 4 Blood is an online multiplayer first-person shooter game developed by Turtle Rock Studios and published by Warner Bros. Interactive Entertainment.",
        price: 40.99,
        genre: "Horror",
        rating: 3.5,
        platform: "PC",
        image: "Images/back4blood.jpg"
    }
];
const cartItems = [];

if (!localStorage.getItem('gameStorage')) {
    localStorage.setItem('gameStorage', JSON.stringify(games));
}

//if (!sessionStorage.getItem('cartItems')) {
//    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
//}

    
const gameList = document.getElementById("gameList");
const gamePlatform = document.getElementById("game_platform");
const gameGenre = document.getElementById("game_genre");
const maxPrice = document.getElementById("max-price");
const btn_submit = document.getElementById("btn_submit");
const btn_add_game = document.getElementById("btn_add_game");

/*gamePlatform.addEventListener('change', selectPlatform);*/
//Filter for the Platform Menu
gamePlatform.addEventListener('change', (e) => {
    var retrieveData = localStorage.getItem("gameStorage");
    const gameDatabase = JSON.parse(retrieveData);
    const searchValue = e.target.value;
    const gameFilter = gameDatabase.filter((game) => {
        return (game.platform.includes(searchValue));
    });

    gameList.innerHTML = ""; //clear the display area for the next results
    displayGames(gameFilter);
    console.log(gameFilter);
});

//filter for the Genre dropdown menu
gameGenre.addEventListener('change', (e) => {
    var retrieveData = localStorage.getItem("gameStorage");
    const gameDatabase = JSON.parse(retrieveData);
    const searchValue = e.target.value;
    const gameFilter = gameDatabase.filter((game) => {
        return (game.genre.includes(searchValue));
    });

    gameList.innerHTML = ""; //clear the display area for the next results
    console.log(gameFilter);
    displayGames(gameFilter);
});//game genre function end

//filter for maximum price
document.getElementById("max-price").addEventListener('keyup', (e) => {
    var retrieveData = localStorage.getItem("gameStorage");
    const gameDatabase = JSON.parse(retrieveData);
    const searchValue = maxPrice.value;
    const gameFilter = gameDatabase.filter((game) => {
        if (searchValue == "") {
            gameList.innerHTML = "";
        } else {
            return (game.price <= searchValue);
        }
        
    });
    
    gameList.innerText = ""; //clear the display area for the next results
    displayGames(gameFilter);
    console.log(gameFilter);
    
});//btn submit function end



function displayGames(gaming_List) {
    for (var i = 0; i < gaming_List.length; i++) {
        var list = `
                <li>
                    <img class='image' alt=${gaming_List[i].gameTitle} src = "${gaming_List[i].image}" </img>
                    <h2 class='title'>${gaming_List[i].gameTitle}</h2>
                    <p class='price'>$${gaming_List[i].price}</p>
                    <button type="button" class="addToCart">Add to cart</button>
                    <button type="button" class="drop-down"><i id="icon" class="fas fa-caret-down"></i></button>
                    <div class="collapse">
                        <p class='description'>Decription: ${gaming_List[i].description}</p>
                        <p class='developer'>Developer: ${gaming_List[i].developer}</p>
                        <p class='genre'>Genre: ${gaming_List[i].genre}</p>
                        <p class='releaseDate'>Release Date: ${gaming_List[i].releaseDate}</p>
                        <p class='rating'>Rating: ${gaming_List[i].rating}</p>
                        <p class='platform'>Platform: ${gaming_List[i].platform}</p>
                    </div>
                </li>
        `

        gameList.innerHTML += list;
        addToCart();
        display();
    }
}


function focus() {
    document.getElementById("errorText").style.display = "none";
}



function display() {
    var btn = document.getElementsByClassName("drop-down");

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            /*this.classList.toggle("active");*/
            var content = this.nextElementSibling;
            if (content.style.display == "block") {
                document.getElementById("icon").classList.toggle('fa-caret-down');
                content.style.display = "none";
            } else {
                document.getElementById("icon").classList.toggle('fa-sort-up');
                content.style.display = "block";
            }
        });
    }
}

function addToCart() {
    var addToCartButtons = document.getElementsByClassName("addToCart");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', function () {
            addToCart_Clicked();
            alert("Item succefully added!");
        });
    }
}


function addToCart_Clicked() {
    var button = event.target;
    var storeItem = button.parentElement;
    var image = storeItem.getElementsByClassName('image')[0].src;
    var title = storeItem.getElementsByClassName('title')[0].innerHTML;
    var priceValue = storeItem.getElementsByClassName('price')[0];
    var description = storeItem.getElementsByClassName('description')[0].innerHTML;
    var price = parseFloat(priceValue.innerText.replace('$', ''));

    cartItems.push({
        gametitle: title,
        image: image,
        price: price,
        description: description
    });

    console.log(cartItems);

    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log(image, title, price, description);
}

//function displayCart(image, title, price) {
//    var orderItems = document.createElement('div');
//    orderItems.innerText = title;
//    var orders = document.getElementsByClassName('orders')[0];
//    orders.append(orderItems);
//}

function dataRetrival() {
    var retrieveData = localStorage.getItem("gameStorage");
    const games2 = JSON.parse(retrieveData);
}
