document.querySelector('#login-form').addEventListener('submit', login);


// utility functions
function accessStorage(value) {
    try {
        let storage = JSON.parse(localStorage.getItem('appStorage'));
        return storage[value];
    }
    catch (error){
        console.error(`${value} does not exist. || ${error}`)
    }
}

function createErrorSection(text) {
    let errorDiv = document.createElement('p');
    errorDiv.innerHTML = text;
    errorDiv.style.color= 'red';
    return errorDiv
}

function login(e){
    e.preventDefault();

    // TODO: set cookie/token per session || destroy cookie on logout
    

    let emailValue = document.querySelector('#email-login').value
    let passwordValue = document.querySelector('#password-login').value
    
    if (emailValue == accessStorage('email') && passwordValue == accessStorage('password')){
        window.location.replace('home.html');
        displayAllPosts();
    }
    else {
        let error = createErrorSection("Invalid credentials")
        document.querySelector("#login-form").append(error)
    }
}





