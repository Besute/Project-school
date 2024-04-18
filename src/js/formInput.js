import { pull } from "./mySQL.js";
const name = document.querySelector("[name=name]"),
  email = document.querySelector("[name=email]"),
  phone = document.querySelector("[name=phone]"),
  rule = document.querySelector("[name=rule]")
// находим форму в документе
const submit = document.querySelector(".submit__go");
// указываем адрес отправки формы (нужно только в начале примера)
form.action = URL_APP;
// вспомогательная функция проверки заполненности формы
function isFilled(details) {
  const { name, email, phone, rule } = details;
  if (!name) return false;
  else if (!email) return false;
  else if (!phone) return false;
  else if (!rule) return false;
  return true;
}
// навешиваем обработчик на отправку формы
submit.addEventListener("click", async (e) => {
  // отменяем действие по умолчаниюВ
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
  const user = new User(
    name.value.trim(),
    email.value.trim(),
    phone.value.trim(),
    rule.checked
  );
  // если поля не заполнены - прекращаем обработку
  if (!isFilled(user)) return;
  // подготавливаем данные для отправки
  let formBody = [];

  // склеиваем параметры в одну строку
  formBody = formBody.join("&");

  // Отправка данных в mySQL
  pull(user.name, user.email, user.phone, user.rule)

});
