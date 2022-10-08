import React from 'react';
import styles from './Login.module.css';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>ВХОД В АККАУНТ</h2>
      <div className={styles.fields}>
        <Input label="Email" placeholder="yourmail@mail.com" />
        <Input label="Пароль" password />
      </div>
      <Button type="primary">Войти в аккаунт</Button>
      <Button onClick={() => navigate('../register')} outline type="primary">
        Создать новый
      </Button>
    </div>
  );
};

export default Login;
