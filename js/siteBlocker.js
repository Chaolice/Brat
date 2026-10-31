function saveDistractingSite() {
  console.log("taburl", tab.url);

  (async () => {
    // see the note below on how to choose currentWindow or lastFocusedWindow
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    console.log(tab.url);
    // ..........
  })();
}

function delistDistractingSite() {}
// browser.contentScripts.register({
//   matches: ["https://your-dynamic-domain.example.com/*"],
//   js: [{ file: "content.js" }],
// });
