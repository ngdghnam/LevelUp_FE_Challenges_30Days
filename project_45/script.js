// Select all elements with the "service" class
let services = document.getElementsByClassName("service");
let servicesBtns = document.getElementsByClassName("learn-more-btn");
let serviceThumbnailContainers = document.getElementsByClassName(
  "service-thumbnail-container"
);
let thumbnails = document.getElementsByClassName("thumbnail");

// Add event listeners to each "service" element
for (let i = 0; i < services.length; i++) {
  services[i].addEventListener("mouseover", function () {
    // Change the background, text color, and border of the clicked service
    this.style.background = "linear-gradient(45deg, #ff00cc 0%, #333399 100%)";
    this.style.color = "#fff";
    this.style.border = "none";

    // Change the text color of all "learn-more-btn" elements
    for (let j = 0; j < servicesBtns.length; j++) {
      servicesBtns[j].style.color = "#fff";
    }

    // Change the border and background of all "service-thumbnail-container" elements
    for (let k = 0; k < serviceThumbnailContainers.length; k++) {
      serviceThumbnailContainers[k].style.borderColor = "#fff"; // Set border color
      serviceThumbnailContainers[k].style.background = "#fff"; // Set background color
    }

    for (let h = 0; h < thumbnails.length; h++) {
      thumbnails[h].style.color = "#333";
    }
  });
}
