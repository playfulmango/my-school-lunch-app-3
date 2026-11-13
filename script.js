// VARIABLES:
// Connect JavaScript to the HTML elements using their IDs
const orderBtn = document.getElementById("order-btn");
const homeScreen = document.getElementById("home-screen");
const menuSelectScreen = document.getElementById("menu-select-screen");

// EVENT LISTENER:
// Runs when the user clicks the "ORDER HERE" button
orderBtn.addEventListener("click", function() {
  // Hides Page 1 (Home Screen)
  homeScreen.classList.add("hidden");

  // Shows Page 2 (Menu Selection Screen)
  menuSelectScreen.classList.remove("hidden");
});