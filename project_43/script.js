document.addEventListener("DOMContentLoaded", () => {
  const selectContainer = document.querySelector(".select-container");
  const industryDropdown = document.querySelector(".industry-dropdown");
  const memberOptionsDropdown = document.querySelector(
    ".member-options-dropdown"
  );
  const memberOptionsArrow = document.querySelector(".member-options");

  if (selectContainer) {
    selectContainer.addEventListener("click", () => {
      if (industryDropdown) {
        industryDropdown.style.display =
          industryDropdown.style.display === "none" ? "block" : "none";
      }
    });
  }
  if (memberOptionsArrow) {
    memberOptionsArrow.addEventListener("click", () => {
      if (memberOptionsDropdown) {
        memberOptionsDropdown.style.display =
          memberOptionsDropdown.style.display === "none" ? "block" : "none";
      }
    });
  }
  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (
      selectContainer &&
      !selectContainer.contains(event.target) &&
      industryDropdown &&
      industryDropdown.style.display === "block"
    ) {
      industryDropdown.style.display = "none";
    }
    if (
      memberOptionsArrow &&
      !memberOptionsArrow.contains(event.target) &&
      memberOptionsDropdown &&
      memberOptionsDropdown.style.display === "block"
    ) {
      memberOptionsDropdown.style.display = "none";
    }
  });
});
