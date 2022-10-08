import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router';
import Select from '../../components/ui/Select';
import TextArea from '../../components/ui/TextArea';
import { yearOptions } from './helpers';

const EditProfile = () => {
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>НАСТРОЙКА ПРОФИЛЯ</h2>
      <div className={styles.fields}>
        <div className={styles.row}>
          <Input label="Имя" />
          <Input label="Фамилия" />
        </div>
        <div className={styles.row}>
          <Select label="Опыт работы с">{yearOptions()}</Select>
          <Select label="Грейд">
            <option>Junior</option>
            <option>Middle</option>
            <option>Senior</option>
          </Select>
        </div>
        <TextArea label="Описание" />
      </div>
      <Button loading={saving} onClick={() => setSaving(true)} type="primary">
        Сохранить настройки профиля
      </Button>
      <Button onClick={() => navigate('../register')} outline type="primary">
        Отменить изменения
      </Button>
    </div>
  );
};

export default EditProfile;
