// Landing Page
// Event Listener on Ham icon
document.getElementById("ham-icon").addEventListener("click", hamIconClicked);

function hamIconClicked() {
  // Get current display setting
  let displaySetting = document.getElementById("chat-div").style.display;
  // test currecnt display setting
  if (displaySetting === "none") {
    document.getElementById("chat-div").style.display = "block";
  } else {
    document.getElementById("chat-div").style.display = "none";
  }
}

