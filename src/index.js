import "./style.css"
import "./fancyscroll"


 export const domContent = (function(){
    const body = document.querySelector("body")
    const firstContainer = document.createElement("div")

    return {body,firstContainer}
})()
