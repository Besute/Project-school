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
  nav_item_2 = document.querySelector(".nav__item_2"),
  mass = [text, text2, text3, text4];
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
    console.log('yes');
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
