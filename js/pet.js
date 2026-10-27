canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
var spriteObject = {
  // this is a javascript object variable
  x: 0,
  y: 0,
  width: 64,
  height: 64,
};
var moo = Object.create(spriteObject);
moo.x = 100;
moo.y = 100;
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "Rat_01.png";
var Xspeed = 2;
var Yspeed = 2;
var text = "Hello MOO";
function loadHandler() {
  update();
}
function update() {
  window.requestAnimationFrame(update, canvas);
  moo.x += Xspeed;
  moo.y += Yspeed;
  if (moo.width + moo.x > 550) {
    Xspeed = -2;
    text = "Going Left";
  } else if (moo.x < 1) {
    Xspeed = 2;
    text = "Going Right";
  } else if (moo.height + moo.y > 400) {
    Yspeed = -2;
    text = "Going Up";
  } else if (moo.y < 1) {
    Yspeed = 2;
    text = "Going Down";
  }
  render();
}
function render() {
  drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
  drawingSurface.drawImage(
    image,
    Math.floor(moo.x),
    Math.floor(moo.y),
    moo.height,
    moo.width,
  );
  drawingSurface.font = "bold 20px Arial";
  drawingSurface.fillText(text, 10, 30, 200);
  console.log(drawingSurface.measureText(text).width);
}
