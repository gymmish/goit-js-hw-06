const inputEl = document.querySelector("#validation-input");
const lengthData = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onBlur);

function onBlur() {
  inputEl.classList.add("invalid");

  inputEl.value.length === Number(lengthData)
    ? inputEl.classList.replace("invalid", "valid")
    : inputEl.classList.replace("valid", "invalid");
}

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.
