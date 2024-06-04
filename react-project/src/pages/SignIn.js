import React from "react";
import { validateLogin } from '../getLogin';
import './SignIn.css';

export const SignIn = () => {
    return (
        <div className='login-container' id='login-container'>
            <div className='login-text'>
                <h1>Login</h1>
            </div>
            <div className='username-login-container'>
                <label for='username-login-input'>Username:</label>
                <input type='text' id='username-login-input' name='username-login-input'></input>
            </div>
            <div className='password-login-container'>
                <label for='password-login-input'>Password:</label>
                <input type='password' id='password-login-input' name='password-login-input'></input>
            </div>
            <button className='signin-button' id="signin-button" onClick={validateLogin}>sign in</button>
        </div>
    )
}