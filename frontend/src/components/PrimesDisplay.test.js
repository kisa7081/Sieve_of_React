import { render, screen } from '@testing-library/react';
import PrimesDisplay from './PrimesDisplay';

test('PrimesDisplay', () => {
  render(<PrimesDisplay />);
  const linkElement = screen.getByTestId(/PrimesDisplay/i);
  expect(linkElement).toBeInTheDocument();
});