import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login screen', () => {
  test('title must be correct', () => {
    render(<Login />);
    expect(screen.getByText(/Вход в аккаунт/)).toBeInTheDocument();
  });
});
