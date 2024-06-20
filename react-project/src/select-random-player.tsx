export type Athlete = { 
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
    filePath = "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json";
} else {
    filePath = "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists.json";
}
//const headers = ["ID", "NAME", "SEX", "AGE", "COUNTRY", "YEAR", "SPORT", "MEDALS"];

export async function selectRandomAthlete(filePath: string): Promise<Athlete | null> {
    try {
        const response = await fetch(filePath);
        const athletes = await response.json();


        const randomIndex = Math.floor(Math.random() * athletes.length);
        return athletes[randomIndex];
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
