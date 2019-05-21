const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_STORAGE = "ToDo";

const todoArray = [];

function drawToDo(todoTxt) {

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todoArray.length + 1;

    deleteBtn.innerText = "❌";
    span.innerText = todoTxt;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: todoTxt,
        id: newId
    };

    todoArray.push(toDoObj);
}

function saveToDoList() {
    localStorage.setItem(TODO_STORAGE, JSON.stringify(todoArray));
}

function handleSubmit(event) {
    event.preventDefault();
    const todoTxt = toDoInput.value;
    drawToDo(todoTxt);
    saveToDoList();
    toDoInput.value = "";
}

function loadToDoList() {
    const loadedToDo = localStorage.getItem(TODO_STORAGE);

    if (loadedToDo !== null) {

        const parseTodo = JSON.parse(loadedToDo);

        parseTodo.forEach(todo => {
            drawToDo(todo.text);
        });
    }
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();