import React from 'react';
import '../pages/Login.css';


//TODO: Inserir símbolo login antes da label do username e senha
const Login = () => {
    return (
        <div className='login-container'>
            <div className='home-text'>
                <p>OlympiQuiz</p>
            </div>
            <button className='back-button'>Voltar</button>
            <div className='login-info-container'>
                <div className='login-text'>
                    <h1>Login</h1>
                </div>
                <div className='username-container'> 
                    <label for='username'>Nome de usuário: </label> 
                    <input type='text' id='username-input' name='username-input' required></input>
                </div>
                <div className='password-container'>
                    <label for='password'>Senha: </label>
                    <input type='password' id='password-input' name='password-input' required></input>
                </div>
            </div>
        </div>
    );
}

export default Login;