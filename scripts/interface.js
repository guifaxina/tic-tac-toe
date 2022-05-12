document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".sqr");
  squares.forEach((e) => {
    e.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  handleMove(event.target.id);
  render();
}

function render() {
  const squares = document.querySelectorAll(".sqr");
  squares.forEach((e) => {
    let position = e.id;
    let symbol = board[position];

    if (e != "") {
      e.innerHTML = `<div class="${symbol}"></div>`;
    }
  });
}
