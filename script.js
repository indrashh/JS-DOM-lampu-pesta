let randomBtn = document.getElementById("randomBtn");
let redBtn = document.getElementById("redBtn");
let blueBtn = document.getElementById("blueBtn");
let greenBtn = document.getElementById("greenBtn");
let resetBtn = document.getElementById("resetBtn");

function randomHandler() {
  let body = document.querySelector("body");
  let colors = [
    "#c31818",
    "#0c6b43",
    "#0a445d",
    "#183B4E",
    "#FBE4D6",
    "#FBE4D6",
  ];
  let numbers = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[numbers];
}
function redHandler() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#c31818";
}
function blueHandler() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#0a445d";
}
function greenHandler() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#0c6b43";
}
function resetHandler() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "";
}

randomBtn.addEventListener("click", randomHandler);
redBtn.addEventListener("click", redHandler);
blueBtn.addEventListener("click", blueHandler);
greenBtn.addEventListener("click", greenHandler);
resetBtn.addEventListener("click", resetHandler);
