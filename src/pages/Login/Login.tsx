import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>ВХОД В АККАУНТ</h2>
      <Input error="Error field" label="Email" placeholder="Email" />
      <Input label="Email" placeholder="Email" />
      <Select label="Super select">
        <option value="4">Four</option>
      </Select>
      <Button onClick={() => navigate('../register')} type="primary">
        Войти
      </Button>
      <Button disabled onClick={() => navigate('../register')} type="primary">
        Выйти
      </Button>
    </div>
  );
};

export default Login;
