var PlayGame = function (user1, user2) {
    const player1 = User(user1, 'X');
    const player2 = User(user2, 'O');
    const gameBoard = GameBoard();

    const checkWin = function (currentPlayer) {
        for (let i = 0; i < 3; i++) {
            if (gameBoard.getGameBoard()[i][0] == currentPlayer.getMarker() && gameBoard.getGameBoard()[i][1] == currentPlayer.getMarker() && gameBoard.getGameBoard()[i][2] == currentPlayer.getMarker())
                return true;
            if (gameBoard.getGameBoard()[0][i] == currentPlayer.getMarker() && gameBoard.getGameBoard()[1][i] == currentPlayer.getMarker() && gameBoard.getGameBoard()[2][i] == currentPlayer.getMarker())
                return true;
        }
        if (gameBoard.getGameBoard()[0][0] == currentPlayer.getMarker() && gameBoard.getGameBoard()[1][1] == currentPlayer.getMarker() && gameBoard.getGameBoard()[2][2] == currentPlayer.getMarker())
            return true;
        if (gameBoard.getGameBoard()[0][2] == currentPlayer.getMarker() && gameBoard.getGameBoard()[1][1] == currentPlayer.getMarker() && gameBoard.getGameBoard()[2][0] == currentPlayer.getMarker())
            return true;
        return false;
    }

    const getValidLocation = function () {
        const board = gameBoard.getGameBoard();

        while (true) {
            let location = prompt("col, row").split(",");
            let row = parseInt(location[0]);
            let col = parseInt(location[1]);

            // Check boundary first
            if ((row >= 0 && row <= 2) && (col >= 0 && col <= 2)) {
                if (board[row][col] == null) {
                    console.table(board);
                    return [row, col];
                }
            }
            console.log("again");
        }
    }
    
    const playRound = function () {
        for (let i = 0; i < 9; i++) {
            let currentPlayer;
            if (i % 2 == 0) { currentPlayer = player1; }
            else { currentPlayer = player2; }

            gameBoard.setMarker(currentPlayer.getMarker(), getValidLocation());
            console.table(gameBoard.getGameBoard());
            if (checkWin(currentPlayer)) {
                console.log(`${currentPlayer.getName()} WINS!`)
                currentPlayer.win();
                gameBoard.resetGameBoard();
                break;
            }
            if (i == 8 && !checkWin(currentPlayer)) {
                console.log("DRAW!")
                gameBoard.resetGameBoard();
            }
        }
    }

    return {
        getPlayers: () => [player1.getName(), player2.getName()],
        getGameBoard: () => gameBoard.getGameBoard(),
        getScore: () => `${player1.getName()} ${player1.getScore()} : ${player2.getName()} ${player2.getScore()}`,
        playRound
    }
};