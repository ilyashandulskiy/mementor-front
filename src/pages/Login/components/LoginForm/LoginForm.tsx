import React from 'react';
import styles from '../../Login.module.css';
import { Button, Form, Input } from 'components/ui';
import { useForm } from 'react-hook-form';
import patterns from 'tools/patternsTool';
import useNavigation from 'hooks/useNavigation';
import { LoginResponse } from 'pages/Login/Login';

interface Props {
  onSubmit: ({ email, password }: LoginResponse) => void;
  isLoading: boolean;
}

const LoginForm = ({ onSubmit, isLoading }: Props) => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {} as LoginResponse,
  });

  return (
    <Form className={styles.form}>
      <div className={styles.fields}>
        <Input
          {...register('email', { required: true, pattern: patterns.email })}
          label="Email"
          placeholder="yourmail@mail.com"
          error={!!errors?.email}
        />
        <Input
          {...register('password', { required: true, minLength: 6 })}
          label="Пароль"
          password
          error={!!errors?.password}
          errorText="Длина пароля должна быть минимум 6 символов"
        />
      </div>
      <div className={styles.buttons}>
        <Button
          loading={isLoading}
          submit
          type="primary"
          onClick={handleSubmit(onSubmit)}
        >
          Войти в аккаунт
        </Button>
        <Button onClick={navigation.goToRegistration} outline type="primary">
          Создать новый
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
