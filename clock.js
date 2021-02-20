'use strict';

const clockBox = document.querySelector(".js_clock"),
    clockTitle = clockBox.querySelector("h1");
const date = document.querySelector(".date");


function getTime() {
    const time = new Date;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:
                            ${minutes < 10 ? `0${minutes}` : minutes}:
                            ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();



const clickedClass = "clicked";

function colorChange() {
    const currentClass = clockTitle.className;

    if (currentClass !== clickedClass) {
        clockTitle.className = clickedClass;
    }   else {
        clockTitle.className = "";
    }
}

function mouseEnterHandler() {
    clockTitle.addEventListener("mouseenter", colorChange);
}
mouseEnterHandler();