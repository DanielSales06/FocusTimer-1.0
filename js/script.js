const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const set = document.querySelector(".set");

play.onclick = handleClick;
pause.onclick = handleClick;

function handleClick() {
  play.classList.toggle("hide")
  pause.classList.toggle("hide")
}