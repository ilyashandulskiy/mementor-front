import { render, screen } from '@testing-library/react';
import EditProfile from './EditProfile';

describe('Login screen', () => {
  test('title must be correct', () => {
    render(<EditProfile />);
    expect(screen.getByText(/Вход в аккаунт/)).toBeInTheDocument();
  });
});
