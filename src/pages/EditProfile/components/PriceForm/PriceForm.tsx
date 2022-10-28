import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../EditProfile.module.css';
import { Button, Form, Input, TextArea } from 'components/ui';
import { CurrentTariffEditing } from 'pages/EditProfile/components/ControlledPrice/components/PriceField/PriceField';
import validateTool from 'tools/validateTool';
import { FormSubmitProp } from 'types';

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

  const onSubmit = (e: FormSubmitProp) => {
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
              validate: validateTool.isPositiveNumber,
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
