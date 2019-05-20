const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handelClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handelClick);
}

init();
