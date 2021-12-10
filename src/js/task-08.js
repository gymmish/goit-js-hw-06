const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget.value);
  const mail = formData.email.value;
  const password = formData.password.value;
  if (mail === "" || password === "") {
    return alter("Все поля должны быть заполнены!");
  }

  console.log(formData);
}
