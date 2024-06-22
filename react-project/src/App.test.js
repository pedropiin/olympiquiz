import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import { selectRandomAthlete } from './select-random-player';
import { BrowserRouter } from 'react-router-dom';
import { passwordChecker } from './passwordChecker';
import { getAthleteInput } from './playOlimpiquiz';
import { isNameInDatabase } from './dataLoader';

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
    expect(passwordChecker('senhavalida', maxLength, minLength)).toBe(true); //len 11
  });
  test('should return true for a password with the maximum length', () => {
    expect(passwordChecker('aa0123456789', maxLength, minLength)).toBe(true); //len 12
  });
  test('should return true for a password with the min length', () => {
    expect(passwordChecker('chok', maxLength, minLength)).toBe(true); //len 4
  });
  test('should return false for a password exceeding the maximum length', () => {
    expect(passwordChecker('senhainvalida', maxLength, minLength)).toBe(false); //len 13
  });
  test('should return false for a password exceeding the minimum length', () => {
    expect(passwordChecker('abc', maxLength, minLength)).toBe(false); //len 3
  });
  test('should return false for an empty password', () => {
    expect(passwordChecker('', maxLength, minLength)).toBe(false); //len 0
  });
});

// Teste que verifica a funcionalidade de buscar um nome aleatório, particionamento(saída): nome dentro da lista ou não, valor limite: tamanho da string entre, menor nome para maior nome
test('should return true if the random athlete belongs to the list and his name length is between 5 and 40 characters', async () => {
  const result = await selectRandomAthlete('../handling_data/data/medalists.csv');
  console.log('Selected athlete:', result);
  const nameFound = await isNameInDatabase(result, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists.json");
  expect(nameFound).toBe(true); 
  expect(result.name.length).toBeGreaterThanOrEqual(5);
  expect(result.name.length).toBeLessThanOrEqual(40);
});

// Teste que verifica a funcionalidade da rotina de buscar os medalistas na lista medalists-easy, particionamento: medalistas e não medalistas e sem números, valor limite: min 11 caracteres, max 19 caracteres
describe('isSearchingWorking', () => {
  test('should return true for a medalist inside the list', async () => {
    const athlete = getAthleteInput("Michael Phelps");
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(true);
  });
  
  test('should return false for a medalist with numbers on his name', async () => {
    const athlete = getAthleteInput("Mich4el Phelps");
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(false);
  });

  test('should return true for a medalist inside the list which name has minimum length (11 characters) and no numbers/special characters', async () => {
    const athlete = getAthleteInput("Mayra Silva");
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(true);
  });

  test('should return true for a medalist inside the list which name has maximum length (19 characters) and no numbers/special characters', async () => {
    const athlete = getAthleteInput("Gilberto Filho Giba");
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(true);
  });

  test('should return false for a medalist inside the list which name has less than minimum length (11 characters) and no numbers/special characters', async () => {
    const athlete = getAthleteInput("Mayra Silv");
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(false);
  });

  test('should return false for a medalist inside the list which name has more than maximum length (19 characters) and no numbers/special characters', async () => {
    const athlete = getAthleteInput("Gilberto Filho Gibao");
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(false);
  });

  test('should return false for a name that has special characters', async () => {
    const athlete = getAthleteInput("Simone Biles#");
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(false);
  });

  test('should return false for a name not on the list', async () => {
    const athlete = getAthleteInput('Bruno Cafeo');
    const nameFound = await isNameInDatabase(athlete.name, "https://raw.githubusercontent.com/pedropiin/olympiquiz/develop/handling_data/data/medalists-easy.json");
    expect(nameFound).toBe(false);
  });
});
