import React, { useState } from 'react';
import styles from './Login.module.css';
import LoginForm from './components/LoginForm';
import useAuth from 'hooks/useAuth';

export interface LoginResponse {
  email: string;
  password: string;
}

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const { login } = useAuth();

  const onLogin = async ({ email, password }: LoginResponse) => {
    setLoading(true);
    await login(email, password);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h2>ВХОД В АККАУНТ</h2>
      <LoginForm isLoading={isLoading} onSubmit={onLogin} />
    </div>
  );
};

export default Login;
