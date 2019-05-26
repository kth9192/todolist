const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_STORAGE = "ToDo";

let todoArray = [];

/**
 * TODO: 삭제 버튼 디자인 변경
 */

function filterFN(toDo) {
    return toDo.id === 1;
}

function drawToDo(todoTxt) {

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const chkBox = document.createElement("input");
    const newId = todoArray.length + 1;

    const icon = document.createElement("i");
    icon.className += "far fa-trash-alt";

    deleteBtn.appendChild(icon);
    deleteBtn.className += "delete";
    deleteBtn.addEventListener("click", deleteToDo);

    chkBox.type = "checkbox";
    chkBox.className += "check";

    span.innerText = todoTxt;

    li.appendChild(span);
    li.appendChild(chkBox);
    li.appendChild(deleteBtn);

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

function deleteToDo(event) {

    const deleteBtn = event.target;
    const deleteLi = deleteBtn.parentNode;

    toDoList.removeChild(deleteLi);
    const cleanToDos = todoArray.filter(function (toDo) {
        return toDo.id !== parseInt(deleteLi.id);
    });
    console.log(cleanToDos);

    todoArray = cleanToDos;
    saveToDoList();
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