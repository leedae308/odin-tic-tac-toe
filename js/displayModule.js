(function () {
    var displayModule = {
        init: function(){
            this.cacheDOM();
            this.attachEvents();
            this.game=PlayGame("player1", "player2");
        },

        cacheDOM: function(){
            this.redoBtn = document.querySelector(".redo");
            this.gameBoxes = document.querySelectorAll(".gameBox");


        },
        attachEvents: function(){
            this.redoBtn.addEventListener("click", ()=>{
                this.gameBoxes.forEach((element)=>{
                    element.innerHTML = "";
                    this.game.resetGame
                    // this.game.playRound();
                });
            });

            this.gameBoxes.forEach((element)=>{
                element.addEventListener("click", (event)=>{
                    // alert([event.target.getAttribute("row"), event.target.getAttribute("col")]);
                    this.game.makeMove(event.target.getAttribute("row"), event.target.getAttribute("col"));
                })
            })

        },



    };

    displayModule.init();
})();