import React, { useState } from 'react';
import styles from './Login.module.css';
import LoginForm from './components/LoginForm';
import useAuth from 'hooks/useAuth';

interface Response {
  email: string;
  password: string;
}

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const { login } = useAuth();

  const onLogin = ({ email, password }: Response) => {
    setLoading(true);
    login(email, password);
  };

  return (
    <div className={styles.container}>
      <h2>ВХОД В АККАУНТ</h2>
      <LoginForm isLoading={isLoading} onSubmit={onLogin} />
    </div>
  );
};

export default Login;
