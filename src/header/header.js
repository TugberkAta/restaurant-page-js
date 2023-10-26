import { domContent } from "../domContent";

let i = 0

const headerInterior = (function(){
    const headerLeft = document.createElement("div")
    const headerRight = document.createElement("div")
    const nameText = document.createElement("p")
    const menuText = document.createElement("p")
    const contactText = document.createElement("p")

    headerLeft.classList.add("header-left")
    headerRight.classList.add("header-right")
    nameText.classList.add("header-main-name-text")
    menuText.classList.add("header-menu-text")
    contactText.classList.add("header-contact-text")

    nameText.innerText = "TASTE OF APHRODITE"
    menuText.innerText = "MENU"
    contactText.innerText = "CONTACT"

    domContent.header.appendChild(headerLeft)
    domContent.header.appendChild(headerRight)
    headerLeft.appendChild(nameText)
    headerLeft.appendChild(menuText)
    headerRight.appendChild(contactText)
})()