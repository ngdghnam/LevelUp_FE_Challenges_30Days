// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and the elements to toggle
  const showMoreBtn = document.querySelector(".show-more-btn");
  const controllersContainer = document.querySelector(".controller-container");
  const lines = document.querySelectorAll(".line");
  const signOutContainer = document.querySelector(".sign-out-container");

  // Track visibility state
  let isVisible = true;

  // Add click event listener to the button
  showMoreBtn.addEventListener("click", function () {
    // Toggle visibility state
    isVisible = !isVisible;

    // Toggle visibility of elements
    const displayValue = isVisible ? "block" : "none";

    // Hide/show elements
    controllersContainer.style.display = displayValue;
    signOutContainer.style.display = displayValue;

    // Toggle lines separately as they might be <hr> elements
    lines.forEach((line) => {
      line.style.display = displayValue;
    });

    // Optionally rotate the button icon to indicate state

    this.style.transition = "transform 0.3s ease";
  });
});
