let allImages = document.images;

// CHECK HTML img.src PROPERTY
for (let index = 0; index < allImages.length; index++) {
    if (allImages[index].src) {
        console.log(allImages[index]);
        allImages[index].removeAttribute("src");
        allImages[index].removeAttribute("data-src");
        allImages[index].removeAttribute("srcset");
        allImages[index].removeAttribute("data-srcset");
        console.log(allImages[index]);
    }    
}

// CHECK DOCUMENT'S CSS BACKGROUND URL PROPERTIES
