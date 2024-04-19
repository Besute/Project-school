const name = document.querySelector("[name=name]"),
  email = document.querySelector("[name=email]"),
  phone = document.querySelector("[name=phone]"),
  rule = document.querySelector("[name=rule]"),
  submit = document.querySelector(".submit__go"),
  select = document.querySelector('.direction__select')

submit.addEventListener("click", async (e) => {
  // Отменяем действие по умолчаниюВ
  e.preventDefault();
  // Класс нового пользователя
  class User {
    constructor(name, email, phone, rule) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.rule = rule;
    }
  }

  // собираем данные из элементов формы
  const user = new User(name.value, email.value, phone.value, rule.checked);

  // если поля не заполнены - прекращаем обработку
  if (!name.value) return;
  else if (!email.value) return;
  else if (!phone.value) return;
  else if (!rule.checked) return;

  // Отправка данных в mySQL
  (async () => {
    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        name: `${name.value}`,
        phone: `${phone.value}`,
        email: `${email.value}`,
        direction: `${select.value}`,
      }),
    });
  })();

  email.value = phone.value = name.value = "";
});
