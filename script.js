let footer = document.querySelector("footer");
const currentDate = new Date();
const year = currentDate.getFullYear();
const formButton = document.getElementById("form-button")
const form = document.querySelector("form");


function changeTheme() {
    
}

function fillForm() {
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block"
    }
}

footer.innerHTML = `&copy;${year} Rilvo.com`;