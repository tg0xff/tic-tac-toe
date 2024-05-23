const Gameboard = (function () {
  let gameboard = [];
  return { gameboard };
})()

function Player(x_mark) {
  const mark = x_mark ? "X" : "O";
  return { mark };
}
