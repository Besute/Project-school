const mainInfo = document.querySelector("ul").childNodes[5],
  firstSection = document.getElementById("first-section"),
  filler = document.querySelectorAll(".filler"),
  filler_2 = document.querySelector(".filler--2"),
  filler_3 = document.querySelector(".filler--2_2"),
  win = window.screen.width,
  nav = document.querySelectorAll(".nav");

mainInfo.addEventListener("click", (e) => {
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
  document.querySelector(".header").insertAdjacentHTML(
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
            <a href="#" class="nav__href anonymous-pro-bold"
              >Общая информация</a
            >
          </li>
          <li class="nav__item">
            <a href="#" class="nav__href anonymous-pro-bold">Курсы</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__href anonymous-pro-bold">Контактны </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  
  `
  );
}
