// dataLoader.js
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

function isNameInDatabase(name, database) {
  const filePath = path.resolve(__dirname, database);
  let nameFound = false;

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        if (row.name === name) {
          nameFound = true;
        }
      })
      .on('end', () => {
        resolve(nameFound);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}