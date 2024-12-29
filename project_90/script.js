document.addEventListener("DOMContentLoaded", () => {
  const optionsButton = document.querySelector(".options-button");
  const optionsMenu = document.querySelector(".options-menu");

  optionsButton.addEventListener("click", () => {
    optionsMenu.style.display =
      optionsMenu.style.display === "none" ? "flex" : "none";
  });

  document.addEventListener("click", (event) => {
    if (
      optionsMenu &&
      !optionsButton.contains(event.target) &&
      !optionsMenu.contains(event.target) &&
      optionsMenu.style.display === "flex"
    ) {
      optionsMenu.style.display = "none";
    }
  });
});
