export const domContent = (function(){
    const body = document.querySelector("body")
    const content = document.querySelector(".content")
    const header = document.createElement("div")

    header.classList.add("header")

    content.appendChild(header)
    return {body,content,header}
})()