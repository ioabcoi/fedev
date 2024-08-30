const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // console.log(event, event.target, event.target.parentElement, event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    // console.log(newToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    // console.log(newTodo);
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    toDos = parsedToDos;

    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    // parsedToDos.forEach(sayHello);
    parsedToDos.forEach((item) => paintToDo(item));
}