var GameBoard = (function () {
    return function createGameBoard() {
        var gameBoard = Array.from({ length: 3 }, () => new Array(3).fill(null));

        const setMarker = function (marker, [col, row]) {
            gameBoard[row][col] = marker;
        };
        const resetGameBoard = function () {
            gameBoard.forEach((element) => {
                element.fill(null);
            })
        }


        return {
            getGameBoard: () => gameBoard,
            setMarker,
            resetGameBoard,
        };
    }
})();