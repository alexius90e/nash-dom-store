const mainNavMenuItems = document.querySelectorAll(".main-nav__menu-item");

mainNavMenuItems.forEach((item) => {
  const hasSubmenu = [...item.children].find((element) =>
    element.classList.contains("main-nav__submenu")
  );

  if (hasSubmenu) item.classList.add("main-nav__menu-item_has-submenu");

  item.addEventListener("click", (event) => {
    if (hasSubmenu) {
      event.currentTarget.classList.toggle("active");
    }
  });
});

const mainNavAddress = document.querySelector(".main-nav__address");

mainNavAddress.addEventListener("click", (event) => {
  const isToggler = event.target.classList.contains("main-nav__address-toggler");
  if (isToggler) {
    event.currentTarget.classList.toggle("active");
  }
});

const header = document.querySelector(".header");
const headerBurgerButton = document.querySelector(".header__burger-button");
const mainNavClose = document.querySelector(".main-nav__close");

headerBurgerButton.addEventListener("click", () => header.classList.add("active"));
mainNavClose.addEventListener("click", () => header.classList.remove("active"));

header.addEventListener("click", (event) => {
  const isHeader = event.target.classList.contains("header");
  const isActiveHeader = event.currentTarget.classList.contains("header");
  if (isHeader && isActiveHeader) event.currentTarget.classList.remove("active");
});
