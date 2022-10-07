import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Test login screen', () => {
  test('must display text', () => {
    render(<Login />);
    expect(screen.getByText(/screen/)).toBeInTheDocument();
  });
});
