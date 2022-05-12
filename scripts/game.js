const board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;
let counter = 0;

const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == "") {
    board[position] = symbols[playerTime];

    counter++;
    
    gameOver = isWin();
    if (counter == 9 && gameOver == false){
      setTimeout(() => {
        alert("VELHA!")
        resetGame()
      }, 10);
    }
    if (!gameOver) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let itemsOfArray = winStates[i];
    let pos1 = itemsOfArray[0];
    let pos2 = itemsOfArray[1];
    let pos3 = itemsOfArray[2];

    if (
      board[pos1] == board[pos2] &&
      board[pos1] == board[pos3] &&
      board[pos1] != ""
    ) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  board.forEach((element, index) => {
    board[index] = "";
  });
  playerTime = 0;
  gameOver = false;
  board.forEach((element, index) => {
    render(index);
  });
}

function draw() {
  board.forEach((element, index) => {
    if (board[index] != "") {
      console.log("deu veia");
    }
  });
}
