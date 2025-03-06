(function () {
    var displayModule = {
        init: function () {
            this.cacheDOM();
            this.attachEvents();
            this.game = PlayGame("player1", "player2");
            this.updateCurrentScoreBoard(this.game.getScore(), this.game.getPlayers());

        },

        cacheDOM: function () {
            this.redoBtn = document.querySelector(".redo");
            this.gameBoxes = document.querySelectorAll(".gameBox");
            this.gameContainer = document.querySelector(".game-container");
            this.turnIndicator = document.querySelector("#changeble");
            this.userName1 = document.querySelector(".player1");
            this.userName2 = document.querySelector(".player2");
        },
        attachEvents: function () {
            this.redoBtn.addEventListener("click", () => {
                this.gameBoxes.forEach((element) => {
                    element.innerHTML = "";
                    this.game.resetGame();
                });
            });
            this.redoBtn.addEventListener("dblclick", () => {
                this.gameBoxes.forEach((element) => {
                    this.game.resetScore();
                    this.updateUI();
                });
            });

            this.gameBoxes.forEach((element) => {
                element.addEventListener("click", (event) => {

                    let row = parseInt(event.target.getAttribute("row"));
                    let col = parseInt(event.target.getAttribute("col"));

                    this.game.makeMove(row, col);
                    this.updateGameBox(row, col);
                    this.updateUI();

                });
            })

        },

        updateGameBox: function (row, col) {
            let content = this.game.getGameBoard()[row][col];
            const currentBox = this.gameContainer.querySelector(`[row="${row}"][col="${col}"]`);
            const newLine = document.createElement("div");
            newLine.setAttribute("class", `marker ${content.toLowerCase()}`)
            newLine.innerHTML = content;
            if (currentBox.hasChildNodes()) {
                currentBox.removeChild(currentBox.childNodes[0]);
            }
            currentBox.appendChild(newLine);
        },

        updateCurrentPlayer: function (currentPlayer) {
            this.turnIndicator.innerText = (currentPlayer.getMarker() == 'X') ? 'O' : 'X';
        },

        updateCurrentScoreBoard: function (currentScore, players) {
            this.userName1.innerText = players[0];
            this.userName2.innerText = players[1];
            this.userName1.nextElementSibling.innerText = currentScore[0];
            this.userName2.nextElementSibling.innerText = currentScore[1];
        },

        updateUI: function () {
            this.updateCurrentScoreBoard(this.game.getScore(), this.game.getPlayers());
            this.updateCurrentPlayer(this.game.currentPlayer);

        }

    };

    displayModule.init();
})();