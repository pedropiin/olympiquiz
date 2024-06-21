import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import { selectRandomAthlete } from './select-random-player';
import { BrowserRouter } from 'react-router-dom';
import { passwordChecker } from './passwordChecker';
import { getAthleteInput } from './playOlimpiquiz';
import { isNameInDatabase } from './dataLoader';
import path from 'path';

test('renders Olympiquiz title', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/OlympiQuiz/i);
  expect(linkElement).toBeInTheDocument();
});

test('should return a string when loading the athletes csv', async () => {
  const result = await selectRandomAthlete('../handling_data/data/medalists.csv');
  expect(result).not.toBeNull(); 
});

describe ('isPasswordValid', () => {
  const maxLength = 12;
  const minLength = 4;
  test('should return true for a password within the allowed length', () => {
    expect(passwordChecker('senhavalida',maxLength,minLength)).toBe(true); //len 11
  });
  test('should return true for a password with the maximum length', () => {
    expect(passwordChecker('aa0123456789',maxLength, minLength)).toBe(true); //len 12
  });
  test('should return true for a password with the min length', () => {
    expect(passwordChecker('chok',maxLength, minLength)).toBe(true); //len 4
  });
  test('should return false for a password exceeding the maximum length', () => {
    expect(passwordChecker('senhainvalida',maxLength, minLength)).toBe(false); //len 13
  });
  test('should return false for a password exceeding the minimum length', () => {
    expect(passwordChecker('abc',maxLength, minLength)).toBe(false); //len 3
  });
  test('should return false for an empty password', () => {
    expect(passwordChecker('',maxLength, minLength)).toBe(false); //len 0
  });

});


// teste que verifica a funcionalidade de buscar um nome aleatório, particionamento(saída): nome dentro da lista ou não, valor limite: tamanho da string entre, menor nome para maior nome
test('should return true if the random athlete belongs to the list and his name length is between 5 and 40 characters', async () => {
  const result = await selectRandomAthlete('../handling_data/data/medalists.csv');
  const nameFound = await isNameInDatabase(result.name, '../handling_data/data/medalists.csv');
  expect(nameFound).toBe(true); 
  expect(result.name.length).toBeGreaterThanOrEqual(5);
  expect(result.name.length).toBeLessThanOrEqual(40);
});

// teste que verifica a funcionalidade da rotina de buscar os medalistas na lista medalists-easy, particionamento: medalistas e não medalistas e sem números, valor limite: min 11 caracteres, max 19 caracteres
describe('isSearchingWorking', () => {
  test('should return true for a medalist inside the list', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Michael Phelps'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(true);
  });
  test('should return false for a medalist with numbers on his name', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Mich4el Phelps'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(false);
  });
  test('should return true for a medalist inside the list which name has minimum length (11 characters) and no numbers/special characters', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Mayra Silva'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(true);
  });
  test('should return true for a medalist inside the list which name has maximum length (19 characters) and no numbers/special characters', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Gilberto Filho Giba'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(true);
  });
  test('should return false for a medalist inside the list which name has less than minimum length (11 characters) and no numbers/special characters', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Mayra Silv'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(false);
  });
  test('should return false for a medalist inside the list which name has more than maximum length (19 characters) and no numbers/special characters', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Gilberto Filho Gibao'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(false);
  });
  test('should return false for a name that has special characters', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Simone Biles#'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(false);
  });
  test('should return false for a name not on the list', async () => {
    const nameFound = await isNameInDatabase(getAthleteInput('Bruno Cafeo'), '../../handling_data/data/medalists-easy.csv');
    expect(nameFound).toBe(false);
  });
});

