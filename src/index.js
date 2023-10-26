import "./style.css"
import "./domContent"
import "./header/header.js"
import "./fancyScrollSection/fancyscroll"
import "./menu/menu"
import { contact } from "./contact/contact"
import { fancyScroll } from "./fancyScrollSection/fancyscroll"
import { domContent } from "./domContent"
import { menu } from "./menu/menu"

fancyScroll()

const menuPage = document.querySelector(".header-menu-text")
const mainPage = document.querySelector(".header-main-name-text")
const contactPage = document.querySelector(".header-contact-text")

menuPage.addEventListener("click", () => {
    if(domContent.MenuLeftSide.innerHTML === ""){
    domContent.mainPage.innerHTML = ""
    domContent.contactPage.innerHTML =""
    menu()
}
    else {return 0}
})

mainPage.addEventListener("click",()=>{
    if(domContent.mainPage.innerHTML === ""){
    domContent.MenuLeftSide.innerHTML = ""
    domContent.MenuRightSide.innerHTML = ""
    domContent.contactPage.innerHTML = ""
    fancyScroll()
 }
    else {return 0}
})

contactPage.addEventListener("click",()=>{
    if(domContent.contactPage.innerHTML === ""){
    domContent.MenuLeftSide.innerHTML = ""
    domContent.MenuRightSide.innerHTML = ""
    domContent.mainPage.innerHTML = ""
    contact()
 }
    else {return 0}
})

