$(document).ready(function () {

    var retrieveData = localStorage.getItem("gameStorage");
    const gameDatabase = JSON.parse(retrieveData);

    $("#add_video_game").click(function () {
        $(".display-form").toggleClass("d-block d-none");
    });

    $("#btn_edit_game").click(function () {
        $("#search-contents").toggleClass("d-block d-none");
    });

    //Game add function
    $("#btn-add-to-list").click(function () {
        var gameTitle = $("#game_title").val();
        var gameDeveloper = $("#game_developer").val();
        var gameRelease = $("#game_release_date").val();
        var gameDescription = $("#game_description").val();
        var gamePrice = $("#game_price").val();
        var gameGenre = $("#game-genre").val();
        var gameRating = $("#game_rating").val();
        var gamePlatform = $("#game-platform").val();
        var gameImage = $("#game_image").val();

        var retrieveData = localStorage.getItem("gameStorage");

        const gameDatabase = JSON.parse(retrieveData);
        gameDatabase.push({
            gameTitle: gameTitle,
            developer: gameDeveloper,
            releaseDate: gameRelease,
            description: gameDescription,
            price: gamePrice,
            genre: gameGenre,
            rating: gameRating,
            platform: gamePlatform,
            image: gameImage
        });
        localStorage.setItem("gameStorage", JSON.stringify(gameDatabase));
        alert("Game successfully added!");
    });

    const DisplayArea = $('#displayArea');

    $('#searchBar').keyup((e) => {
        var retrieveData = localStorage.getItem("gameStorage");
        const gameDatabase = JSON.parse(retrieveData);
        const searchValue = $('#searchBar').val();
        const gameFilter = gameDatabase.filter((game) => {
            if (searchValue == "") {
                DisplayArea.html("")
            } else {
                return (game.gameTitle.toLowerCase().includes(searchValue));
            }
        });

        DisplayArea.html(""); //clear the display area for the next results
        console.log(gameFilter);
        displayGames(gameFilter);
    });//game genre function end

    function displayGames(gamesList) {
        for (var i = 0; i < gamesList.length; i++) {
            var list = `
                <li class='bg-dark'>
                    <img class="img-fluid" alt=${gamesList[i].gameTitle} src = "${gamesList[i].image}" </img>
                    <h2>${gamesList[i].gameTitle}</h2>
                    <p>Price: $${gamesList[i].price}</p>
                    <div id='collapse' class="collapse">
                        <p>Decription: ${gamesList[i].description}</p>
                        <p>Developer: ${gamesList[i].developer}</p>
                        <p>Genre: ${gamesList[i].genre}</p>
                        <p>Release Date: ${gamesList[i].releaseDate}</p>
                        <p>Rating: ${gamesList[i].rating}</p>
                        <p>Platform: ${gamesList[i].platform}</p>
                    </div>
                    <div class="buttons">
                        <button type='button' class='btn btn-primary btn-md edit'>Edit</button>
                        <button type='button' class='btn btn-danger btn-md delete'>Delete</button>
                    </div>
                </li>
            `;

            $('#displayArea').html(function () {
                document.getElementById('displayArea').innerHTML += list;
            });
            deleteGame();
        }
    }

    function editButton(title) {
        let btn_edit = $('.edit');
        for (var i = 0; i < btn_edit; i++) {
            btn_edit[i].click(function () {
                for (var i = 0; i < gameDatabase; i++) {
                    if (title == gamegameDatabase[i].title) {
                        gameDatabase.splice(i, 1);
                    }
                }
            })
        }
    }

    function deleteGame() {
        var deleteGameButtons = document.getElementsByClassName("btn-danger");
        for (var i = 0; i < deleteGameButtons.length; i++) {
            var button = deleteGameButtons[i];
            button.addEventListener('click', function () {
                removeItem();
            });
        }
    }

    function removeItem() {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();

    }
})

