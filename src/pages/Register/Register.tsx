import React from 'react';
import styles from './Register.module.css';
import RegisterForm from './components/RegisterForm';
import useNavigation from 'hooks/useNavigation';

interface Response {
  email: string;
  password: string;
}

const Register = () => {
  const navigation = useNavigation();

  const onRegister = ({ email, password }: Response) => {
    console.log({ email, password });
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
