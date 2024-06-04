import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Login.css';
import { validateLogin } from '../../getLogin';
import { validateSignUp } from '../../getLogin';
import { deleteUsers } from '../../getLogin';

//TODO: Inserir símbolo login antes da label do username e senha
const Login = () => {
    return (
        <div className='container'>
            <div className='home-text'>
                <p>OlympiQuiz</p>
            </div>
            <button className='delete-users-button' id='delete-users-button' onClick={deleteUsers}>DELETE TEST</button>
            <Link to={'/'}>
                <button className='back-button'>Back</button>
            </Link>
            <div className='forms-container'>

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
                <p id='error-message'>Replace Me</p>
            </div>
            <div className='success-container'>
                <p id='success-message'>Replace Me</p>
            </div>
        </div>
    );
}

export default Login;