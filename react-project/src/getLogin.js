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

// Temporary function to use only in testing phase.
// Remember to delete it before deploying
export function deleteUsers(event) {
    event.preventDefault();
    localStorage.removeItem('users');
}

async function sha256(string) {
    const encoder = new TextEncoder();
    const decodedString = encoder.encode(string);

    const hashString = await crypto.subtle.digest("SHA-256", decodedString);
    const hashArr = Array.from(new Uint8Array(hashString));
    const hashHex = hashArr.map((bytes) => bytes.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

function genSalt(length) {
    const arr = new Uint8Array(length);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, byte => byte.toString(16).padStart(2, '0')).join('');
}

export async function validateLogin(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username-login-input").value;
    const passwordInput = document.getElementById("password-login-input").value;

    if (usernameInput === "" || passwordInput === "") {
        showError("Please fill in both the username and password inputs.")
    } else {
        const listUsers = getUsers();
        const user = listUsers.find(user => user.username === usernameInput);
    
        if (user) {
            const hashInput = await sha256(passwordInput.concat(user.salt));
            if (user.hash === hashInput) {
                authenticationSucess("Login successful!")
            } else {
                showError("Password incorrect. Please try again.")
            }
        } else {
            showError("Username incorrect. Please try again.")
        }
    }

}

export async function validateSignUp(event) {
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
            var saltNewUser = genSalt(16);
            const hashPassword = await sha256(passwordInput.concat(saltNewUser));
            listUsers.push({email: emailInput, username: usernameInput, salt: saltNewUser, hash: hashPassword});
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