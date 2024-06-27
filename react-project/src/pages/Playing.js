import React, { useState } from 'react';
import playingImg from "../assets/playing.png";
import "./Playing.css";
import PlayingTable from "../components/PlayingTable";
import BackButton from '../components/BackButton';
import SearchBar from "../components/SearchBar";
import dataService from "../components/dataService";
import Play from "../playOlimpiquiz.tsx";  // Aqui, corrigimos a importação de Play

let justStarted;

const Playing = () => {
  const [input, setInput] = useState('');
  const [athletes, setAthletes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [chosenAthleteState, setChosenAthleteState] = useState({});
  const [playing, setPlaying] = useState(false);

  const updateInput = async (input) => {
    setInput(input);
    if (input.length > 0) {
      const results = await dataService.fetchData(input);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const addAthlete = async (name) => {
    const results = await dataService.fetchData(name);
    console.log(results);
    console.log(athletes);
    if (athletes.length === 0) {
      justStarted = 1; //se acabou de comecar o jogo, achar um atleta aleatório
    } else {
      justStarted = 0; //se já está rolando o jogo, não precisa sortear
    }
    setPlaying(true); // Ativa o componente Play
  };

  const handleChooseAthlete = (athlete) => {
    setChosenAthleteState(athlete);
    setPlaying(false); // Desativa o componente Play após escolher o atleta
  };

  return (
    <div className="container">
      <header className="header">
        <img src={playingImg} className="image" alt="OlympiQuiz" />
        <BackButton />
      </header>
      <div className="content">
        <div className="search-bar">
          <SearchBar
            input={input}
            onChange={updateInput}
            addAthlete={addAthlete}
            suggestions={suggestions}
          />
        </div>
        <div className="playing-table">
          <PlayingTable athletes={athletes} chosenAthlete={chosenAthleteState}/>
        </div>
      </div>
      {playing && (
        <Play
          initialInput={input}
          justStarted={justStarted}
          onChooseAthlete={handleChooseAthlete}
        />
      )}
    </div>
  );
};

export default Playing;
