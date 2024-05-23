const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const resetBoard = () => board.map(() => "");
  return { board, resetBoard };
})();

function Player(isFirst) {
  const mark = isFirst ? "X" : "O";
  return { mark };
}
