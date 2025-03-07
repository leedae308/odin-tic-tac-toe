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
            this.startBtn.addEventListener("click", this.openGame.bind(this));
            this.input.forEach((element)=>{
                element.addEventListener("focus", (event)=>{
                    event.target.removeAttribute("value");
                })
            })
        },

        openGame: function () {
            window.location.href = "../html/index.html";
        }
    }

    mainPageModule.init();
})();