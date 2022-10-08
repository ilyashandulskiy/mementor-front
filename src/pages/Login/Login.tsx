import React from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>ВХОД В АККАУНТ</h2>
      <input className="form-control" />
      <input className="form-control" />
      <button
        onClick={() => navigate('../register')}
        className="btn btn-primary"
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
