const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value != "") {
    refs.outputEl.textContent = event.currentTarget.value;
  } else {
    refs.outputEl.textContent = "Anonymous";
  }
}

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".
