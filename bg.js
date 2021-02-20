'use strict';
const body = document.querySelector('body');


const IMG_NUMBER = 5;


function showImg(imgNumber) {
    const img = new Image();
    img.src = `${imgNumber+1}.jpg`;
    img.classList.add("bgImg");
    body.prepend(img);
}

function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    showImg(randomNumber);

}
init();