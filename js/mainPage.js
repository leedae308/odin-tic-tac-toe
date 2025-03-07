(function () {
    var mainPageModule = {
        init: function () {
            this.cacheDOM();
            this.addEventHandler();

        },

        cacheDOM: function () {
            this.startBtn = document.querySelector(".createGame");
            this.input = document.querySelectorAll("input");
        },

        addEventHandler: function () {
            this.startBtn.addEventListener("click", () => {
                this.storePlayers(this.input[0].value, this.input[1].value);
                this.openGame();
            });
            this.input.forEach((element) => {
                element.addEventListener("focus", (event) => {
                    event.target.removeAttribute("value");
                })
            })
        },

        openGame: function () {
            window.location.href = "../html/index.html";
        },

        storePlayers: function (player1, player2) {
            localStorage.setItem("player1", player1);
            localStorage.setItem("player2", player2);
        }
    }

    mainPageModule.init();
})();