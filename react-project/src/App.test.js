import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import { selectRandomAthlete } from './select-random-player';
import { BrowserRouter } from 'react-router-dom';
import { passwordChecker } from './passwordChecker';
import { getAthleteInput } from './playOlimpiquiz';
import path from 'path'

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
test('should return true if the random athlete belongs to the list and his name lenght is between 5 and 40 characters', async () => {
  const result = await selectRandomAthlete('../handling_data/data/medalists.csv');
  expect(result).toBeInTheDocument(path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(True); 
  expect(length(result.name) >= 5 && length(result.name) <= 40)
});

// teste que verifica a funcionalidade da rotina de buscar os medalistas na lista medalists-easy, particionamento: medalistas e não medalistas e sem números, valor limite: min 11 caracteres, max 19 caracteres
describe ('isSearchingWorking', () => {
  
  test('should return true for a medalist inside the list', async () => {
    expect(getAthleteInput("Michael Phelps") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(True);
  });
  test('should return false for a medalist with numbers on his name', async () => {
    expect(getAthleteInput("Mich4el Phelps") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(False);
  });
  test('should return true for a medalist inside the list which name has minimun lenght (11 characters) and no numbers/special characters', async () => {
    expect(getAthleteInput("Mayra Silva") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(True);
  });
  test('should return true for a medalist inside the list which name has maximum lenght (19 characters) and no numbers/special characters', async () => {
    expect(getAthleteInput("Gilberto Filho Giba") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(True);
  });
  test('should return false for a medalist inside the list which name has less than minimun lenght (11 characters) and no numbers/special characters', async () => {
    expect(getAthleteInput("Mayra Silv") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(False);
  });
  test('should return false for a medalist inside the list which name has more than maximum lenght (19 characters) and no numbers/special characters', async () => {
    expect(getAthleteInput("Gilberto Filho Gibao") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(False);
  });
  test('should return false for a name that has special characters', async () => {
    expect(getAthleteInput("Simone Biles#") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(False);
  });
  test('should return false for a name not on the list', async () => {
    expect(getAthleteInput("Bruno Cafeo") in path.resolve(__dirname, "../../handling_data/data/medalists.csv")).toBe(False);
  });

});

