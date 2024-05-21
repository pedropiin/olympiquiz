import React from 'react';
import '../pages/Login.css';


//TODO: Inserir símbolo login antes da label do username e senha
const Login = () => {
    return (
        <div className='container'>
            <div className='home-text'>
                <p>OlympiQuiz</p>
            </div>
            <button className='back-button'>Voltar</button>
            <div className='form'>
                <div className='signup-container'>
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
                </div>
                <div className='login-container'>
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
                </div>
            </div>
        </div>
    );
}

export default Login;