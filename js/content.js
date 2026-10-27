// var newiframe = document.createElement("iframe");
// newiframe.setAttribute("src", chrome.runtime.getURL("html/pet.html"));
// newiframe.style.width = "100%";
// newiframe.style.top = "0";
// newiframe.style.left = "0";
// newiframe.style.right = "0";
// newiframe.style.position = "absolute";
// newiframe.style.zIndex = "500";
// newiframe.style.height = "100vh";
// newiframe.style.background = "transparent";
// document.body.appendChild(newiframe);

const init = function () {
  const screenOverlay = document.createElement("div");
  screenOverlay.className = "tabOverlay";
  screenOverlay.setAttribute("id", "tabOverlay");

  const ratBody = document.createElement("div");
  ratBody.className = "ratBody";
  ratBody.setAttribute("id", "ratBody");
  document.body.appendChild(ratBody);

  document.body.appendChild(screenOverlay);
};
//Runs on pageload
init();

let overlay = document.getElementById("tabOverlay");
let rat = document.getElementById("ratBody");

// // Turn on the overlay
// function on(opacity) {
//   overlay.style.display = "block";
//   rat.style.display = "block";
//   overlay.style.opacity = opacity;
// }

// // Turn off the overlay
// function off() {
//   overlay.style.display = "none";
// }

// // Listen to messages sent from the popup
// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message) {
//   // To know the current overlay values to render when opening the pop-up.
//   if (message.title === "send-val") {
//     chrome.runtime.sendMessage({
//       value: overlay.style.opacity,
//       displayStyle: overlay.style.display,
//     });
//   }

//   // Check the checkbox state.
//   else {
//     if (message.toggle) {
//       //To change opacity with slider value. Using (1 - value) for UX of lesser value being darker shade.
//       on(1 - message.value);
//     } else if (!message.toggle) {
//       off();
//     }
//   }
// }
