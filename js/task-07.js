const fontControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

fontControlEl.oninput = function () {
  textEl.style.fontSize = fontControlEl.value + "px";
};

// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.
