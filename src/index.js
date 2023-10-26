import "./style.css"
import "./domContent"
import "./header/header.js"
import "./fancyScrollSection/fancyscroll"
import "./menu/menu"
import { fancyScroll } from "./fancyScrollSection/fancyscroll"
import { domContent } from "./domContent"
import { menu } from "./menu/menu"

menu()

const menuPage = document.querySelector(".header-menu-text")
const mainPage = document.querySelector(".header-main-name-text")

menuPage.addEventListener("click", () => {
    if(domContent.MenuLeftSide.innerHTML === ""){
    domContent.mainPage.innerHTML = ""
    menu()
}
    else {return 0}
})

mainPage.addEventListener("click",()=>{
    if(domContent.mainPage.innerHTML === ""){
    domContent.MenuLeftSide.innerHTML = ""
    domContent.MenuRightSide.innerHTML = ""
    fancyScroll()
 }
    else {return 0}
})

