const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value;
  const password = formEl.password.value;
  if (mail === "" || password === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const formData = {
    mail,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
