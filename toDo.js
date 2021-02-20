'use strict';

const toDoForm = document.querySelector(".js_toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js_toDoList");

const toDoInLS = "ToDo";
let toDos = [];


function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDos();
}


function saveToDos() {
    localStorage.setItem(toDoInLS, JSON.stringify(toDos));
}

function writeToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const newId = toDos.length + 1;
    span.innerText = text;
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    writeToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const loadedToDo = localStorage.getItem(toDoInLS);
    if(loadedToDo !== null) {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(eachToDo) {
            writeToDo(eachToDo.text);    
        });
    }
}


function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();