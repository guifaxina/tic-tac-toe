document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".sqr");

  squares.forEach((e) => {
    e.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  handleMove(position);
  render();
}

function render() {
  let squares = document.querySelectorAll(".sqr");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}
