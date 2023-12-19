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
const headerCatalogButton = document.querySelector(".header__catalog-button");
const headerCatalog = document.querySelector(".header__catalog");
const headerCatalogSubitems = document.querySelector(".header__catalog-subitems");
const headerCatalogMenuItems = document.querySelectorAll(".header__catalog-menu-item");

mainNavClose.addEventListener("click", () => header.classList.remove("active"));

headerBurgerButton.addEventListener("click", () => {
  header.classList.add("active");
  headerCatalog.classList.remove("active");
});

header.addEventListener("click", (event) => {
  const isHeader = event.target.classList.contains("header");
  const isActiveHeader = event.currentTarget.classList.contains("active");
  if (isHeader && isActiveHeader) event.currentTarget.classList.remove("active");
});

headerCatalogButton.addEventListener("click", (event) => {
  const isActive = headerCatalog.classList.contains("active");
  headerCatalog.classList.toggle("active");
  if (isActive) {
    headerCatalogSubitems.innerHTML = "";
    headerCatalogSubitems.classList.add("hidden");
    headerCatalogMenuItems.forEach((item) => item.classList.remove("active"));
  }
});

headerCatalogMenuItems.forEach((item) => {
  item.addEventListener("mouseenter", (event) => {
    const submenu = event.currentTarget.querySelector(".header__catalog-submenu");
    if (submenu !== null) {
      headerCatalogSubitems.innerHTML = submenu.innerHTML;
      headerCatalogSubitems.classList.remove("hidden");
    } else {
      headerCatalogSubitems.innerHTML = "";
      headerCatalogSubitems.classList.add("hidden");
    }
  });

  item.addEventListener("click", (event) => {
    const isItem = event.target.classList.contains("header__catalog-menu-item");
    const subMenuTitle = event.currentTarget.querySelector(".header__catalog-submenu-title");
    const itemName = event.currentTarget.querySelector(".header__catalog-menu-link").innerText;
    if (subMenuTitle) subMenuTitle.innerText = itemName;
    if (isItem) {
      headerCatalogMenuItems.forEach((item) => item.classList.remove("active"));
      event.currentTarget.classList.add("active");
    }
  });
});

headerCatalog.addEventListener("mouseleave", () => {
  headerCatalogSubitems.innerHTML = "";
  headerCatalogSubitems.classList.add("hidden");
});

const headerCatalogMenuCloseBtns = document.querySelectorAll(".header__catalog-menu-close");
const headerSubmenuBackBtns = document.querySelectorAll(".header__catalog-submenu-back");

headerCatalogMenuCloseBtns.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    headerCatalog.classList.remove("active");
    headerCatalogMenuItems.forEach((item) => item.classList.remove("active"));
  });
});

headerSubmenuBackBtns.forEach((backButton) => {
  backButton.addEventListener("click", () => {
    headerCatalogMenuItems.forEach((item) => item.classList.remove("active"));
  });
});
