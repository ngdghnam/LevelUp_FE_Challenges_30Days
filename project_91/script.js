// Select elements
const toggleButton = document.querySelector(".bi-toggle-off");
const app = document.querySelector(".app");
const nextButton = document.querySelector(".next-btn");

// Add click event listener to the toggle button
toggleButton.parentElement.addEventListener("click", () => {
  const isDarkMode = toggleButton.classList.contains("bi-toggle-off");

  if (isDarkMode) {
    // Switch to dark mode
    toggleButton.classList.replace("bi-toggle-off", "bi-toggle-on");
    app.style.backgroundColor = "#333"; // Dark background
    app.style.color = "white"; // Text color white

    // Update all text elements inside the app
    const textElements = app.querySelectorAll("h1, p, .row");
    textElements.forEach((el) => {
      el.style.color = "white";
    });

    // Change next button styles
    nextButton.style.backgroundColor = "white";
    nextButton.style.color = "black";
  } else {
    // Switch back to light mode
    toggleButton.classList.replace("bi-toggle-on", "bi-toggle-off");
    app.style.backgroundColor = "white"; // Light background
    app.style.color = "black"; // Text color black

    // Update all text elements inside the app
    const textElements = app.querySelectorAll("h1, p, .row");
    textElements.forEach((el) => {
      el.style.color = "black";
    });

    // Reset next button styles
    nextButton.style.backgroundColor = "black";
    nextButton.style.color = "white";
  }
});
