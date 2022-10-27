import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../EditProfile.module.css';
import Input from 'components/ui/Input';
import Form from 'components/ui/Form/Form';
import Button from 'components/ui/Button';
import TextArea from 'components/ui/TextArea';
import { CurrentTariffEditing } from 'pages/EditProfile/components/ControlledPrice/components/PriceField/PriceField';
import validate from 'helpers/validate';

interface Props {
  defaultValues: CurrentTariffEditing;
  onChange: (val: CurrentTariffEditing) => void;
  onClose: () => void;
}

const PriceForm = ({ onChange, defaultValues, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues });

  const onSubmit = (e: any) => {
    e.preventDefault();
    handleSubmit(onChange)();
  };

  return (
    <Form formId="price">
      <div className={styles.fields}>
        <div className={styles.row}>
          <Input
            {...register('name', { required: true })}
            error={!!errors?.name}
            label="Название"
          />
          <Input
            {...register('price', {
              required: true,
              valueAsNumber: true,
              validate: validate.isPositiveNumber,
            })}
            error={!!errors?.price}
            label="Цена"
          />
        </div>
        <TextArea
          {...register('description', { required: true, maxLength: 255 })}
          error={!!errors?.description}
          label="Описание тарифа"
          errorText="Длина должна быть меньше 255 символов"
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={onSubmit} submit type="primary">
          Сохранить тариф
        </Button>
        <Button onClick={onClose} outline type="primary">
          Отменить изменения
        </Button>
      </div>
    </Form>
  );
};

export default PriceForm;
