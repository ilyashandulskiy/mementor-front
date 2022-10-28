import React from 'react';
import styles from '../../Register.module.css';
import { Button, Form, Input } from 'components/ui';
import { useForm } from 'react-hook-form';
import patterns from 'tools/patternsTool';
import useNavigation from 'hooks/useNavigation';
import { RegisterResponse } from 'pages/Register/Register';

interface Props {
  onSubmit: ({ email, password }: RegisterResponse) => void;
  isLoading: boolean;
}

const RegisterForm = ({ onSubmit, isLoading }: Props) => {
  const navigation = useNavigation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {} as RegisterResponse,
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
          onClick={handleSubmit(onSubmit)}
          type="primary"
        >
          Создать аккаунт
        </Button>
        <Button onClick={navigation.goToLogin} outline type="primary">
          Войти в существующий
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
