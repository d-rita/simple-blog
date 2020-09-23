document.querySelector('#signup-form').addEventListener('submit', signUp);

function signUp(e) {
    e.preventDefault()
    let firstNameValue = document.querySelector('#first-name').value
    let surnameValue = document.querySelector('#surname').value
    let emailValue = document.querySelector('#email').value
    let passwordValue = document.querySelector('#password').value

    let newUser = {
        firstName: firstNameValue,
        surname: surnameValue,
        email: emailValue,
        password: passwordValue,
        posts: []
    }
    localStorage.setItem("appStorage", JSON.stringify(newUser));
    window.location.replace('login.html');

}
