let counter = 0;

function clicko(e) {
  counter++;
  e.style.backgroundRepeat = "no-repeat";
  e.style.backgroundPosition = "center";
  e.style.transition = "0.4s"
  if (counter % 2 == 0) {
    e.style.backgroundImage = "url(../assets/letra-o.png)";
  } else {
    e.style.backgroundImage = "url(../assets/letra-x.png)";
  }
}
