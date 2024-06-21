import React from 'react';
import '../pages/Login.css';
import { deleteUsers } from '../getLogin';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import BackButton from '../components/BackButton';

//TODO: Inserir símbolo login antes da label do username e senha
const Login = () => {
    return (
        <div className='container'>
            <div className='home-text'>
                <p>OlympiQuiz</p>
            </div>
            <button className='delete-users-button' id='delete-users-button' onClick={deleteUsers}>DELETE TEST</button>
            <BackButton />
            <div className='forms-container'>
                <SignUp />
                <SignIn />
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