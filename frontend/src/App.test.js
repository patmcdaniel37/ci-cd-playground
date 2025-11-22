import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD Playground heading', () => {
  render(<App />);
  const heading = screen.getByText(/CI\/CD Playground/i);
  expect(heading).toBeInTheDocument();
});

test('shows loading state initially', () => {
  render(<App />);
  const loading = screen.getByText(/Loading/i);
  expect(loading).toBeInTheDocument();
});