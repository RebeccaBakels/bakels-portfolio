import { render, screen } from '@testing-library/react';
import App from './App';

test('renders github button', () => {
  render(<App />);
  const linkElement = screen.getByText(/github/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders linkedin button', () => {
  render(<App />);
  const linkElement = screen.getByText(/linkedin/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders resume button', ()=>{
  render(<App/>)
  const linkElement = screen.getByText(/resume/i);
  expect(linkElement).toBeInTheDocument();
})