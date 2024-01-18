// Simple paint

// setupcanvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 400;
// global variables
let mouseIsPressed = false;
let mouseX, mouseY;
let size = 5;
let penColor = "black";

// mainprogramm loop
requestAnimationFrame(loop);
function loop() {
  // draw circle if mouse is pressed
  if (mouseIsPressed) {
    ctx.fillStyle = penColor;
    ctx.beginPath();
    ctx.arc(pmouseX, pmouseY, size, 0, 2 * Math.PI);

    ctx.fill();
  }
  requestAnimationFrame(loop);
}

//document event stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("keydown", keydownHandler);
function mousedownHandler() {
  mouseIsPressed = true;
}
function mouseupHandler() {
  mouseIsPressed = false;
}
function mousemoveHandler() {
  // save previous mouse x&y
  pmouseX = mouseX;
  pmouseY = mouseY;
  // update mousex and mouse y

  let cnvRect = cnv.getBoundingClientRect();

  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
function keydownHandler(event) {
  if (event.code == "Space") {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  } else if (event.code == "ArrowUp") {
    size++;
  } else if (event.code == "ArrowDown") {
    size--;
  }
}

// colour stufff

document.getElementById("redBtn").addEventListener("click", setRed);
document.getElementById("greenBtn").addEventListener("click", setGreen);
document.getElementById("blueBtn").addEventListener("click", setBlue);
document.getElementById("blackBtn").addEventListener("click", setBlack);
document.getElementById("whiteBtn").addEventListener("click", setWhite);
document.getElementById("colorPicker").addEventListener("change", changeColor);

function setRed() {
  penColor = "red";
}
function setGreen() {
  penColor = "green";
}
function setBlue() {
  penColor = "blue";
}
function setBlack() {
  penColor = "black";
}
function setWhite() {
  penColor = "white";
}
function changeColor() {
  penColor = document.getElementById("colorPicker").value;
}
document.getElementById("bigBtn").addEventListener("click", giveAlert);
document.getElementById("smallBtn").addEventListener("click", giveAlert2);
function giveAlert() {
  alert("click 🡡 to make brush size bigger ");
}
function giveAlert2() {
  alert("click 🡣 to make brush size smaller ");
}
