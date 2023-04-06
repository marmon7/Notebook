let theme_button = document.querySelector("#grey_button")
// Changes background and text to a dark theme and changes back to light theme when clicked again
function dark_theme(event) {
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
theme_button.addEventListener("click",dark_theme)

let cancel_button = document.querySelector("#red_button")
// hides the text area when cancel button is clicked
function hide_textarea(event) {
    let right_buttons = document.querySelector(".right_buttons")
    let textarea_element = document.querySelector("textarea")
    if (event.target.textContent === "Cancel") {
        right_buttons.classList.add("hidden")
        textarea_element.classList.add("hidden")
    }
}
cancel_button.addEventListener("click",hide_textarea)

let new_note_button = document.querySelector("#new_note_button")
// unhides the textarea if it's hidden and resets the textarea value 
function unhide_textarea(event) {
    let right_buttons = document.querySelector(".right_buttons")
    let textarea_element = document.querySelector("textarea")
    if (event.target.textContent === "New Note") {
        right_buttons.classList.remove("hidden")
        textarea_element.classList.remove("hidden")
        textarea_element.value = ""
    }
}
new_note_button.addEventListener("click",unhide_textarea)

let notesArray = [
    {title:"note one", body:"this is my first note"},
    {title:"note two", body:"this is my second note"}
]

let notes_list = document.querySelector(".notes_list")
let textarea_element = document.querySelector("textarea")
let save_button = document.querySelector("#save_button")
// save the textarea value as the note.body in an array, prompts user for a title, adds the title to the aside list
function save_note(event) {
    if (event.target.textContent === "Save" && textarea_element.value !== "") {
        do {note_title = prompt("What is the note title? (cannot be blank)")} while (note_title === "")
        let note_body = textarea_element.value
        let note_object = {title: note_title, body: note_body}
        notesArray.push(note_object)
        let newli = document.createElement("li")
        newli.textContent = note_title
        notes_list.appendChild(newli)
    }
}
save_button.addEventListener("click",save_note)
// when li item is clicked will check the noteArray for the matching title and body and display the body in the textarea
function note_opener(event) {
    for (let note of notesArray) {
        if (event.target.textContent === note.title) {
            textarea_element.value = note.body
        }
    }
}
notes_list.addEventListener("click",note_opener)