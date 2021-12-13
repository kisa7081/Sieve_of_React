import { render, screen } from '@testing-library/react';
import PrimesInput from './PrimesInput';

test('PrimesInput', () => {
  render(<PrimesInput />);
  const linkElement = screen.getByTestId(/PrimesInput/i);
  expect(linkElement).toBeInTheDocument();
});