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
            <div className='login-info-component'>
                <div className='login-text'>
                    <p>Login</p>
                </div>
                <div className='username-component'> 
                    <label for='username'>Nome de usuário: </label> 
                    <input type='text' id='username-input' name='username-input'></input>
                </div>
                <div className='password-component'>
                    <label for='password'>Senha: </label>
                    <input type='password' id='password-input' name='password-input'></input>
                </div>
            </div>
        </div>
    );
}

export default Login;