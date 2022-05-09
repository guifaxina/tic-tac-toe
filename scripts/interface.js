document.addEvenetListener("DOMContentLoad", () => {
    
    const squares = document.querySelectorAll(".sqr");
    squares.forEach(square => {
        square.addEventListener("click", handleClick);
    })
});

function handleClick()