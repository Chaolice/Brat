let eatingInterval;
let spotCount = 0;
const MAX_SPOTS = 100;

const eat = function () {
    const screenOverlay = document.getElementById("tabOverlay");

    // get rat current pos
    let ratBodyBox = document.getElementById("ratBody");
    let currentLeft = parseInt(ratBodyBox.style.left);
    let currentTop = parseInt(ratBodyBox.style.top);

    // create div
    const spot = document.createElement("div");
    spot.setAttribute('id', 'spot_'.concat(spotCount++));
    
    // style div
    spot.style.position = 'absolute';
    spot.style.width = '20px';
    spot.style.height = '20px';
    spot.style.left = currentLeft + 'px';
    spot.style.top = currentTop + 'px';
    spot.style.backgroundColor = '#00FF00';
    
    // add div as child to screenOverlay
    screenOverlay.appendChild(spot)

    // only keep N divs
    while (screenOverlay.childElementCount > MAX_SPOTS) {
        screenOverlay.firstElementChild.remove();
    }
}

const startEating = function () {
    if (eatingInterval) clearInterval(eatingInterval);
    eatingInterval = setInterval(eat, 1000);
}

const stopEating = function () {
    clearInterval(eatingInterval);
}

