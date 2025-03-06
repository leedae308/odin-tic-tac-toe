var PlayGame = function (user1, user2) {
    const player1 = User(user1, 'X');
    const player2 = User(user2, 'O');
    const gameBoard = GameBoard();
    let playCount = 0;

    const checkWin = function (currentPlayer) {
        for (let i = 0; i < 3; i++) {
            if (gameBoard.getGameBoard()[i][0] == currentPlayer.getMarker() && gameBoard.getGameBoard()[i][1] == currentPlayer.getMarker() && gameBoard.getGameBoard()[i][2] == currentPlayer.getMarker()) {
                return true;
            }
            if (gameBoard.getGameBoard()[0][i] == currentPlayer.getMarker() && gameBoard.getGameBoard()[1][i] == currentPlayer.getMarker() && gameBoard.getGameBoard()[2][i] == currentPlayer.getMarker()) {
                return true;
            }
        }
        if (gameBoard.getGameBoard()[0][0] == currentPlayer.getMarker() && gameBoard.getGameBoard()[1][1] == currentPlayer.getMarker() && gameBoard.getGameBoard()[2][2] == currentPlayer.getMarker()) {
            return true;
        }
        if (gameBoard.getGameBoard()[0][2] == currentPlayer.getMarker() && gameBoard.getGameBoard()[1][1] == currentPlayer.getMarker() && gameBoard.getGameBoard()[2][0] == currentPlayer.getMarker()) {
            return true;
        } return false;
    }

    const getValidLocation = function (row, col) { //return false if invalid, else, valid location.
        const board = gameBoard.getGameBoard();
        if (board[row][col] == null) {
            return [row, col];
        }
        else {
            alert("already taken, pick another place");
            return false;
        }
    }

    const resetGame = function () {
        playCount = 0;
        gameBoard.resetGameBoard();
        currentPlayer=player1;
    }

    //THIS ONLY WORKS FOR THE JS ITSELF.

    // const playRound = function () { 
    //     for (let i = 0; i < 9; i++) {
    //         let currentPlayer;
    //         if (i % 2 == 0) { currentPlayer = player1; }
    //         else { currentPlayer = player2; }

    //         gameBoard.setMarker(currentPlayer.getMarker(), getValidLocation());
    //         console.table(gameBoard.getGameBoard());
    //         if (checkWin(currentPlayer)) {
    //             console.log(`${currentPlayer.getName()} WINS!`)
    //             currentPlayer.win();
    //             gameBoard.resetGameBoard();
    //             break;
    //         }
    //         if (i == 8 && !checkWin(currentPlayer)) {
    //             console.log("DRAW!")
    //             gameBoard.resetGameBoard();
    //         }
    //     }
    // }

    const makeMove = function (row, col) {
        let currentPlayer;
        currentPlayer = (playCount % 2 == 0) ? player1 : player2;
        if (getValidLocation(row, col) !== false) {
            gameBoard.setMarker(currentPlayer.getMarker(), getValidLocation(row, col));
            console.table(gameBoard.getGameBoard());
            playCount++;
        }

        if (checkWin(currentPlayer)) {
            console.log(`${currentPlayer.getName()} WINS!`)
            currentPlayer.win();
            // resetGame();
        }
        if (playCount == 9 && !checkWin(currentPlayer)) {
            console.log("DRAW!")
            // resetGame();
        }
        this.currentPlayer = currentPlayer;
    }

    return {
        getPlayers: () => [player1.getName(), player2.getName()],
        getGameBoard: () => gameBoard.getGameBoard(),
        getScore: () => [player1.getScore(), player2.getScore()],
        resetScore: () => {player1.resetScore(), player2.resetScore()},
        makeMove,
        resetGame,
        getMarker: () => [currentPlayer.getMarker()],
        getCurrentPlayer: ()=> currentPlayer
    }
};