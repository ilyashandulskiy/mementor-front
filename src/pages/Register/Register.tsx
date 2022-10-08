import React from 'react';
import styles from './Register.module.css';
import RegisterForm from './components/RegisterForm';
import useNavigation from 'hooks/useNavigation';
import useAuth from 'hooks/useAuth';

interface Response {
  email: string;
  password: string;
}

const Register = () => {
  const navigation = useNavigation();
  const { register } = useAuth();

  const onRegister = ({ email, password }: Response) => {
    register(email, password);
    navigation.goToEditProfile();
  };

  return (
    <div className={styles.container}>
      <h2>СОЗДАНИЕ АККАУНТА</h2>
      <RegisterForm isLoading={false} onSubmit={onRegister} />
    </div>
  );
};

export default Register;
