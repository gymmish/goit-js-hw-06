let counterValue = 0;

const button = {
  valueEl: document.querySelector("#value"),
  plusBtn: document.querySelector("[data-action = 'increment']"),
  minusBtn: document.querySelector("[data-action = 'decrement']"),
};

const plusClick = () => {
  counterValue += 1;
  button.valueEl.textContent = counterValue;
};

const minusClick = () => {
  counterValue -= 1;
  button.valueEl.textContent = counterValue;
};

button.plusBtn.addEventListener("click", plusClick);
button.minusBtn.addEventListener("click", minusClick);

console.log(counterValue);
