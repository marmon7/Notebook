function darktheme(event) {
    let aside_element = document.querySelector("aside")
    let body_element = document.querySelector("body")
    if (event.target.textContent === "Dark Theme") {
        aside_element.classList.toggle("darkthemeaside")
        body_element.classList.toggle("darkthemebody") 
        event.target.textContent = "Light Theme"
        return
    }
    if (event.target.textContent === "Light Theme") {
        aside_element.classList.toggle("darkthemeaside")
        body_element.classList.toggle("darkthemebody") 
        event.target.textContent = "Dark Theme"
        return
    }
}
document.body.addEventListener("click",darktheme)

function hidetextarea(event) {
    let right_buttons = document.querySelector(".right_buttons")
    let textarea_element = document.querySelector("textarea")
    if (event.target.textContent === "Cancel") {
        right_buttons.classList.add("hidden")
        textarea_element.classList.add("hidden")
    }
}
document.body.addEventListener("click",hidetextarea)

function unhidetextarea(event) {
    let right_buttons = document.querySelector(".right_buttons")
    let textarea_element = document.querySelector("textarea")
    if (event.target.textContent === "New Note") {
        right_buttons.classList.remove("hidden")
        textarea_element.classList.remove("hidden")
        textarea_element.value = ""
    }
}
document.body.addEventListener("click",unhidetextarea)