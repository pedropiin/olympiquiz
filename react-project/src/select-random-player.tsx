import * as fs from "fs";
import * as path from 'path';
import { parse } from 'csv-parse';

type Athlete = { 
    id: number;
    name: string;
    sex: string;
    age: number;
    country: string;
    year: number;
    sport: string;
    num_medals: number;
};

const easyMode: boolean = false;
let filePath;
if (easyMode) {
    filePath = path.resolve(__dirname, "../../handling_data/data/medalists-easy.csv");
} else {
    filePath = path.resolve(__dirname, "../../handling_data/data/medalists.csv");
}
//const headers = ["ID", "NAME", "SEX", "AGE", "COUNTRY", "YEAR", "SPORT", "MEDALS"];

async function selectRandomAthlete(filePath: string): Promise<Athlete | null> {
    try {
        const arrayAthletes: Athlete[] = [];
        const parser = fs
            .createReadStream(filePath)
            .pipe(parse({
            }));
        
            for await (const atleta of parser) {
                arrayAthletes.push(atleta)
            }

            const randomIndex = Math.floor(Math.random() * arrayAthletes.length);
            return arrayAthletes[randomIndex];
    } catch (error) {
        console.log("Erro no parseamento do arquivo: ", error);
        return null;
    }
}

selectRandomAthlete(filePath).then(randomAthlete => {
    if (randomAthlete) {
        console.log(randomAthlete[1]); // nome do atleta aleatório
    } else {
        console.log("Deu ruim");
    }
})
