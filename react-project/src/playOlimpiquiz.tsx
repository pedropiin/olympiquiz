import React, { useState } from "react";
import Modal from "react-modal";
import { Athlete } from "./select-random-player.tsx";
import { selectRandomAthlete } from "./select-random-player.tsx";

let filePath = "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json";
let gameAthlete;

export async function getAthleteInput(input) {
    try {
        let inputAthlete;

        const response = await fetch(filePath);
        const medalists = await response.json();

        medalists.forEach(athlete => {
            if (athlete.name === input) {
                inputAthlete = athlete;
            }
        })

        return inputAthlete;
    } catch (error) {
        console.log("Error fetching json data ", error);
        return null;
    }
}

export async function play(initialInput, justStarted) {
    const [input, setInput] = useState(initialInput);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const[Attempts, setAttempts] = useState<Athlete[]>([]);

    const openModal = (message: string) => {
        setModalMessage(message);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const onMenu = () => {
        
    }
    
    const resetGame = () => {
        initialInput = "";
        setInput(initialInput);
        setAttempts([]);
        setModalIsOpen(false);
        gameAthlete = undefined
    }

    if(justStarted){
        gameAthlete = await selectRandomAthlete(filePath);
    }
    if (gameAthlete){
        console.log(gameAthlete.name);
    }
    if (gameAthlete) {
        // input should be received from integrated function with search bar
        // yet to be implemented. For now, it's hardcoded.
        console.log(input);
        let inputAthlete = await getAthleteInput(input);
        if (inputAthlete) {
            if (inputAthlete.name === gameAthlete.name) { // Player got the right answer
                openModal("Congratulations!");

            } else { // Player got the wrong answer
                setAttempts(prevAttempts => [...prevAttempts, inputAthlete]);
                if (Attempts.length >= 5) {
                    openModal("Congratulations!");
                }
                
            }
        }
    } else {
        console.log("Error while selecting random athlete");
    }


    return ( 
        <div>
            <input>
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            </input>
            <button onClick={() => play(input, justStarted)}>Jogar</button>
            <Modal>
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Resultado"

                <h2>{modalMessage}</h2>
                <button onClick={resetGame}>Tentar Novamente</button>
                <button onClick={onMenu}>Tentar Novamente</button>
            </Modal>
        </div>
    );
}


