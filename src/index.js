import "./style.css";
import domContent from "./domContent";
// eslint-disable-next-line no-unused-vars, import/extensions
import headerInterior from "./header/header.js";
import fancyScroll from "./fancyScrollSection/fancyscroll";
import menu from "./menu/menu";
import contact from "./contact/contact";

fancyScroll();

const menuPage = document.querySelector(".header-menu-text");
const mainPage = document.querySelector(".header-main-name-text");
const contactPage = document.querySelector(".header-contact-text");

mainPage.style.borderBottom = "1px solid white";

menuPage.addEventListener("click", () => {
  if (domContent.MenuLeftSide.innerHTML === "") {
    contactPage.style.borderBottom = "none";
    mainPage.style.borderBottom = "none";
    menuPage.style.borderBottom = "1px solid white";
    domContent.mainPage.innerHTML = "";
    domContent.contactPage.innerHTML = "";
    menu();
  }
  return 0;
});

mainPage.addEventListener("click", () => {
  if (domContent.mainPage.innerHTML === "") {
    menuPage.style.borderBottom = "none";
    contactPage.style.borderBottom = "none";
    mainPage.style.borderBottom = "1px solid white";
    domContent.MenuLeftSide.innerHTML = "";
    domContent.MenuRightSide.innerHTML = "";
    domContent.contactPage.innerHTML = "";
    fancyScroll();
  }
  return 0;
});

contactPage.addEventListener("click", () => {
  if (domContent.contactPage.innerHTML === "") {
    mainPage.style.borderBottom = "none";
    menuPage.style.borderBottom = "none";
    contactPage.style.borderBottom = "1px solid white";
    domContent.MenuLeftSide.innerHTML = "";
    domContent.MenuRightSide.innerHTML = "";
    domContent.mainPage.innerHTML = "";
    contact();
  }
  return 0;
});
