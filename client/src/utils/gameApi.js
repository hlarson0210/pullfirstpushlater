
let API = function () {
        const clientID = "dGTAqjEDh1";
        let queryURL = "https://www.boardgameatlas.com/api/search?order_by=reddit_week_count&ascending=false&limit=10&client_id=" + clientID;
        let destination = $("#api");

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (resp1) {
            console.log(resp1);

            for (let i = 0; i < resp1.games.length; i++) {
                let image = resp1.games[i].images.medium
                let name = resp1.games[i].name;
                let minPlayers = resp1.games[i].min_players;
                let maxPlayers = resp1.games[i].max_players;
                let minPlayTime = resp1.games[i].min_playtime;
                let maxPlayTime = resp1.games[i].max_playtime;
                let price = resp1.games[i].price;
                let description = resp1.games[i].description_preview;
                let officialURL = resp1.games[i].official_url;
                let age = resp1.games[i].min_age;
                let rules = resp1.games[i].rules_url;
                let userRating = resp1.games[i].average_user_rating;


                let card = $("<div>").attr("class", "card horizontal");
                // background styling: .attr("style", "background: linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80));")
                let cardImageHolder = $("<div>").attr("class", "card-image");
                let cardImage = $("<img>").attr("src", image).attr("style", "height: 100px; width: 100px; margin: 20% 5% 20% 5%;");
                let cardImageLink = $("<a>").attr("href", officialURL).attr("target", "_blank");
                cardImageLink.append(cardImage);
                cardImageHolder.append(cardImageLink);

                let cardInfo = $("<div>").attr("class", "card-stacked");
                let cardContent = $("<div>").attr("class", "card-content");
                let cardName = $("<a>").append($("<h4>").text(name)).attr("href", officialURL).attr("target", "_blank").attr("style", "text-decoration: none;");

                let list = $("<ul>").attr("class", "collapsible");
                let listItem = $("<li>");
                let listItemDiv = $("<div>").attr("class", "collapsible-header").text("Description...");
                let listItemDiv2 = $("<div>").attr("class", "collapsible-body");
                let listItemSpan = $("<span>").text(description).attr("style", "height:10em; display:block; overflow-y:scroll; transform:translateY(0%);");
                listItemDiv2.append(listItemSpan);
                listItem.append(listItemDiv).append(listItemDiv2);
                list.append(listItem);

                let cardAction = $("<div>").attr("class", "card-action");
                let buyInfo = $("<div>").text("Price: $" + price).attr("style", "margin-right: 10px;");
                let players = $("<div>").text("Players: " + minPlayers + "-" + maxPlayers).attr("style", "margin-right: 10px;");
                let playtime = $("<div>").text("Play time: " + minPlayTime + "-" + maxPlayTime + "min").attr("style", "margin-right: 10px;");
                let minAge = $("<div>").text("For ages " + age + "+").attr("style", "margin-right: 10px;");
                let rating = $("<div>").text("Rating: " + userRating.toFixed(2));
                let gameLink = $("<a>").attr("href", officialURL).attr("target", "_blank").text("Buy it here");
                let downloadRules = $("<a>").attr("href", rules).attr("target", "_blank").text("See rules");
                let addToLibrary = $("<button>").attr("class", "btn-floating waves-effect waves-light btn-large addToLibrary blue lighten-1 right").text("add");

                cardContent.append(addToLibrary).append(cardName).append(list);
                cardAction.append(buyInfo).append(players).append(playtime).append(minAge).append(rating).append(gameLink).append(downloadRules);
                cardInfo.append(cardContent).append(cardAction);

                card.append(cardImageHolder).append(cardInfo);

                destination.append(card);
            }
        });


        $(document).on("click", ".searching", function () {
            let destination = $("#api-search");
            let nameOfGame = $("#nameOfGame").val().trim();
            let queryURL = "https://www.boardgameatlas.com/api/search?&limit=25&client_id=" + clientID + "&name=" + nameOfGame;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (search) {
                console.log(search);
                destination.empty();
                if (search.games) {
                    let games = search.games;
                    for (let i = 0; i < games.length; i++) {
                        let image = games[i].images.medium
                        let name = games[i].name;
                        let minPlayers = games[i].min_players;
                        let maxPlayers = games[i].max_players;
                        let minPlayTime = games[i].min_playtime;
                        let maxPlayTime = games[i].max_playtime;
                        let price = games[i].price;
                        let description = games[i].description_preview;
                        let officialURL = games[i].official_url;
                        let age = games[i].min_age;
                        let rules = games[i].rules_url;
                        let userRating = games[i].average_user_rating;

                        let card = $("<div>").attr("class", "card horizontal");
                        let cardImageHolder = $("<div>").attr("class", "card-image");
                        let cardImage = $("<img>").attr("src", image).attr("style", "height: 200px; width: 200px; margin: 20% 5% 20% 5%;");
                        let cardImageLink = $("<a>").attr("href", officialURL).attr("target", "_blank");
                        cardImageLink.append(cardImage);
                        cardImageHolder.append(cardImageLink);

                        let cardInfo = $("<div>").attr("class", "card-stacked");
                        let cardContent = $("<div>").attr("class", "card-content");
                        let cardName = $("<a>").append($("<h4>").text(name)).attr("href", officialURL).attr("target", "_blank").attr("style", "text-decoration: none;");

                        let list = $("<ul>").attr("class", "collapsible");
                        let listItem = $("<li>");
                        let listItemDiv = $("<div>").attr("class", "collapsible-header").text("Description");
                        let listItemDiv2 = $("<div>").attr("class", "collapsible-body");
                        let listItemSpan = $("<span>").text(description).attr("style", "height:10em; display:block; overflow-y:scroll; transform:translateY(0%);");
                        listItemDiv2.append(listItemSpan);
                        listItem.append(listItemDiv).append(listItemDiv2);
                        list.append(listItem);

                        let cardAction = $("<div>").attr("class", "card-action");
                        let buyInfo = $("<div>").text("Price: $" + price).attr("style", "margin-right: 10px;");
                        let players = $("<div>").text("Players: " + minPlayers + "-" + maxPlayers).attr("style", "margin-right: 10px;");
                        let playtime = $("<div>").text("Play time: " + minPlayTime + "-" + maxPlayTime + "min").attr("style", "margin-right: 10px;");
                        let minAge = $("<div>").text("For ages " + age + "+").attr("style", "margin-right: 10px;");
                        let rating = $("<div>").text("Rating: " + userRating.toFixed(2));
                        let gameLink = $("<a>").attr("href", officialURL).attr("target", "_blank").text("Buy it here");
                        let downloadRules = $("<a>").attr("href", rules).attr("target", "_blank").text("See rules");
                        let addToLibrary = $("<button>").attr("class", "btn-floating waves-effect waves-light btn-large addToLibrary blue lighten-1 right").text("add");

                        cardContent.append(addToLibrary).append(cardName).append(list);
                        cardAction.append(buyInfo).append(players).append(playtime).append(minAge).append(rating).append(gameLink).append(downloadRules);
                        cardInfo.append(cardContent).append(cardAction);

                        card.append(cardImageHolder).append(cardInfo);

                        destination.append(card);
                    }
                } else if (search.game) {
                    let game = search.game;
                    console.log(search);
                    let image = game.images.medium
                    let name = game.name;
                    let minPlayers = game.min_players;
                    let maxPlayers = game.max_players;
                    let minPlayTime = game.min_playtime;
                    let maxPlayTime = game.max_playtime;
                    let price = game.price;
                    let description = game.description_preview;
                    let officialURL = game.official_url;
                    let age = game.min_age;
                    let rules = game.rules_url;
                    let userRating = game.average_user_rating;


                    let card = $("<div>").attr("class", "card horizontal");
                    let cardImageHolder = $("<div>").attr("class", "card-image");
                    let cardImage = $("<img>").attr("src", image).attr("style", "height: 200px; width: 200px; margin: 20% 5% 20% 5%;");
                    let cardImageLink = $("<a>").attr("href", officialURL).attr("target", "_blank");
                    cardImageLink.append(cardImage);
                    cardImageHolder.append(cardImageLink);

                    let cardInfo = $("<div>").attr("class", "card-stacked");
                    let cardContent = $("<div>").attr("class", "card-content");
                    let cardName = $("<a>").append($("<h4>").text(name)).attr("href", officialURL).attr("target", "_blank").attr("style", "text-decoration: none;");

                    let list = $("<ul>").attr("class", "collapsible");
                    let listItem = $("<li>");
                    let listItemDiv = $("<div>").attr("class", "collapsible-header").text("Description");
                    let listItemDiv2 = $("<div>").attr("class", "collapsible-body");
                    let listItemSpan = $("<span>").text(description).attr("style", "height:10em; display:block; overflow-y:scroll; transform:translateY(0%);");
                    listItemDiv2.append(listItemSpan);
                    listItem.append(listItemDiv).append(listItemDiv2);
                    list.append(listItem);

                    let cardAction = $("<div>").attr("class", "card-action");
                    let buyInfo = $("<div>").text("Price: $" + price).attr("style", "margin-right: 10px;");
                    let players = $("<div>").text("Players: " + minPlayers + "-" + maxPlayers).attr("style", "margin-right: 10px;");
                    let playtime = $("<div>").text("Play time: " + minPlayTime + "-" + maxPlayTime + "min").attr("style", "margin-right: 10px;");
                    let minAge = $("<div>").text("For ages " + age + "+").attr("style", "margin-right: 10px;");
                    let rating = $("<div>").text("Rating: " + userRating.toFixed(2));
                    let gameLink = $("<a>").attr("href", officialURL).attr("target", "_blank").text("Buy it here");
                    let downloadRules = $("<a>").attr("href", rules).attr("target", "_blank").text("See rules");
                    let addToLibrary = $("<button>").attr("class", "btn-floating waves-effect waves-light btn-large addToLibrary blue lighten-1 right").text("add");

                    cardContent.append(addToLibrary).append(cardName).append(list);
                    cardAction.append(buyInfo).append(players).append(playtime).append(minAge).append(rating).append(gameLink).append(downloadRules);
                    cardInfo.append(cardContent).append(cardAction);

                    card.append(cardImageHolder).append(cardInfo);

                    destination.empty();
                    destination.append(card);
                }

            });
        });



        $(document).on("click", ".fartbox", function () {
            let destination = $("#randomize");
            let randomQueryURL = "https://www.boardgameatlas.com/api/search?random=true&client_id=" + clientID;

            $.ajax({
                url: randomQueryURL,
                method: "GET"
            }).then(function (resp1) {
                console.log(resp1);

                let image = resp1.game.images.medium
                let name = resp1.game.name;
                let minPlayers = resp1.game.min_players;
                let maxPlayers = resp1.game.max_players;
                let minPlayTime = resp1.game.min_playtime;
                let maxPlayTime = resp1.game.max_playtime;
                let price = resp1.game.price;
                let description = resp1.game.description_preview;
                let officialURL = resp1.game.official_url;
                let age = resp1.game.min_age;
                let rules = resp1.game.rules_url;
                let userRating = resp1.game.average_user_rating;


                let card = $("<div>").attr("class", "card horizontal");
                let cardImageHolder = $("<div>").attr("class", "card-image");
                let cardImage = $("<img>").attr("src", image).attr("style", "height: 100px; width: 100px; margin: 20% 5% 20% 5%;");
                let cardImageLink = $("<a>").attr("href", officialURL).attr("target", "_blank");
                cardImageLink.append(cardImage);
                cardImageHolder.append(cardImageLink);

                let cardInfo = $("<div>").attr("class", "card-stacked");
                let cardContent = $("<div>").attr("class", "card-content");
                let cardName = $("<a>").append($("<h4>").text(name)).attr("href", officialURL).attr("target", "_blank").attr("style", "text-decoration: none;");

                let list = $("<ul>").attr("class", "collapsible");
                let listItem = $("<li>");
                let listItemDiv = $("<div>").attr("class", "collapsible-header").text("Description");
                let listItemDiv2 = $("<div>").attr("class", "collapsible-body");
                let listItemSpan = $("<span>").text(description).attr("style", "height:10em; display:block; overflow-y:scroll; transform:translateY(0%);");
                listItemDiv2.append(listItemSpan);
                listItem.append(listItemDiv).append(listItemDiv2);
                list.append(listItem);

                let cardAction = $("<div>").attr("class", "card-action");
                let buyInfo = $("<div>").text("Price: $" + price).attr("style", "margin-right: 10px;");
                let players = $("<div>").text("Players: " + minPlayers + "-" + maxPlayers).attr("style", "margin-right: 10px;");
                let playtime = $("<div>").text("Play time: " + minPlayTime + "-" + maxPlayTime + "min").attr("style", "margin-right: 10px;");
                let minAge = $("<div>").text("For ages " + age + "+").attr("style", "margin-right: 10px;");
                let rating = $("<div>").text("Rating: " + userRating.toFixed(2));
                let gameLink = $("<a>").attr("href", officialURL).attr("target", "_blank").text("Buy it here");
                let downloadRules = $("<a>").attr("href", rules).attr("target", "_blank").text("See rules");
                let addToLibrary = $("<button>").attr("class", "btn-floating waves-effect waves-light btn-large addToLibrary blue lighten-1 right").text("add");

                cardContent.append(addToLibrary).append(cardName).append(list);
                cardAction.append(buyInfo).append(players).append(playtime).append(minAge).append(rating).append(gameLink).append(downloadRules);
                cardInfo.append(cardContent).append(cardAction);

                card.append(cardImageHolder).append(cardInfo);

                destination.empty();
                destination.append(card);

            });
        });
    };

    export default API;