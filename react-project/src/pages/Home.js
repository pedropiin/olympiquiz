import React from 'react';
import '../pages/Home.css'; // Certifique-se de que o caminho para o CSS está correto
import homeImage from '../assets/home.png'; // Caminho relativo para a imagem
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <img src={homeImage} alt="Home" className="home-image" />
        <div className='welcome-text'> <p>Welcome to </p></div>
        <div className='olympiquiz-text'> <p>OlympiQuiz</p></div>
        <button className="start-button">Start</button>
        <Link to="/login">
          <button className="sign-in-button">Sign in</button>
        </Link>
    </div>
  );
}

export default Home;
