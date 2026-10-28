//Add rat movement
let interval;
let xDirection = 2;
let yDirection = 3;
let ratSpeed = 2;

function startMoving(speed) {
  stopEating();
  if (interval) clearInterval(interval);

  interval = setInterval(function () {
    let ratBodyBox = document.getElementById("ratBody");
    let container = document.getElementById("tabOverlay");
    ratBodyBox.style.backgroundImage =
      "url(https://i.postimg.cc/s2QSCf7C/Untitled-Artwork-6.gif)";

    // let ratSpeedRandom = Math.floor(Math.random() * 10);

    let currentLeft = parseInt(ratBodyBox.style.left) || 1;
    let currentTop = parseInt(ratBodyBox.style.top) || 1;

    // Bounce off walls
    if (
      currentLeft >= container.offsetWidth - ratBodyBox.offsetWidth ||
      currentLeft <= 0
    ) {
      xDirection *= -1;
      if (xDirection < 0) {
        ratBodyBox.style.transform = "scale(1,1)";
      } else {
        ratBodyBox.style.transform = "scale(-1,1)";
      }
    }
    if (
      currentTop >= container.offsetHeight - ratBodyBox.offsetHeight ||
      currentTop <= 0
    ) {
      yDirection *= -1;
    }

    ratBodyBox.style.left = currentLeft + speed * xDirection + "px";
    ratBodyBox.style.top = currentTop + speed * yDirection + "px";
  }, 20);
  // console.log(ratSpeedRandom);
}
// startMoving(ratSpeed);

function stopMoving() {
  let ratBodyBox = document.getElementById("ratBody");
  ratBodyBox.style.backgroundImage =
    "url(https://i.postimg.cc/fk4xGRhH/Rat.gif)";
  startEating();
  clearInterval(interval);
}

// function idleRat() {}

// function wanderingRat() {
//   let ratDirection = Math.floor(Math.random() * 2) + 1000;
//   ratSpeed = Math.floor(Math.random() * 4);
//   let timeBetweenPause = 0;

//   // startMoving();
//   // console.log(ratDirection);
//   // console.log("timeBetweenPause", timeBetweenPause);
//   // (startMoving(ratSpeed){

//   // timeBetweenPause++;
//   // if (timeBetweenPause > 2000) {
//   //   timeBetweenPause = 0;
//   //   stopMoving();

//   // }, 1000);
// }

//Rat walks somewhere, stops for a bit, resumes walking.

let stopWalkingIntMin = 2;
let stopWalkingIntMax = 5;

function getRandomStoppingInterval() {
  numberRange = stopWalkingIntMax - stopWalkingIntMin + 1;
  randomRange = Math.random() * numberRange;
  randomInt = Math.floor(randomRange);
  stopWalkingInt = randomInt + stopWalkingIntMin;
  return stopWalkingInt;
}

const behaviourIntMin = 2;
const behaviourIntMax = 4;

function getRandomBehaviourInterval() {
  let intervalSeconds =
    Math.random() * (behaviourIntMax - behaviourIntMin) + behaviourIntMin;
  return intervalSeconds * 1000;
}

let intervalUWU = 3000;
let count = 1;
let stopWalkingInterval = getRandomStoppingInterval();

//Here, rat walks and stop at random intervals.
function walkingCycle() {
  if (count < stopWalkingInterval) {
    count++;
    stopMoving();
  } else {
    count = 1;
    stopWalkingInterval = getRandomStoppingInterval();
    startMoving(ratSpeed);
  }
  let behaviourInterval = getRandomBehaviourInterval();

  setTimeout(walkingCycle, behaviourInterval);
}
walkingCycle();
// setInterval(walkingCycle, behaviourInterval);

// wanderingRat();
// function ratMoving() {
//   var interval = setInterval(function () {
//     var div = document.getElementById("ratBody");
//     div.style.top = div.offsetTop + 1 + "px";
//     div.style.left = div.offsetLeft + 1 + "px";
//   }, 50);
// }
// ratMoving();

// function ratFollowMouse() {}
