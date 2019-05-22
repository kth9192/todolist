const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(imgNumber) {

    const newImg = new Image();
    newImg.src = `/img/bg${imgNumber + 1}.jpg`;
    newImg.classList.add("bgImg");
    body.prepend(newImg);

    // newImg.addEventListener("loadend", handleImageLaod);
}

// function handleImageLaod() {
//     console.log("loaded");
// }

function createRandomBG() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {

    const randomNum = createRandomBG();
    paintImg(randomNum);
}

init();

// bg1 Photo by Jason Chamberlain on Unsplash
// bg2 Photo by Mae Mu on Unsplash
// bg3 Photo by Mzimasi Ndzombane on Unsplash