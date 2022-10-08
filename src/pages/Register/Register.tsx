import React from 'react';
import styles from './Register.module.css';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>СОЗДАНИЕ АККАУНТА</h2>
      <div className={styles.fields}>
        <Input label="Email" placeholder="yourmail@mail.com" />
        <Input label="Пароль" password />
      </div>
      <Button onClick={() => navigate('../create')} type="primary">
        Создать аккаунт
      </Button>
      <Button onClick={() => navigate('../login')} outline type="primary">
        Войти в существующий
      </Button>
    </div>
  );
};

export default Register;
