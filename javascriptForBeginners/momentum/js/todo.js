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
    // console.log(li.id);
    li.remove();
    // console.log(toDos.filter(item => console.log(item.id, typeof item.id, li.id, typeof li.id, parseInt(li.id))));
    // const removeToDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    // console.log(removeToDos);
    // toDos = removeToDos;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));    
    saveToDos();
}

function paintToDo(newToDo) {
    // console.log(newToDo);
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    // span.innerText = newToDo;
    span.innerText = newToDo.text;
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
    // toDos.push(newToDo);
    // paintToDo(newToDo);
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
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
    // parsedToDos.forEach((item) => paintToDo(item));
    parsedToDos.forEach(paintToDo);
}