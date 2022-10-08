import React from 'react';
import styles from './Register.module.css';
import RegisterForm from './components/RegisterForm';
import { useNavigate } from 'react-router';

interface Response {
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();

  const onRegister = ({ email, password }: Response) => {
    console.log({ email, password });
    navigate('../create');
  };

  return (
    <div className={styles.container}>
      <h2>СОЗДАНИЕ АККАУНТА</h2>
      <RegisterForm isLoading={false} onSubmit={onRegister} />
    </div>
  );
};

export default Register;
