// ADDING THIS CRITICAL COMMENT
console.log("script running")

let myImages = ['jimage1.jpg', 'jimage2.jpg', 'jimage3.jpg', 'jimage4.jpg', 'jimage5.jpg'];

let currentImage = 0;

document.getElementById('next').onclick = nextPhoto;

function nextPhoto(){
    currentImage += 1;

    if (currentImage > 4) { currentImage = 0};

    document.getElementById('myimage').src = myImages[currentImage];
}

document.getElementById('previous').onclick = prevPhoto;

function prevPhoto(){
    currentImage -= 1;

    if (currentImage < 0) {currentImage = 4};

    document.getElementById('myimage').src = myImages[currentImage];
}
