(function () {
    var dialog = {
        init: function (game) {
            this.game = game;
            this.cacheDOM();
            this.addEventHandler();

        },
        cacheDOM: function () {
            this.quitBtn = document.querySelector("#quit");
            this.nextRBtn = document.querySelector("#nextR");
            this.winner = document.querySelector(".winner#changeble");
            this.dialog = document.querySelector(".dialog");

        },
        addEventHandler: function(){
            this.quitBtn.addEventListener("click", this.quitGame.bind(this));
        },

        quitGame: function(){
            this.dialog.close();
            alert("GAME OVER");
            this.game.resetGame();
        }


    }

    dialog.init();
})();