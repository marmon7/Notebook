function darktheme(event) {
    let aside_element = document.querySelector("aside")
    let body_element = document.querySelector("body")
    console.log(event.target.textContent)
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