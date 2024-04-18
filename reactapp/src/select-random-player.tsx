import * as fs from "fs";
import * as path from "path";
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

const filePath = path.resolve(_dirname, "../../handling_data/data/medalists.csv");
const headers = ["ID", "NAME", "SEX", "AGE", "COUNTRY", "YEAR", "SPORT", "MEDALS"];
const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
