document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.closest(".accordion-item");
    const content = item.querySelector(".accordion-content");
    const icon = header.querySelector(".accordion-icon");

    content.classList.toggle("show");
    icon.classList.toggle("open");
  });
});
