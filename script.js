// VARIABLES:
// Connect JavaScript to Page 1 and Page 2 elements
const orderBtn = document.getElementById("order-btn");
const homeScreen = document.getElementById("home-screen");
const menuSelectScreen = document.getElementById("menu-select-screen");

// Connect to the three restaurant option buttons
const bkBtn = document.getElementById("bk-btn");
const pizzaBtn = document.getElementById("pizza-btn");
const bpsBtn = document.getElementById("bps-btn");

// Connect to the three individual menu screens
const bkMenuScreen = document.getElementById("bk-menu-screen");
const pizzaMenuScreen = document.getElementById("pizza-menu-screen");
const bpsMenuScreen = document.getElementById("bps-menu-screen");

// Connect to the teacher restriction checkboxes and warning text
const blockBkCheckbox = document.getElementById("block-bk");
const blockPizzaCheckbox = document.getElementById("block-pizza");
const blockBpsCheckbox = document.getElementById("block-bps");
const restrictionMsg = document.getElementById("restriction-msg");

// EVENT LISTENERS:
// Runs when the user clicks the "ORDER HERE" button
orderBtn.addEventListener("click", function() {
  homeScreen.classList.add("hidden");
  menuSelectScreen.classList.remove("hidden");
});

// Update card appearance when teacher checks/unchecks a box
blockBkCheckbox.addEventListener("change", function() {
  bkBtn.classList.toggle("disabled-card", blockBkCheckbox.checked);
  restrictionMsg.textContent = "";
});

blockPizzaCheckbox.addEventListener("change", function() {
  pizzaBtn.classList.toggle("disabled-card", blockPizzaCheckbox.checked);
  restrictionMsg.textContent = "";
});

blockBpsCheckbox.addEventListener("change", function() {
  bpsBtn.classList.toggle("disabled-card", blockBpsCheckbox.checked);
  restrictionMsg.textContent = "";
});

// Open Burger King Menu only if NOT blocked
bkBtn.addEventListener("click", function() {
  if (blockBkCheckbox.checked) {
    restrictionMsg.textContent = "⛔ Burger King ordering is currently blocked by your teacher.";
  } else {
    restrictionMsg.textContent = "";
    menuSelectScreen.classList.add("hidden");
    bkMenuScreen.classList.remove("hidden");
  }
});

// Open Sun Pizza Menu only if NOT blocked
pizzaBtn.addEventListener("click", function() {
  if (blockPizzaCheckbox.checked) {
    restrictionMsg.textContent = "⛔ Sun Pizza ordering is currently blocked by your teacher.";
  } else {
    restrictionMsg.textContent = "";
    menuSelectScreen.classList.add("hidden");
    pizzaMenuScreen.classList.remove("hidden");
  }
});

// Open BPS School Lunch Menu only if NOT blocked
bpsBtn.addEventListener("click", function() {
  if (blockBpsCheckbox.checked) {
    restrictionMsg.textContent = "⛔ BPS School Lunch ordering is currently blocked by your teacher.";
  } else {
    restrictionMsg.textContent = "";
    menuSelectScreen.classList.add("hidden");
    bpsMenuScreen.classList.remove("hidden");
  }
});

// FUNCTION:
// Hides all individual menus and returns to Page 2 (Menu Selection)
function goBackToOptions() {
  bkMenuScreen.classList.add("hidden");
  pizzaMenuScreen.classList.add("hidden");
  bpsMenuScreen.classList.add("hidden");
  menuSelectScreen.classList.remove("hidden");
}