document.getElementById("colorCode").addEventListener("input", (event) => {
  const color = event.target.value;
  const colorPreview = document.getElementById("colorPreview");
  const buttonPreview = document.getElementById("buttonPreview");
  const buttonPreview2 = document.getElementById("buttonPreview2");

  if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
    colorPreview.style.backgroundColor = color;
    buttonPreview.style.backgroundColor = color;
    buttonPreview2.style.backgroundColor = color;
  }
});
