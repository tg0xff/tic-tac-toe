const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const resetBoard = () => board.map((cell) => (cell = ""));
  return { board, resetBoard };
})();

function Player(x_mark) {
  const mark = x_mark ? "X" : "O";
  return { mark };
}
