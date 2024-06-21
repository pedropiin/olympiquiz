// dataLoader.js
import fs from 'fs';
import csv from 'csv-parse';
import path from 'path';

export const loadAthleteNames = (filePath) => {
  const athletes = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
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
