import React, { useState } from 'react';
import styles from './Login.module.css';
import LoginForm from './components/LoginForm';

interface Response {
  email: string;
  password: string;
}

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const onLogin = ({ email, password }: Response) => {
    console.log({ email, password });
    setLoading(true);
  };

  return (
    <div className={styles.container}>
      <h2>ВХОД В АККАУНТ</h2>
      <LoginForm isLoading={isLoading} onSubmit={onLogin} />
    </div>
  );
};

export default Login;
