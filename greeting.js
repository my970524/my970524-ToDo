'use strict';

const form = document.querySelector(".js_form");
const input = form.querySelector(".js_input");
const greeting = document.querySelector(".js_greeting");
const show = "show";
const userInLS = "User";

function saveName(text) {
    localStorage.setItem(userInLS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    displayGreeting(currentValue);
    saveName(currentValue);
}

function askName(text) {
    form.classList.add(show);
    form.addEventListener("submit", handleSubmit);  
}

function displayGreeting(text) {
    form.classList.remove(show);
    greeting.classList.add(show);
    greeting.innerText=`Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(userInLS);
    if(currentUser === null) {
        askName();
    }   else {
        displayGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();