import React, { useState } from 'react';
import styles from './Register.module.css';
import RegisterForm from './components/RegisterForm';
import useNavigation from 'hooks/useNavigation';
import useAuth from 'hooks/useAuth';

export interface RegisterResponse {
  email: string;
  password: string;
}

const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { register } = useAuth();

  const onRegister = async ({ email, password }: RegisterResponse) => {
    setLoading(true);
    const success = await register(email, password);
    setLoading(false);
    if (success) navigation.goToEditProfile();
  };

  return (
    <div className={styles.container}>
      <h2>СОЗДАНИЕ АККАУНТА</h2>
      <RegisterForm isLoading={isLoading} onSubmit={onRegister} />
    </div>
  );
};

export default Register;
