import React from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>РЕГИСТРАЦИЯ</h2>
      <input className="form-control" />
      <input className="form-control" />
      <button onClick={() => navigate('../login')} className="btn btn-primary">
        Войти
      </button>
    </div>
  );
};

export default Register;
