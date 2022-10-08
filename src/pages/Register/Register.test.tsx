import { render, screen } from '@testing-library/react';
import Register from './Register';

describe('Register screen', () => {
  test('Title must be correct', () => {
    render(<Register />);
    expect(screen.getByText(/Создание аккаунта/)).toBeInTheDocument();
  });
});
