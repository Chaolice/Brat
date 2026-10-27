//Add rat movement
let interval;
let xDirection = 12;
let yDirection = 6;

function startMoving() {
  if (interval) clearInterval(interval);

  interval = setInterval(function () {
    let ratBodyBox = document.getElementById("ratBody");
    let container = document.getElementById("tabOverlay");

    let currentLeft = parseInt(ratBodyBox.style.left) || 5;
    let currentTop = parseInt(ratBodyBox.style.top) || 5;
    // let ratDirection = ratBodyBox.style.transform;

    // Bounce off walls
    if (
      currentLeft >= container.offsetWidth - ratBodyBox.offsetWidth ||
      currentLeft <= 0
    ) {
      xDirection *= -1;
      ratBodyBox.style.transform = "scale(1,1)";
    }
    if (
      currentTop >= container.offsetHeight - ratBodyBox.offsetHeight ||
      currentTop <= 0
    ) {
      yDirection *= -1;
    }

    ratBodyBox.style.left = currentLeft + 2 * xDirection + "px";
    ratBodyBox.style.top = currentTop + 2 * yDirection + "px";
  }, 20);
}

function stopMoving() {
  clearInterval(interval);
}
startMoving();
// function ratMoving() {
//   var interval = setInterval(function () {
//     var div = document.getElementById("ratBody");
//     div.style.top = div.offsetTop + 1 + "px";
//     div.style.left = div.offsetLeft + 1 + "px";
//   }, 50);
// }
// ratMoving();

// function ratFollowMouse() {}
