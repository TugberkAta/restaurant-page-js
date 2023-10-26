import { domContent } from "../domContent";

function contact(){
    const addressField = document.createElement("div")
    const telephoneField = document.createElement("div")
    const emailField = document.createElement("div")
    const addressFieldHeader = document.createElement("p")
    const addressFieldText = document.createElement("p")
    const emailFieldHeader = document.createElement("p")
    const emailFieldText = document.createElement("p")
    const telephoneFieldHeader = document.createElement("p")
    const telephoneFieldText = document.createElement("p")


    addressField.classList.add("contact-field")
    telephoneField.classList.add("contact-field")
    emailField.classList.add("contact-field")

    addressFieldHeader.innerText = "ADDRESS"
    addressFieldText.innerText = "The Dreaming's Nexus Ethereal Lane,\n Somnium Court \n Oneiric Realm, DRM 1RE"
    emailFieldHeader.innerText = "E-MAIL"
    emailFieldText.innerText = "example@gmail.com"
    telephoneFieldHeader.innerText = "PHONE NUMBER"
    telephoneFieldText.innerText = "+90 823539585"

    domContent.contactPage.appendChild(addressField)
    domContent.contactPage.appendChild(telephoneField)
    domContent.contactPage.appendChild(emailField)
    addressField.appendChild(addressFieldHeader)
    addressField.appendChild(addressFieldText)
    emailField.appendChild(emailFieldHeader)
    emailField.appendChild(emailFieldText)
    telephoneField.appendChild(telephoneFieldHeader)
    telephoneField.appendChild(telephoneFieldText)
}

export {contact}