// JavaScript for handling navigation interactions

// Function to show the dropdown menu
function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.display = "block"; // Show the dropdown menu
}

// Function to hide the dropdown menu
function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.display = "none"; // Hide the dropdown menu
}

// Event listener for responsive menu toggle
document.addEventListener("DOMContentLoaded", () => {
  // Handles opening of the menu
  const hamburgIcon = document.querySelector(".hamburg");
  const cancelIcon = document.querySelector(".cancel");

  // Show dropdown menu when hamburger is clicked
  hamburgIcon.addEventListener("click", () => {
    document.querySelector(".dropdown").style.display = "block";
  });

  // Hide dropdown menu when cancel icon is clicked
  cancelIcon.addEventListener("click", () => {
    document.querySelector(".dropdown").style.display = "none";
  });
});
