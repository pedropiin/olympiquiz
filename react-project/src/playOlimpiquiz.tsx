// playOlimpiquiz.tsx
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Athlete } from "./select-random-player";
import { selectRandomAthlete } from "./select-random-player";
import { useNavigate } from "react-router-dom";

let filePath =
  "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json";

export async function getAthleteInput(input) {
  try {
    let inputAthlete;

    const response = await fetch(filePath);
    const medalists = await response.json();

    medalists.forEach((athlete) => {
      if (athlete.name === input) {
        inputAthlete = athlete;
      }
    });

    return inputAthlete;
  } catch (error) {
    console.log("Error fetching json data ", error);
    return null;
  }
}

const Play = ({ initialInput, justStarted }) => {
  const [input, setInput] = useState(initialInput);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [attempts, setAttempts] = useState<Athlete[]>([]);
  const navigate = useNavigate();
  const [gameAthlete, setGameAthlete] = useState<Athlete | null>(null);

  useEffect(() => {
    const fetchRandomAthlete = async () => {
      if (justStarted) {
        const athlete = await selectRandomAthlete(filePath);
        setGameAthlete(athlete);
      }
    };
    fetchRandomAthlete();
  }, [justStarted]);

  const openModal = (message) => {
    setModalMessage(message);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onMenu = () => {
    navigate("/");
  };

  const resetGame = () => {
    setInput("");
    setAttempts([]);
    setModalIsOpen(false);
    setGameAthlete(null);
  };

  const handlePlay = async () => {
    if (gameAthlete) {
      console.log(input);
      let inputAthlete = await getAthleteInput(input);
      if (inputAthlete) {
        if (inputAthlete.name === gameAthlete.name) {
          openModal("Congratulations!");
        } else {
          setAttempts((prevAttempts) => [...prevAttempts, inputAthlete]);
          if (attempts.length >= 5) {
            openModal("Game over! Try again");
          }
        }
      }
    } else {
      console.log("Error while selecting random athlete");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handlePlay}>Jogar</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Resultado"
      >
        <h2>{modalMessage}</h2>
        <button onClick={resetGame}>Tentar Novamente</button>
        <button onClick={onMenu}>Ir para o Menu</button>
      </Modal>
    </div>
  );
};

export default Play;
