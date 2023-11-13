const domContent = (function domContent() {
  const body = document.querySelector("body");
  const content = document.querySelector(".content");
  const header = document.createElement("nav");
  const mainPage = document.createElement("div");
  const menuPage = document.createElement("div");
  const MenuRightSide = document.createElement("div");
  const MenuLeftSide = document.createElement("div");
  const contactPage = document.createElement("div");

  header.classList.add("header");
  mainPage.classList.add("main-page");
  menuPage.classList.add("menu-page");
  MenuRightSide.classList.add("menu-page-right");
  MenuLeftSide.classList.add("menu-page-left");
  contactPage.classList.add("contact-page");

  menuPage.appendChild(MenuLeftSide);
  menuPage.appendChild(MenuRightSide);
  content.appendChild(header);
  content.appendChild(mainPage);
  content.appendChild(menuPage);
  content.appendChild(contactPage);

  return {
    body,
    content,
    header,
    mainPage,
    menuPage,
    MenuRightSide,
    MenuLeftSide,
    contactPage,
  };
})();

export default domContent;
