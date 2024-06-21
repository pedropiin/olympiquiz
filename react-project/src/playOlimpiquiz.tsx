import { Athlete } from "./select-random-player.tsx";
import { selectRandomAthlete } from "./select-random-player.tsx";

let filePath = "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json";

async function getAthleteInput(input) {
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

export async function play(setAthletes) {
    let playerAttempts: Athlete[] = [];
    //let countAttempts = 0;
    let gameAthlete = await selectRandomAthlete(filePath);

    if (gameAthlete) {
        // input should be received from integrated function with search bar
        // yet to be implemented. For now, it's hardcoded.
        let input = "Michael Phelps";
        let inputAthlete = await getAthleteInput(input);

        if (inputAthlete.name === gameAthlete.name) { // Player got the right answer
            console.log("Congratulations!");
        } else { // Player got the wrong answer
            //countAttempts++;
            console.log("Wrong Athlete from input");
            playerAttempts.push(inputAthlete);
        }
    } else {
        console.log("Error while selecting random athlete");
    }
}


