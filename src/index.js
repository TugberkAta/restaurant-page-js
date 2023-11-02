import './style.css';
import domContent from './domContent';
// eslint-disable-next-line import/extensions, no-unused-vars
import headerInterior from './header/header.js';
import fancyScroll from './fancyScrollSection/fancyscroll';
import menu from './menu/menu';
import contact from './contact/contact';

fancyScroll();

const menuPage = document.querySelector('.header-menu-text');
const mainPage = document.querySelector('.header-main-name-text');
const contactPage = document.querySelector('.header-contact-text');

menuPage.addEventListener('click', () => {
  if (domContent.MenuLeftSide.innerHTML === '') {
    domContent.mainPage.innerHTML = '';
    domContent.contactPage.innerHTML = '';
    menu();
  } return 0;
});

mainPage.addEventListener('click', () => {
  if (domContent.mainPage.innerHTML === '') {
    domContent.MenuLeftSide.innerHTML = '';
    domContent.MenuRightSide.innerHTML = '';
    domContent.contactPage.innerHTML = '';
    fancyScroll();
  } return 0;
});

contactPage.addEventListener('click', () => {
  if (domContent.contactPage.innerHTML === '') {
    domContent.MenuLeftSide.innerHTML = '';
    domContent.MenuRightSide.innerHTML = '';
    domContent.mainPage.innerHTML = '';
    contact();
  } return 0;
});
