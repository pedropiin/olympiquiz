import { json } from "react-router-dom";

function getUsers() {
    const users = localStorage.getItem('users');
    if (users) {
        return JSON.parse(users);
    } else {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function showError(error) {
    const errorMsg = document.getElementById("error-message");
    errorMsg.innerText = error;
    errorMsg.style.opacity = 0;
    errorMsg.style.opacity = 1;
}

function authenticationSucess(message) {
    const successMsg = document.getElementById("success-message");
    successMsg.innerText = message;
    successMsg.style.opacity = 1;
    setTimeout(() => {
        window.location.replace("/");
    }, 1000);
}

export function deleteUsers(event) {
    event.preventDefault();
    localStorage.removeItem('users');
}

export function validateLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username-login-input").value;
    const passwordInput = document.getElementById("password-login-input").value;

    if (usernameInput === "" || passwordInput === "") {
        showError("Please fill in both the username and password inputs.")
    } else {
        const listUsers = getUsers();
        const user = listUsers.find(user => user.username === usernameInput && user.password === passwordInput);
    
        if (user) {
            authenticationSucess("Login successful!")
        } else {
            showError("Username or Password incorret. Please try again.")
        }
    }

}

export function validateSignUp(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email-signup-input").value;
    const usernameInput = document.getElementById("username-signup-input").value;
    const passwordInput = document.getElementById("password-signup-input").value;
    
    if (emailInput === "" || usernameInput === "" || passwordInput === "") {
        showError("Please fill in all the blank input spaces.");
    } else if (!emailInput.includes('@')) {
        showError("Please use a valid email.");
    } else {
        const listUsers = getUsers();
        const usedEmail = listUsers.some(user => user.email === emailInput);
        const usedUsername = listUsers.some(user => user.username === usernameInput);
    
        if (usedEmail) {
            showError("Email already in use. Please log in or create an account using a different email.");
        } else if (usedUsername) {
            showError("Username already in use. Please log in or create an account using a different username.")
        } else {
            listUsers.push({email: emailInput, username: usernameInput, password: passwordInput});
            saveUsers(listUsers);
            authenticationSucess("Account creation successful!")
        }
    }
} 

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("signin-button");
    const signUpButton = document.getElementById("signup-button");
    const deleteUsersButton = document.getElementById("delete-users-button");

    if (loginButton) {
        loginButton.addEventListener("click", validateLogin);
    }

    if (signUpButton) {
        signUpButton.addEventListener("click", validateSignUp);
    }

    if (deleteUsersButton) {
        deleteUsersButton.addEventListener("click", deleteUsers);
    }
})