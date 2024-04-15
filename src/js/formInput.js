const name = document.querySelector("[name=name]"),
  email = document.querySelector("[name=email]"),
  phone = document.querySelector("[name=phone]"),
  options = document.querySelector("[name=options]"),
  rule = document.querySelector("[name=rule]");

const URL_APP = "https://script.google.com/macros/s/AKfycbzaB9NR1GNAwCcezCPDF0IaiCXAtHrg0m08R6_VFGzhLiwTDtoNS1mc-8A6ROPOQ9Qe/exec";

// находим форму в документе
const form = document.querySelector("#form");

// указываем адрес отправки формы (нужно только в начале примера)
form.action = URL_APP;
// вспомогательная функция проверки заполненности формы
function isFilled(details) {
  const { name, email, phone, rule } = details;
  if (!name) return false;
  if (!email) return false;
  if (!phone) return false;
  if (!rule) return false;
  return true;
}

// навешиваем обработчик на отправку формы
form.addEventListener("submit", async (e) => {

  // отменяем действие по умолчанию
  e.preventDefault();

  // Класс нового пользователя
  class User {
    #name
    #phone
    #rule
    #email
    constructor(name, email, phone, rule) {
      this.#name = name;
      this.#email = email;
      this.#phone = phone;
      this.#rule = rule;
    }
  }

  // собираем данные из элементов формы
  const user = new User(name.value.trim(), email.value.trim(), phone.value.trim(), rule.checked)
  // если поля не заполнены - прекращаем обработку
  if (!isFilled(user)) return;
  // подготавливаем данные для отправки
  let formBody = [];
  
  for (let property in user) {
    // кодируем названия и значения параметров
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(user[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  // склеиваем параметры в одну строку
  formBody = formBody.join("&");

  // выполняем отправку данных в Google Apps
  const result = await fetch(URL_APP, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    //cors: "no-cors", <- это неправильно
    mode: "cors", //<- оставим по умолчанию
    body: formBody,
  })
    .then((res) => res.json())
    .catch((err) => alert(`Ошибка! ${err}`))
    // .then((res) => console.log(res));

  if( result.type === 'success' ) {
      name.value = '';
      email.value = '';
      phone.value = '';
      options.value = '';
    alert('Спасибо за заявку!')
  }

  if( result.type === 'error' ) {
    alert(`Ошибка( ${result.errors}`)
  }

});
