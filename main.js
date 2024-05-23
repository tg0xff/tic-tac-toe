const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const resetBoard = () => board.map(() => "");
  const putMark = (index, mark) => {
    if (board[index] === "") {
      board[index] = mark;
    }
  };
  return { resetBoard, putMark };
})();

function Player(isFirst) {
  const mark = isFirst ? "X" : "O";
  const play = (cell_index) => Gameboard.putMark(cell_index, mark);
  return { mark, play };
}
