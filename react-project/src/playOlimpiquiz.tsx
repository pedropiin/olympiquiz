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

export async function play(input, justStarted) {
    let playerAttempts: Athlete[] = [];
    //let countAttempts = 0;
    if(justStarted == 1){
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
                console.log("Congratulations!");

            } else { // Player got the wrong answer
                //countAttempts++;
                console.log("Wrong Athlete from input");
                playerAttempts.push(inputAthlete);
                
            }
        }
    } else {
        console.log("Error while selecting random athlete");
    }
    return gameAthlete;
}


