const emailTest = "email"
const userTest = "user"
const passTest = "senha"

export function validateLogin(event) {
    event.preventDefault();
    const usernameLogin = document.getElementById("username-login-input").value;
    const passwordLogin = document.getElementById("password-login-input").value;
    const errorMsg = document.getElementById("error-message");

    if (usernameLogin === userTest && passwordLogin === passTest) {
        errorMsg.style.opacity = 0;
    } else {
        errorMsg.innerText = "Username or Password incorret. Please try again.";
        errorMsg.style.opacity = 1;
    }
}

export function validateSignUp(event) {
    event.preventDefault();
    const emailSignUp = document.getElementById("email-signup-input").value;
    const usernameSignUp = document.getElementById("username-signup-input").value;
    const passwordSignUp = document.getElementById("password-signup-input").value;
    const errorMsg = document.getElementById("error-message");
    
    if (emailSignUp === emailTest && usernameSignUp === userTest && passwordSignUp === passTest) {
        errorMsg.style.opacity = 0;
    } else {
        errorMsg.innerText = "Username or Email already in use. Please Log In or create an account using different information.";
        errorMsg.style.opacity = 1;
    }
} 

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("signin-button");
    const signUpButton = document.getElementById("signup-button");

    if (loginButton) {
        loginButton.addEventListener("click", validateLogin);
    }

    if (signUpButton) {
        signUpButton.addEventListener("click", validateSignUp);
    }
})