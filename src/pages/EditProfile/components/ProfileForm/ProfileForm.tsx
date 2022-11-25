import React from 'react';
import styles from '../../EditProfile.module.css';
import { Button, Form, Input, Select, TextArea } from 'components/ui';
import { yearOptions } from 'pages/EditProfile/helpers';
import useNavigation from 'hooks/useNavigation';
import { useForm } from 'react-hook-form';
import patterns from 'tools/patternsTool';
import { FormSubmitProp, Profile } from 'types';
import ControlledTags from 'components/form-ui/ControlledTags';
import ControlledPrice from 'pages/EditProfile/components/ControlledPrice/ControlledPrice';
import EditableProfileImage from 'pages/EditProfile/components/EditableProfileImage/EditableProfileImage';
import cn from 'classnames';

interface Props {
  loading: boolean;
  onChange: (val: unknown) => void;
  onDelete: (val: unknown) => void;
  defaultValues: Profile;
  defaultImage?: string;
}

const ProfileForm = ({
  loading,
  onChange,
  defaultValues,
  onDelete,
  defaultImage,
}: Props) => {
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onBlur', defaultValues });

  const onSubmit = (e: FormSubmitProp) => {
    e.preventDefault();
    handleSubmit(onChange)();
  };

  return (
    <Form formId="profile">
      <EditableProfileImage defaultImage={defaultImage} />
      <div className={cn([styles.fields, styles.editForm])}>
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

        <ControlledTags
          control={control}
          separator=","
          rules={{ required: true }}
          label="Готов помочь с"
          placeholder="Вводите каждый пункт через запятую"
          name="canHelpWith"
        />

        <TextArea
          label="Описание"
          {...register('description', { required: true })}
          error={!!errors?.description}
        />
      </div>

      <ControlledPrice control={control} rules={{ required: true }} />

      <div className={styles.buttons}>
        <Button loading={loading} onClick={onSubmit} submit type="primary">
          Сохранить настройки профиля
        </Button>
        <Button onClick={navigation.goToProfile} outline type="primary">
          Отменить изменения
        </Button>
        <Button onClick={onDelete} outline type="danger">
          Удалить аккаунт
        </Button>
      </div>
    </Form>
  );
};

export default ProfileForm;
