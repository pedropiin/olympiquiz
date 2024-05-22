import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';
import { selectRandomAthlete } from './select-random-player';

test('renders Olympiquiz title', () => {
  render(<Home />);
  const linkElement = screen.getByText(/OlympiQuiz/i);
  expect(linkElement).toBeInTheDocument();
});

test('should return a string when loading the athletes csv', async () => {
  const result = await selectRandomAthlete('../handling_data/data/medalists.csv');
  expect(result).not.toBeNull(); 
});