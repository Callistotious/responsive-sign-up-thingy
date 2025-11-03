const error = document.getElementById('error')
const errorP = error.querySelector('p')
const emailPlace = document.getElementById('email')
const success = document.getElementById('success')
const main = document.getElementById('main-part')
const form = document.getElementById('form')

function classChanger(a, b, c) {
    a.classList.replace(b, c);
}

function validateEmail(email) {
    const presentEmail = "Please fill the required field"
    const validEmail = "Please enter a valid email"
    const isValid = /^\s+@\s+$/g

    if (!email) {
        classChanger(error, 'error-hidden', 'error')
        return errorP.innerText(presentEmail);
    } else if (!isValid.test(email)) {
        classChanger(error, 'error-hidden', 'error')
        return errorP.innerText(validEmail)
    } else {
        classChanger(main, 'main-part', 'main-hidden')
        classChanger(success, 'success-hidden', 'success')
    }
}

function handleSubmit(e) {
    e.preventDefault()

    const formDataEntries = new formData(form).entries();
    const {email} = Object.fromEntries(formDataEntries);

    validateEmail(email)
}

form.addEventListener('submit', handleSubmit)