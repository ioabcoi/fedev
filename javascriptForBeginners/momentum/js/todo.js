const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
    // console.log(newToDo);
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newToDo;
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    // console.log(newTodo);
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);