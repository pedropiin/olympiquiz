import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
import { selectRandomAthlete } from './select-random-player';
import { BrowserRouter } from 'react-router-dom';
import { passwordChecker } from './passwordChecker';
import { getAthleteInput } from './playOlimpiquiz';
import { loadAthleteNames } from './dataLoader'; // Importa a função para carregar os nomes

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

describe('isPasswordValid', () => {
  const maxLength = 12;
  const minLength = 4;
  test('should return true for a password within the allowed length', () => {
    expect(passwordChecker('senhavalida', maxLength, minLength)).toBe(true); // len 11
  });
  test('should return true for a password with the maximum length', () => {
    expect(passwordChecker('aa0123456789', maxLength, minLength)).toBe(true); // len 12
  });
  test('should return true for a password with the min length', () => {
    expect(passwordChecker('chok', maxLength, minLength)).toBe(true); // len 4
  });
  test('should return false for a password exceeding the maximum length', () => {
    expect(passwordChecker('senhainvalida', maxLength, minLength)).toBe(false); // len 13
  });
  test('should return false for a password exceeding the minimum length', () => {
    expect(passwordChecker('abc', maxLength, minLength)).toBe(false); // len 3
  });
  test('should return false for an empty password', () => {
    expect(passwordChecker('', maxLength, minLength)).toBe(false); // len 0
  });
});

describe('random athlete tests', () => {
  let medalists;

  beforeAll(async () => {
    medalists = await loadAthleteNames('../handling_data/data/medalists.csv');
  });

  test('should return true if the random athlete belongs to the list and his name length is between 5 and 40 characters', async () => {
    const result = await selectRandomAthlete('../handling_data/data/medalists.csv');
    expect(medalists).toContain(result);
    expect(result.length).toBeGreaterThanOrEqual(5);
    expect(result.length).toBeLessThanOrEqual(40);
  });
});

describe('isSearchingWorking', () => {
  let medalists;

  beforeAll(async () => {
    medalists = await loadAthleteNames('../handling_data/data/medalists-easy.csv');
  });

  test('should return true for a medalist inside the list', () => {
    expect(medalists).toContain(getAthleteInput('Michael Phelps'));
  });
  test('should return false for a medalist with numbers on his name', () => {
    expect(medalists).not.toContain(getAthleteInput('Mich4el Phelps'));
  });
  test('should return true for a medalist inside the list which name has minimum length (11 characters) and no numbers/special characters', () => {
    expect(medalists).toContain(getAthleteInput('Mayra Silva'));
  });
  test('should return true for a medalist inside the list which name has maximum length (19 characters) and no numbers/special characters', () => {
    expect(medalists).toContain(getAthleteInput('Gilberto Filho Giba'));
  });
  test('should return false for a medalist inside the list which name has less than minimum length (11 characters) and no numbers/special characters', () => {
    expect(medalists).not.toContain(getAthleteInput('Mayra Silv'));
  });
  test('should return false for a medalist inside the list which name has more than maximum length (19 characters) and no numbers/special characters', () => {
    expect(medalists).not.toContain(getAthleteInput('Gilberto Filho Gibao'));
  });
  test('should return false for a name that has special characters', () => {
    expect(medalists).not.toContain(getAthleteInput('Simone Biles#'));
  });
  test('should return false for a name not on the list', () => {
    expect(medalists).not.toContain(getAthleteInput('Bruno Cafeo'));
  });
});
