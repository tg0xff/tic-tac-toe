function Game() {
  const firstPlayer = Math.random() <= 0.5;
  const cpu = Player(!firstPlayer, "CPU");
  let player;
  const start = (name) => {
    Gameboard.resetBoard();
    player = Player(firstPlayer, name);
  };
  const play = (cell_index) => Gameboard.putMark(cell_index, player.mark);
  return { start, play };
}

function Player(isFirst, name) {
  const mark = isFirst ? "X" : "O";
  return { mark, name };
}

const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const resetBoard = () => board.map(() => "");
  const putMark = (index, mark) => {
    if (board[index] === "") {
      board[index] = mark;
    }
  };
  const checkWinner = (mark) => {
    // Current player won.
    if (
      (board[0] === mark && board[1] === mark && board[2] === mark) ||
      (board[3] === mark && board[4] === mark && board[5] === mark) ||
      (board[6] === mark && board[7] === mark && board[8] === mark) ||
      (board[0] === mark && board[4] === mark && board[8] === mark) ||
      (board[2] === mark && board[4] === mark && board[6] === mark)
    ) {
      return 1;
    }
    // Draw.
    if (!board.includes("")) {
      return -1;
    }
    // There's no winner yet.
    return 0;
  };
  return { resetBoard, putMark };
})();
