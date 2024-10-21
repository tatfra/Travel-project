let imageThumbs = document.getElementById("image-thumbs");
let currentImage = document.getElementById("current-image");

// Create thumbnails for 10 images
for (let i = 1; i <= 10; i++) {
    let thumb = document.createElement("img");
    thumb.src = "images/porto-gallery" + i + ".jpg"; // Adjust path as necessary
    thumb.alt = "image " + i;
    thumb.classList.add("thumb");

    // Add click event to change the main image
    thumb.addEventListener("click", () => {
        currentImage.src = thumb.src; // Change the main image
        currentImage.alt = thumb.alt;   // Update alt text
    });

    // Append the thumbnail to the container
    imageThumbs.appendChild(thumb);
}
