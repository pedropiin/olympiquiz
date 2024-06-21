import React, { useState } from 'react';
import playingImg from "../assets/playing.png";
import "./Playing.css";
import PlayingTable from "../components/PlayingTable";
import BackButton from '../components/BackButton';
import SearchBar from "../components/SearchBar";

export const Playing = () => {
  const [input, setInput] = useState('');

  const updateInput = async (input) => {
    setInput(input);
    console.log("esse é o input", input)
  
  };

  return (
    <div className="container">
      <header className="header">
        <img src={playingImg} className="image" alt="OlympiQuiz" />
        <BackButton />
      </header>
        <div className='search-bar'>
              <SearchBar input={input} onChange={updateInput} />
        </div>
        <div className='playing-table'>
            <PlayingTable />
        </div>
      
    </div>
  );
};

export default Playing;
