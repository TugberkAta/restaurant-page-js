const domContent = (function(){
    const body = document.querySelector("body")
    const content = document.querySelector(".content")
    const header = document.createElement("div")
    const mainPage = document.createElement("div")
    const menuPage = document.createElement("div")
    const MenuRightSide = document.createElement("div")
    const MenuLeftSide = document.createElement("div")

    header.classList.add("header")
    mainPage.classList.add("main-page")
    menuPage.classList.add("menu-page")
    MenuRightSide.classList.add("menu-page-right")
    MenuLeftSide.classList.add("menu-page-left")
    
    menuPage.appendChild(MenuLeftSide)
    menuPage.appendChild(MenuRightSide)
    content.appendChild(header)
    content.appendChild(mainPage)
    content.appendChild(menuPage)

    return {body,content,header,mainPage, menuPage,MenuRightSide,MenuLeftSide}
})()

export {domContent}