document.addEventListener("DOMContentLoaded", function () {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // remove active class from old tab
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // add active to selected tab
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Character counter
  const bioTextarea = document.getElementById("bio");
  const charCount = document.querySelector(".char-count .count");
  const maxChars = 200;

  bioTextarea.addEventListener("input", function () {
    const currentLength = this.value.length;
    const remaining = maxChars - currentLength;
    charCount.textContent = remaining;
  });

  // Dark Mode Toggle (Optional)
  const container = document.querySelector(".container");

  // Example dark mode toggle
  function darkModeToggle(e) {
    container.classList.toggle("dark-mode");
  }

  //Example of adding the dark-mode toggle to the close button just to demonstrate
  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", darkModeToggle);
});
