const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const resetBoard = () => board.map(() => "");
  return { board, resetBoard };
})();

function Player(isFirst) {
  const mark = isFirst ? "X" : "O";
  const play = (cell_index) => {
    if (Gameboard.board[cell_index] === "") {
      Gameboard.board[cell_index] = mark;
    }
  };
  return { mark, play };
}
