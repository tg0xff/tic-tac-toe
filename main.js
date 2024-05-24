function Game() {
  let firstPlayer;
  let player;
  let cpu;
  let gameActive = false;
  const start = (name) => {
    gameActive = true;
    Gameboard.resetBoard();
    firstPlayer = Math.random() <= 0.5;
    player = Player(firstPlayer, name);
    cpu = Player(!firstPlayer, "CPU");
  };
  const play = (cell_index) => {
    if (gameActive) {
      Gameboard.putMark(cell_index, player.mark);
    }
  };
  return { start, play };
}

function Player(isFirst, name) {
  const mark = isFirst ? "X" : "O";
  return { mark, name };
}

const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const printBoard = () => {
    let line = "";
    for (let i = 0; i < board.length; i++) {
      if (i === 2 || i === 5 || i === 8) {
        line += board[i];
        console.log(line);
        line = "";
      } else {
        line += board[i] + "|";
      }
    }
  };
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
