const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const resetBoard = () => board.map(() => "");
  const putMark = (index, mark) => {
    if (board[index] === "") {
      board[index] = mark;
    }
  };
  const checkWinner = (mark) => {
    if (
      (board[0] === mark && board[1] === mark && board[2] === mark) ||
      (board[3] === mark && board[4] === mark && board[5] === mark) ||
      (board[6] === mark && board[7] === mark && board[8] === mark) ||
      (board[0] === mark && board[4] === mark && board[8] === mark) ||
      (board[2] === mark && board[4] === mark && board[6] === mark)
    ) {
      return 1;
    }
    if (!board.includes("")) {
      return -1;
    }
    return 0;
  };
  return { resetBoard, putMark };
})();

function Player(isFirst) {
  const mark = isFirst ? "X" : "O";
  const play = (cell_index) => Gameboard.putMark(cell_index, mark);
  return { mark, play };
}
