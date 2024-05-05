import { render, screen } from '@testing-library/react';
import App from './App';
import { selectRandomAthlete } from './select-random-player';

test('renders Olympiquiz title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Olympiquiz!/i);
  expect(linkElement).toBeInTheDocument();
});

test('should return a string when loading the athletes csv', async () => {
  const result = await selectRandomAthlete('../handling_data/data/medalists.csv');
  expect(result).not.toBeNull(); 
});