let allImages = document.images;

// CHECK HTML img.src PROPERTY
for (let index = 0; index < allImages.length; index++) {
    if (allImages[index].src) {
        allImages[index].removeAttribute("src");
        allImages[index].removeAttribute("data-src");
        allImages[index].removeAttribute("srcset");
        allImages[index].removeAttribute("data-srcset");
    }    
}