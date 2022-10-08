import { render, screen } from '@testing-library/react';
import Register from './Register';

describe('Test login screen', () => {
  test('must display text', () => {
    render(<Register />);
    expect(screen.getByText(/screen/)).toBeInTheDocument();
  });
});
