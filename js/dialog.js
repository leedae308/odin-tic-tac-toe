var dialog = (function () {
    var dialog = {
        init: function (game, resetCallBack) {
            this.game=game;
            this.resetCallBack=resetCallBack;
            this.cacheDOM();
            this.addEventHandler();
        },
        cacheDOM: function () {
            this.quitBtn = document.querySelector("#quit");
            this.nextRBtn = document.querySelector("#nextR");
            this.winner = document.querySelector(".winner #changeble");
            this.dialog = document.querySelector("dialog");
            this.turnIndicator = document.querySelector("#changeble");


        },
        addEventHandler: function(){
            this.quitBtn.addEventListener("click", this.quitGame.bind(this));
            this.nextRBtn.addEventListener("click", this.resumeGame.bind(this));
        },

        quitGame: function(){
            this.dialog.close();
            window.location.href = "html/index.html"; // Go back to the main page
            // alert("GAME OVER");
        },

        openDialog: function(winnerName){
            // alert(this.winner);
            this.winner.innerText=winnerName;
            this.dialog.showModal();
        },

        resumeGame: function(){
            this.dialog.close();
            if(this.resetCallBack){
                this.resetCallBack();
            }
            this.turnIndicator.innerText='X';
        }
    }
    dialog.init();
    return dialog;
})();