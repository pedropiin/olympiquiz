import React, { useState } from 'react';
import playingImg from "../assets/playing.png";
import "./Playing.css";
import PlayingTable from "../components/PlayingTable";
import BackButton from '../components/BackButton';
import SearchBar from "../components/SearchBar";
import dataService from "../components/dataService";

export const Playing = () => {
  const [input, setInput] = useState('');
  const [athletes, setAthletes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

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
    if (results.length > 0) {
      if (!athletes.some(athlete => athlete.id === results[0].id)) {
        const athlete = results[0];
        setAthletes(prevAthletes => [...prevAthletes, athlete]);
        setInput('');
        setSuggestions([]);
      } 
    }
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
          <PlayingTable athletes={athletes} />
        </div>
      </div>
    </div>
  );
};

export default Playing;
