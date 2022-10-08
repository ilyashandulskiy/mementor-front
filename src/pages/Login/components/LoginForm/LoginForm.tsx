import React from 'react';
import styles from '../../Login.module.css';
import Input from '../../../../components/ui/Input';
import Button from '../../../../components/ui/Button';
import { useNavigate } from 'react-router';
import Form from '../../../../components/ui/Form/Form';
import { useForm } from 'react-hook-form';
import patterns from '../../../../helpers/patterns';

interface Props {
  onSubmit: any;
  isLoading: boolean;
}

const LoginForm = ({ onSubmit, isLoading }: Props) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  return (
    <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fields}>
        <Input
          {...register('email', { required: true, pattern: patterns.email })}
          label="Email"
          placeholder="yourmail@mail.com"
          error={!!errors?.email}
        />
        <Input
          {...register('password', { required: true })}
          label="Пароль"
          password
          error={!!errors?.password}
        />
      </div>
      <Button loading={isLoading} submit type="primary">
        Войти в аккаунт
      </Button>
      <Button onClick={() => navigate('../register')} outline type="primary">
        Создать новый
      </Button>
    </Form>
  );
};

export default LoginForm;
