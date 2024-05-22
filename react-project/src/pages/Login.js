import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Login.css';
import { validateLogin } from '../getLogin';
import { validateSignUp } from '../getLogin';

//TODO: Inserir símbolo login antes da label do username e senha
const Login = () => {
    return (
        <div className='container'>
            <div className='home-text'>
                <p>OlympiQuiz</p>
            </div>
            <Link to={'/'}>
                <button className='back-button'>Back</button>
            </Link>
            <div className='forms-container'>
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
            </div>
            <div className='error-container'>
                <p id='error-message'>Testando essa merda</p>
            </div>
        </div>
    );
}

export default Login;