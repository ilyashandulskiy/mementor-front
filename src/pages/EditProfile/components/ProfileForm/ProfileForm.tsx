import React from 'react';
import styles from '../../EditProfile.module.css';
import Input from 'components/ui/Input';
import Select from 'components/ui/Select';
import { yearOptions } from 'pages/EditProfile/helpers';
import TextArea from 'components/ui/TextArea';
import Button from 'components/ui/Button';
import Form from 'components/ui/Form/Form';
import useNavigation from 'hooks/useNavigation';
import { useForm } from 'react-hook-form';

interface Props {
  loading: boolean;
  onChange: (val: unknown) => void;
}

const ProfileForm = ({ loading, onChange }: Props) => {
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onChange)}>
      <div className={styles.fields}>
        <div className={styles.row}>
          <Input
            {...register('name', { required: true })}
            error={!!errors?.name}
            label="Имя"
          />
          <Input
            {...register('surname', { required: true })}
            error={!!errors?.surname}
            label="Фамилия"
          />
        </div>
        <div className={styles.row}>
          <Select
            label="Опыт работы с"
            {...register('experienceSince', {
              required: true,
              valueAsNumber: true,
            })}
          >
            {yearOptions()}
          </Select>
          <Select label="Грейд" {...register('grade', { required: true })}>
            <option value="junior">Junior</option>
            <option value="middle">Middle</option>
            <option value="senior">Senior</option>
          </Select>
        </div>
        <TextArea
          label="Описание"
          {...register('description', { required: true })}
          error={!!errors?.description}
        />
      </div>
      <Button loading={loading} submit type="primary">
        Сохранить настройки профиля
      </Button>
      <Button onClick={navigation.goToRegistration} outline type="primary">
        Отменить изменения
      </Button>
    </Form>
  );
};

export default ProfileForm;
