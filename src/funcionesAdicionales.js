export const getWinner = (board) => {
    switch (true) {
        // Horizontales iguales
        case board[0] === board[1] && board[1] === board[2] && board[0] !== "":
            return board[0];
        case board[3] === board[4] && board[4] === board[5] && board[3] !== "":
            return board[3];
        case board[6] === board[7] && board[7] === board[8] && board[6] !== "":
            return board[6];

        // Verticales iguales
        case board[0] === board[3] && board[3] === board[6] && board[0] !== "":
            return board[0];
        case board[1] === board[4] && board[4] === board[7] && board[1] !== "":
            return board[1];
        case board[2] === board[5] && board[5] === board[8] && board[8] !== "":
            return board[2];

        // Diagonales iguales

        case board[0] === board[4] && board[4] === board[8] && board[0] !== "":
            return board[0];
        case board[2] === board[4] && board[4] === board[6] && board[2] !== "":
            return board[2];

        default:
            return "";

    }
};



export const checkIfTie = (board, gameOn) => {
    // Si el juego continua pero no hay espacios libres, quiere decir empate
    if (gameOn === true && !board.includes("")) {
        return true;
    }
};