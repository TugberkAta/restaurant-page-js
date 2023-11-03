import domContent from "../domContent";
import sidebar from "./sidebar";

function menu() {
  function menuItemDom(item) {
    const container = document.createElement("div");
    const itemName = document.createElement("p");
    const itemNameField = document.createElement("div");
    const itemPrice = document.createElement("p");
    const itemPic = document.createElement("img");

    itemName.classList.add("item-name", "item-text");
    itemPrice.classList.add("item-price", "item-text");
    container.classList.add("item-container");
    itemPic.classList.add("item-pic");
    itemNameField.classList.add("item-name-field");

    itemName.textContent = item.name;
    itemPrice.textContent = `${item.price}$`;
    itemPic.src = item.imgSource;

    domContent.MenuRightSide.appendChild(container);
    itemNameField.appendChild(itemName);
    container.appendChild(itemNameField);
    itemNameField.appendChild(itemPrice);
    container.appendChild(itemPic);
  }

  const menuItems = [
    {
      name: "Calamari",
      price: 29.99,
      imgSource: "/../foods/Calamari.jpg",
      type: "appetizer",
    },
    {
      name: "Fish Fillet",
      price: 39.99,
      imgSource: "/../foods/fishfilet.jpg",
      type: "main-course",
    },
    {
      name: "Prawn",
      price: 19.99,
      imgSource: "/../foods/prawn.jpg",
      type: "appetizer",
    },
    {
      name: "Salmon",
      price: 39.99,
      imgSource: "/../foods/salmon.jpg",
      type: "main-course",
    },
    {
      name: "Crab",
      price: 39.99,
      imgSource: "/../foods/crab.jpg",
      type: "side-dish",
    },
    {
      name: "Oyster",
      price: 19.99,
      imgSource: "/../foods/oyster.jpg",
      type: "appetizer",
    },
    {
      name: "Chocolate Soufle",
      price: 12.99,
      imgSource: "/../foods/soufle.jpg",
      type: "dessert",
    },
    {
      name: "Creme Brulee",
      price: 18.99,
      imgSource: "/../foods/creme.jpg",
      type: "dessert",
    },
    {
      name: "Lobster",
      price: 59.99,
      imgSource: "/../foods/lobster.jpg",
      type: "main-course",
    },
    {
      name: "Greek Salad",
      price: 19.99,
      imgSource: "/../foods/greek.jpg",
      type: "side-dish",
    },
    {
      name: "Baklava",
      price: 12.99,
      imgSource: "/../foods/baklava.jpg",
      type: "dessert",
    },
    {
      name: "Israeli Salad",
      price: 19.99,
      imgSource: "/../foods/israel.jpg",
      type: "side-dish",
    },
  ];

  const sidebarObject = sidebar();

  function createMenuItems(Items) {
    Items.forEach((item) => {
      menuItemDom(item);
    });
  }

  sidebarObject.all.addEventListener("click", () => {
    domContent.MenuRightSide.innerHTML = "";
    createMenuItems(menuItems);
  });

  sidebarObject.appetizerText.addEventListener("click", () => {
    domContent.MenuRightSide.innerHTML = "";
    menuItems.forEach((e) => {
      if (e.type === "appetizer") {
        menuItemDom(e);
      } else;
    });
  });

  sidebarObject.sideDishText.addEventListener("click", () => {
    domContent.MenuRightSide.innerHTML = "";
    menuItems.forEach((e) => {
      if (e.type === "side-dish") {
        menuItemDom(e);
      } else;
    });
  });

  sidebarObject.mainCourseText.addEventListener("click", () => {
    domContent.MenuRightSide.innerHTML = "";
    menuItems.forEach((e) => {
      if (e.type === "main-course") {
        menuItemDom(e);
      } else;
    });
  });

  sidebarObject.dessertText.addEventListener("click", () => {
    domContent.MenuRightSide.innerHTML = "";
    menuItems.forEach((e) => {
      if (e.type === "dessert") {
        menuItemDom(e);
      } else;
    });
  });

  createMenuItems(menuItems);
}
export default menu;
