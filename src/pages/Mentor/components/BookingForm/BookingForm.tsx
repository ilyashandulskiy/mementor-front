import React from 'react';
import { Button, Form, Input } from 'components/ui';
import styles from './BookingForm.module.css';
import { useForm } from 'react-hook-form';
import { BookingFormResponse } from 'types';

interface Props {
  onChange: (val: BookingFormResponse) => void;
  loading: boolean;
}

const BookingForm = ({ onChange, loading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues: {} as BookingFormResponse });

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

      <Button
        loading={loading}
        submit
        onClick={handleSubmit(onChange)}
        className={styles.button}
      >
        Отправить заявку
      </Button>
    </Form>
  );
};

export default BookingForm;
