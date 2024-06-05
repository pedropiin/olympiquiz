import React from 'react';
import { validateSignUp } from '../getLogin';
import './SignUp.css';

export const SignUp = () => {
    return (
        <div className='signup-container' id='signup-container'>
            <div className='signup-text'>
                <h1>Sign Up</h1>
            </div>
            <div className='email-signup-container'>
                <label for='email-signup-input'>Email:</label>
                <input type='text' id='email-signup-input' name='email-signup-input'></input>
            </div>
            <div className='username-signup-container'>
                <label for='username-signup-input'>Username:</label>
                <input type='text' id='username-signup-input' name='username-signup-input'></input>
            </div>
            <div className='password-signup-container'>
                <label for='password-signup-input'>Password:</label>
                <input type='password' id='password-signup-input' name='password-signup-input'></input>
            </div>
            <button className='signup-button' id="signup-button" onClick={validateSignUp}>sign up</button>
        </div>
    )
}