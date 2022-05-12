document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".sqr");
  squares.forEach((e) => {
    e.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let position = event.target.id; // id of the target
  if (handleMove(position)) {
    setTimeout(() => {
      alert(`O jogador ${playerTime + 1} venceu!`);
    }, 20);
  }
  render(position);
}

function render(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];

  if (square != ""); {
    square.innerHTML = `<div class="${symbol}"></div>`;
  }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", resetGame)
