
export const domContent = (function(){
    const body = document.querySelector("body")
    const content = document.querySelector(".content")


    return {body,content}
})()

const fancyField = (function(){
    const firstContainer = document.createElement("div")
    const secondContainer = document.createElement("div")
    const fancyContainer = document.createElement("div")
    const fancyPart = document.createElement("div")

    fancyPart.classList.add("fancy-part")
    fancyContainer.classList.add("fancy-container")
    firstContainer.classList.add("first-container")
    secondContainer.classList.add("second-container")

    domContent.content.appendChild(fancyPart)
    fancyPart.appendChild(fancyContainer)
    fancyContainer.appendChild(firstContainer)
    fancyContainer.appendChild(secondContainer)

    return {firstContainer, secondContainer}
})()

const fancyInnerElements = (function(){
    const firstTextContainer = document.createElement("p") 
    const secondTextContainer = document.createElement("p")
    const thirdTextContainer = document.createElement("p") 
    const textPanel = document.createElement("div")

    firstTextContainer.classList.add("first-text-container")
    secondTextContainer.classList.add("second-text-container")
    thirdTextContainer.classList.add("third-text-container")
    textPanel.classList.add("text-panel")

    firstTextContainer.innerText = "Best Of Cyprus"
    secondTextContainer.innerText = "Taste Of\n Aphrodite"
    thirdTextContainer.innerText = "Lorem ipsum dolor,\n\n sit amet consectetur adipisicing elit.\n\nQuasi mollitia hic id temporibus\n\n praesentium deleniti reprehenderit\n\n quis ex ad, fugit minima vitae suscipit\n\n veritatis quo veniam eligendi at sed?"

    fancyField.firstContainer.appendChild(textPanel)
    textPanel.appendChild(firstTextContainer)
    textPanel.appendChild(secondTextContainer)
    textPanel.appendChild(thirdTextContainer)
})()

const fancyPictureShadow = (function(){
    const shadowField = document.createElement("div")

    shadowField.classList.add("fancy-picture-shadow")

    fancyField.secondContainer.appendChild(shadowField)
})()

const fancyPictureElements = (function(){
    const firstPicture = document.createElement("img")
    const secondPicture = document.createElement("img")
    const thirdPicture = document.createElement("img")
    const fourthPicture = document.createElement("img")

    firstPicture.src = "./Calamari.jpg"
    secondPicture.src = "./fishfilet.jpg"
    thirdPicture.src = "./prawn.jpg"
    fourthPicture.src = "./wine.jpg"


    fancyField.secondContainer.appendChild(firstPicture)
    fancyField.secondContainer.appendChild(secondPicture)
    fancyField.secondContainer.appendChild(thirdPicture)
    fancyField.secondContainer.appendChild(fourthPicture)
})()



