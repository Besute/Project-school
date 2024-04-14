const mainInfo = document.querySelector("ul").childNodes[5],
  header = document.querySelector(".header"),
  firstSection = document.getElementById("first-section"),
  filler = document.querySelectorAll(".filler"),
  filler_2 = document.querySelector(".filler--2"),
  filler_3 = document.querySelector(".filler--2_2"),
  win = window.screen.width,
  nav = document.querySelectorAll(".nav"),
  text = document.querySelectorAll("p"),
  text2 = document.querySelectorAll("h1"),
  text3 = document.querySelectorAll("h2"),
  text4 = document.querySelectorAll("div"),
  navig_main = document.querySelectorAll(".navi__main"),
  nav_head = document.querySelector(".nav_header"),
  nav_item_2 = document.querySelector(".nav__item_2");

const mass = [text, text2, text3, text4];
const observer = new IntersectionObserver(
  (en) => {
    if (en[0].isIntersecting) return;
    nav_head.classList.toggle("fixed");
  },
  { threshold: 0 }
);

observer.observe(nav_head);

navig_main.forEach((i) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    header.scrollIntoView({ behavior: "smooth" });
  });
});
mainInfo.addEventListener("click", (e) => {
  e.preventDefault();
  firstSection.scrollIntoView({ behavior: "smooth" });
});
nav_item_2.addEventListener("click", (e) => {
  e.preventDefault();
  firstSection.scrollIntoView({ behavior: "smooth" });
});
if (win <= 674) {
  filler.forEach((i) => {
    i.remove();
  });
  filler_2.remove();
  filler_3.remove();
}

if (win <= 920) {
  nav[0].remove();
  header.insertAdjacentHTML(
    "beforebegin",
    `
  <div class="menu-burger">
    <input
      type="checkbox"
      id="burger-button"
      name="burger-button"
      class="menu-burger__button"
    />
    <label for="burger-button" class="menu-burger__label">
      <div class="menu-burger__icon"></div>
    </label>
    <div class="menu-burger__background">
      <nav class="nav menu-burger__nav">
        <ul class="nav__menu">
          <li class="nav__item">
            <a href="#" class="nav__href anonymous-pro-bold nav__main">Главная</a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__href nav__href_section-1 anonymous-pro-bold"
              >Записаться</a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="nav__href anonymous-pro-bold">Контактны </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class='menu-burger__foreground'></div>
  </div>
  
  `
  );
  const burger = document.querySelector(".nav__href_section-1"),
    menu_href = document.querySelectorAll(".nav__href"),
    nav_main = document.querySelector(".nav__main");
  menu_href.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();
    });
    nav_main.addEventListener("click", () => {
      header.scrollIntoView({ behavior: "smooth" });
    });
  });
  burger.addEventListener("click", () => {
    firstSection.scrollIntoView({ behavior: "smooth" });
  });
  for (i of mass) {
    i.forEach((i) => {
      i.classList.remove("anim-text");
    });
  }
}











      const URL_APP =     "https://script.google.com/macros/s/AKfycbzaB9NR1GNAwCcezCPDF0IaiCXAtHrg0m08R6_VFGzhLiwTDtoNS1mc-8A6ROPOQ9Qe/exec";

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
      form.addEventListener("submit", async () => {
        // отменяем действие по умолчанию

        // получаем ссылки на элементы формы
        const name = document.querySelector("[name=name]");
        const email = document.querySelector("[name=email]");
        const phone = document.querySelector("[name=phone]");
        const options = document.querySelector("[name=options]");
        const rule = document.querySelector("[name=rule]");

        // собираем данные из элементов формы
        let details = {
          name: name.value.trim(),
          email: email.value.trim(),
          phone: phone.value.trim(),
          message: options.value.trim(),
          rule: rule.checked,
        };

        // если поля не заполнены - прекращаем обработку
        if (!isFilled(details)) return;

        // подготавливаем данные для отправки
        let formBody = [];
        for (let property in details) {
          // кодируем названия и значения параметров
          let encodedKey = encodeURIComponent(property);
          let encodedValue = encodeURIComponent(details[property]);
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
          .catch((err) => alert("Ошибка!"))
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
