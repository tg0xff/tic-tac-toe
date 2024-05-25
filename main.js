const Game = (function () {
  let firstPlayer;
  let player;
  let cpu;
  let gameActive = false;
  const start = (name) => {
    if (name === undefined) {
      console.error("Enter a valid player name.");
      return;
    }
    gameActive = true;
    Gameboard.resetBoard();
    firstPlayer = Math.random() <= 0.5;
    player = Player(firstPlayer, name);
    cpu = Player(!firstPlayer, "CPU");
    console.log("A new game has been started.");
    if (!firstPlayer) {
      cpuPlay();
    }
  };
  const play = (cell_index) => {
    if (!gameActive) {
      console.error("Start a new game to play.");
      return;
    }
    if (!Gameboard.checkCell(cell_index)) {
      console.error("Pick a valid cell index.");
      return;
    }
    Gameboard.putMark(cell_index, player.mark);
    Gameboard.printBoard(player.name);
    let gameResult = Gameboard.checkWinner(player.mark);
    checkResults(true, player.name, gameResult);
  };
  const cpuPlay = () => {
    let choice;
    do {
      choice = Math.round(8 * Math.random());
    } while (!Gameboard.checkCell(choice));
    Gameboard.putMark(choice, cpu.mark);
    Gameboard.printBoard(cpu.name);
    let gameResult = Gameboard.checkWinner(cpu.mark);
    checkResults(false, cpu.name, gameResult);
  };
  const checkResults = (human, name, result) => {
    switch (result) {
      case 0:
        if (human) {
          cpuPlay();
        }
        break;
      case 1:
        console.log(`${name} wins!`);
        gameActive = false;
        break;
      case -1:
        console.log("It's a draw!");
        gameActive = false;
        break;
    }
  };
  return { start, play };
})();

function Player(isFirst, name) {
  const mark = isFirst ? "X" : "O";
  return { mark, name };
}

const Gameboard = (function () {
  let board = ["", "", "", "", "", "", "", "", ""];
  const printBoard = (name) => {
    console.log(`${name}'s move:`)
    let line = "";
    for (let i = 0; i < board.length; i++) {
      let cell = board[i] ? board[i] : " ";
      if (i === 2 || i === 5 || i === 8) {
        line += cell;
        console.log(line);
        line = "";
      } else {
        line += cell + "|";
      }
    }
  };
  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
  };
  const checkCell = (index) => board[index] === "";
  const putMark = (index, mark) => (board[index] = mark);
  const checkContiguousCells = (mark, ...cells) => {
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (board[cell] !== mark) {
        return false;
      }
    }
    return true;
  };
  const checkWinner = (mark) => {
    // Current player won.
    if (
      // Top row.
      checkContiguousCells(mark, 0, 1, 2) ||
      // Middle row.
      checkContiguousCells(mark, 3, 4, 5) ||
      // Bottom row.
      checkContiguousCells(mark, 6, 7, 8) ||
      // First column.
      checkContiguousCells(mark, 0, 3, 6) ||
      // Second column.
      checkContiguousCells(mark, 1, 4, 7) ||
      // Third column.
      checkContiguousCells(mark, 2, 5, 8) ||
      // '\' diagonal.
      checkContiguousCells(mark, 0, 4, 8) ||
      // '/' diagonal.
      checkContiguousCells(mark, 2, 4, 6)
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
  return { resetBoard, putMark, checkCell, printBoard, checkWinner };
})();
