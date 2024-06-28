import React, { useState } from 'react';
import playingImg from "../assets/playing.png";
import "./Playing.css";
import PlayingTable from "../components/PlayingTable";
import BackButton from '../components/BackButton';
import SearchBar from "../components/SearchBar";
import dataService from "../components/dataService";
import { play } from "../playOlimpiquiz.tsx";
import Modal from './Modal';
let justStarted;
let chosenAthlete;

export const Playing = () => {
  const [input, setInput] = useState('');
  const [athletes, setAthletes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [chosenAthleteState, setChosenAthlete] = useState({});  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  

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
    if(athletes.length === 0){
      justStarted = 1; //se acabou de comecar o jogo, achar um atleta aleatório
    } else {
      justStarted = 0; //se já está rolando o jogo, não precisa sortear
    }
    chosenAthlete = await play(name, justStarted);
    console.log(chosenAthlete)
    if (chosenAthlete) {
      setChosenAthlete(chosenAthlete)
      if (results.length > 0) {
        if (!athletes.some(athlete => athlete.id === results[0].id)) {
          const athlete = results[0];
          setAthletes(prevAthletes => [...prevAthletes, athlete]);
          setInput('');
          setSuggestions([]);
        } 

        // Check if the guess is correct
        if (chosenAthlete.name === name) {
          setModalContent('Congratulations!');
          setModalIsOpen(true);
        } else {
          setGuessCount(prevCount => prevCount + 1);
          if (guessCount >= 5) {  // Check if it's the 6th attempt
            setModalContent('Game Over!');
            setModalIsOpen(true);
            setGuessCount(0);  // Reset the guess count
          } 
        }
      }
    }
    else {
      console.log("Its over!")
    }
    console.log("chosen athlete: " + chosenAthleteState.name)
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
          <PlayingTable athletes={athletes} chosenAthlete={chosenAthlete}/>
        </div>
        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <p>{modalContent}</p>
        </Modal>
      </div>
    </div>
  );
};

export default Playing;
