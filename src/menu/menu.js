import { domContent } from "../domContent"

function menu(){

    function createMenuItem(name, price, imgSource, type){
    return {name,price, imgSource, type}
}

    function menuItemDom(item){
        const container = document.createElement("div")
        const itemName = document.createElement("p")
        const itemNameField = document.createElement("div")
        const itemPrice = document.createElement("p")
        const itemPic = document.createElement("img")

        itemName.classList.add("item-name", "item-text")
        itemPrice.classList.add("item-price", "item-text")
        container.classList.add("item-container")
        itemPic.classList.add("item-pic")
        itemNameField.classList.add("item-name-field")

        itemName.textContent = item.name
        itemPrice.textContent = item.price + "$"
        itemPic.src = item.imgSource

        domContent.MenuRightSide.appendChild(container)
        itemNameField.appendChild(itemName)
        container.appendChild(itemNameField)
        itemNameField.appendChild(itemPrice)
        container.appendChild(itemPic)
    }

    function createMenuItems(menuItems){
        menuItems.forEach(item => {
            menuItemDom(item);
        });
    }

    const menuItems = [
        {name: "Calamari", price: 29.99, imgSource: "../foods/Calamari.jpg", type: "appatizer"},
        {name: "Fish Fillet", price: 59.99, imgSource: "../foods/fishfilet.jpg", type: "main-course"},
        {name: "Prawn", price: 19.99, imgSource: "../foods/prawn.jpg", type: "appetizer"},
        {name: "Salmon", price: 59.99, imgSource: "../foods/salmon.jpg", type: "main-course"},
        {name: "Crab", price: 39.99, imgSource: "../foods/crab.jpg", type: "side-dish"},
    ];

    (function(){
        const sideBar = document.createElement("div")
        const appetizerText = document.createElement("p")
        const mainCourseText = document.createElement("p")
        const sideDishText = document.createElement("p")

        appetizerText.classList.add("sidebar-text", "appetizer-text")
        mainCourseText.classList.add("sidebar-text", "main-course-text")
        sideDishText.classList.add("sidebar-text", "side-dish-text")
        sideBar.classList.add("sidebar")

        appetizerText.textContent = "APPATIZERS"
        sideDishText.textContent = "SIDE DISH"
        mainCourseText.textContent = "MAIN COURSE"
        
        sideBar.appendChild(appetizerText)
        sideBar.appendChild(sideDishText)
        sideBar.appendChild(mainCourseText)
        domContent.MenuLeftSide.appendChild(sideBar)
    })()

    createMenuItems(menuItems)
}
export {menu}