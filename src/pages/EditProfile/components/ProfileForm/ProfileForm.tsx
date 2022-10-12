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
import patterns from 'helpers/patterns';
import { Profile } from 'types';
import ControlledTags from 'components/form-ui/ControlledTags';

interface Props {
  loading: boolean;
  onChange: (val: unknown) => void;
  defaultValues: Profile;
}

const ProfileForm = ({ loading, onChange, defaultValues }: Props) => {
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues });

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
        <Input
          {...register('email', { required: true, pattern: patterns.email })}
          error={!!errors?.email}
          label="Email"
          placeholder="yourmail@mail.com"
        />

        <ControlledTags
          control={control}
          rules={{ required: true }}
          label="На каких языках вы разговариваете?"
          placeholder="Введите через пробел"
          name="language"
        />

        <ControlledTags
          control={control}
          rules={{ required: true }}
          label="Каким языкам программирования вы обучаете?"
          placeholder="Введите через пробел"
          name="programmingLanguage"
        />

        <ControlledTags
          control={control}
          rules={{ required: true }}
          label="Какие технологии вы используете в работе?"
          placeholder="Введите через пробел"
          name="technology"
        />

        <TextArea
          label="Описание"
          {...register('description', { required: false })}
          error={!!errors?.description}
        />
      </div>

      <div className={styles.buttons}>
        <Button loading={loading} submit type="primary">
          Сохранить настройки профиля
        </Button>
        <Button onClick={navigation.goToRegistration} outline type="primary">
          Отменить изменения
        </Button>
      </div>
    </Form>
  );
};

export default ProfileForm;
