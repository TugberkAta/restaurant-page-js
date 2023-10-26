import { domContent } from "../domContent"

const sidebar = function(){
    const sideBar = document.createElement("div")
    const all = document.createElement("p")
    const appetizerText = document.createElement("p")
    const mainCourseText = document.createElement("p")
    const sideDishText = document.createElement("p")
    const dessertText = document.createElement("p")

    all.classList.add("sidebar-text", "all-text")
    appetizerText.classList.add("sidebar-text", "appetizer-text")
    mainCourseText.classList.add("sidebar-text", "main-course-text")
    sideDishText.classList.add("sidebar-text", "side-dish-text")
    dessertText.classList.add("sidebar-text", "dessert-text")
    sideBar.classList.add("sidebar")

    all.textContent = "ALL"
    appetizerText.textContent = "APPETIZERS"
    sideDishText.textContent = "SIDE DISH"
    mainCourseText.textContent = "MAIN COURSE"
    dessertText.textContent = "DESSERT"
    
    sideBar.appendChild(all)
    sideBar.appendChild(appetizerText)
    sideBar.appendChild(sideDishText)
    sideBar.appendChild(mainCourseText)
    sideBar.appendChild(dessertText)
    domContent.MenuLeftSide.appendChild(sideBar)


    return {appetizerText,mainCourseText,sideDishText,dessertText,all}
}

export {sidebar}