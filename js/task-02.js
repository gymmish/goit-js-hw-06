const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listIt = (ingredients) =>
  ingredients.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.className = "item";
    itemEl.textContent = element;
    return itemEl;
  });

const navEl = document.querySelector("#ingredients");
navEl.append(...listIt(ingredients));

//Напиши скрипт, который для каждого элемента массива ingredients:
//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul.ingredients.
