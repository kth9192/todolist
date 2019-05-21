const form = document.querySelector(".js-nameForm"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_STORAGE = "currentUser",
    SHOWING_CLASSNAME = "showing";

function saveName(name) {
    localStorage.setItem(USER_STORAGE, name);
}

function handleSubmit(event) {
    event.preventDefault();
    const userName = input.value;
    drawGreetingTxt(userName);
    saveName(userName);
}

function askName() {
    form.classList.add(SHOWING_CLASSNAME);
    form.addEventListener("submit", handleSubmit);
}

function drawGreetingTxt(name) {

    form.classList.remove(SHOWING_CLASSNAME);
    greeting.classList.add(SHOWING_CLASSNAME);
    greeting.innerText = `Hello ${name}`;
}

function getUserInfo() {
    const currentUser = localStorage.getItem(USER_STORAGE);

    if (currentUser === null) {
        console.log("not user exist here");
        askName();
    } else {
        drawGreetingTxt(currentUser);
    }
}

function init() {
    getUserInfo();
}

init();