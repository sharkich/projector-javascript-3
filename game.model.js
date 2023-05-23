const PLAYERS = {
    PLAYER_1: 1,
    PLAYER_2: 2,
};

class GameModel {
    isLastPlayer1 = false;

    isGameFinished = false;

    // null - empty, true - player1, false - player2
    grid = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    winner = null;

    isSquareEmpty(col, row) {
        return !this.grid[col][row];
    }

    generateButtonSymbol() {
        this.isLastPlayer1 = !this.isLastPlayer1;
        return this.isLastPlayer1 ? PLAYERS.PLAYER_2 : PLAYERS.PLAYER_1;
    }

    play(col, row) {
        if (this.isGameFinished || !this.isSquareEmpty(col, row)) {
            return;
        }
        // todo: gameModel
    }
}
