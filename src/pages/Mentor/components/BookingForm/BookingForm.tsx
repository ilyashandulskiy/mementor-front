import React from 'react';
import Form from 'components/ui/Form/Form';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import styles from './BookingForm.module.css';
import { useForm } from 'react-hook-form';
import { BookingFormResponse } from 'types';

interface Props {
  onChange: (val: BookingFormResponse) => void;
}

const BookingForm = ({ onChange }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (val: any) => {
    onChange(val);
  };

  return (
    <Form className={styles.container}>
      <Input
        label="Имя"
        {...register('customerName', { required: true })}
        error={!!errors?.customerName}
      />
      <Input
        label="Telegram"
        {...register('customerTelegram', { required: true })}
        error={!!errors?.customerTelegram}
      />

      <Button submit onClick={handleSubmit(onSubmit)} className={styles.button}>
        Отправить заявку
      </Button>
    </Form>
  );
};

export default BookingForm;
