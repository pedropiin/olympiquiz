// dataLoader.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export const loadAthleteNames = async (filePath) => {
  const athletes = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.resolve(__dirname, filePath))
      .pipe(csv())
      .on('data', (data) => {
        athletes.push(data.name);
      })
      .on('end', () => {
        resolve(athletes);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
