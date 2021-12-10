function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanEl: document.querySelector(".color"),
  btnEl: document.querySelector(".change-color"),
};

refs.btnEl.addEventListener("click", randomColor);

function randomColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}
