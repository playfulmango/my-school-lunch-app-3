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
// VARIABLES:
// Connect to the three restaurant option buttons
const bkBtn = document.getElementById("bk-btn");
const pizzaBtn = document.getElementById("pizza-btn");
const bpsBtn = document.getElementById("bps-btn");

// Connect to the three individual menu screens
const bkMenuScreen = document.getElementById("bk-menu-screen");
const pizzaMenuScreen = document.getElementById("pizza-menu-screen");
const bpsMenuScreen = document.getElementById("bps-menu-screen");

// EVENT LISTENERS:
// Open Burger King Menu
bkBtn.addEventListener("click", function() {
  menuSelectScreen.classList.add("hidden");
  bkMenuScreen.classList.remove("hidden");
});

// Open Sun Pizza Menu
pizzaBtn.addEventListener("click", function() {
  menuSelectScreen.classList.add("hidden");
  pizzaMenuScreen.classList.remove("hidden");
});

// Open BPS School Lunch Menu
bpsBtn.addEventListener("click", function() {
  menuSelectScreen.classList.add("hidden");
  bpsMenuScreen.classList.remove("hidden");
});

// FUNCTION:
// Hides all individual menus and returns to Page 2 (Menu Selection)
function goBackToOptions() {
  bkMenuScreen.classList.add("hidden");
  pizzaMenuScreen.classList.add("hidden");
  bpsMenuScreen.classList.add("hidden");
  menuSelectScreen.classList.remove("hidden");
}