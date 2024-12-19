// Select all necessary DOM elements
const imgDisplay = document.querySelector(".img-display");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const slideImgs = document.querySelectorAll(".slide-img");
const imgContainer = document.querySelector(".carousel-imgs-container");

// Keep track of current image index
let currentIndex = 0;

// Function to update the main display image
function updateDisplayImage(index) {
  // Update the main display image source
  imgDisplay.src = slideImgs[index].src;

  // Optional: Add active state to current thumbnail
  slideImgs.forEach((img) => img.parentElement.classList.remove("active"));
  slideImgs[index].parentElement.classList.add("active");
}

// Next button functionality
nextBtn.addEventListener("click", () => {
  // Increment index, loop back to 0 if it exceeds the last image
  currentIndex = (currentIndex + 1) % slideImgs.length;
  updateDisplayImage(currentIndex);
});

// Previous button functionality
prevBtn.addEventListener("click", () => {
  // Decrement index, loop to last image if it goes below 0
  currentIndex = (currentIndex - 1 + slideImgs.length) % slideImgs.length;
  updateDisplayImage(currentIndex);
});

// Optional: Add click functionality to thumbnails
slideImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateDisplayImage(currentIndex);
  });
});

// Initialize the display with the first image
updateDisplayImage(currentIndex);

// Select the carousel images container
const carouselImgsContainer = document.querySelector(
  ".carousel-imgs-container"
);
const imgContainers = document.querySelectorAll(".img-container");

// Recursive function to create a slow, continuous loop
function createSlowRecursiveLoop(containers) {
  // Convert NodeList to Array if it isn't already
  const containerArray = Array.from(containers);

  // Track the current index
  let currentIndex = 0;

  // Recursive function to slowly append images
  function appendSlowly() {
    // Check if we've reached the end of the original containers
    if (currentIndex >= containerArray.length) {
      currentIndex = 0;
    }

    // Clone the current container
    const clonedContainer = containerArray[currentIndex].cloneNode(true);

    // Append the cloned container
    carouselImgsContainer.appendChild(clonedContainer);

    // Add click event to the cloned image to update main display
    const clonedImg = clonedContainer.querySelector(".slide-img");
    clonedImg.addEventListener("click", () => {
      const mainDisplay = document.querySelector(".img-display");
      mainDisplay.src = clonedImg.src;
    });

    // Increment index
    currentIndex++;

    // Recursively call with a delay to create a slow effect
    setTimeout(appendSlowly, 1000); // 2 seconds between each append
  }

  // Start the slow recursive process
  appendSlowly();
}

// Initialize the slow recursive loop
createSlowRecursiveLoop(imgContainers);
