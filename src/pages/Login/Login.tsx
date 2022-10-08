import React, { useState } from 'react';
import styles from './Login.module.css';
import LoginForm from './components/LoginForm';
import useApi from 'hooks/useApi';

interface Response {
  email: string;
  password: string;
}

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  // const singIn = useSignIn();
  const api = useApi();
  const onLogin = ({ email, password }: Response) => {
    console.log({ email, password });
    setLoading(true);
    api.getAll();
    // singIn({
    //   token: 'token',
    //   expiresIn: 100000,
    //   tokenType: 'JWT',
    //   authState: { email },
    // });
  };

  return (
    <div className={styles.container}>
      <h2>ВХОД В АККАУНТ</h2>
      <LoginForm isLoading={isLoading} onSubmit={onLogin} />
    </div>
  );
};

export default Login;
