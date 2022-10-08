import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { Profile } from 'types';

const demoData: Profile = {
  name: 'name',
  surname: 'surname',
  email: 'name@mail.ru',
  experienceSince: 2022,
  programmingLanguage: ['js', 'ts'],
  grade: 'junior',
  tariff: [{ price: 1000, name: 'час' }],
};

const EditProfile = () => {
  const [saving, setSaving] = useState(false);

  const onSave = (val: Profile) => {
    setSaving(true);
    console.log({ ...demoData, ...val });
  };

  return (
    <div className={styles.container}>
      <h2>НАСТРОЙКА ПРОФИЛЯ</h2>
      <ProfileForm
        loading={saving}
        onChange={(val) => onSave(val as Profile)}
      />
    </div>
  );
};

export default EditProfile;
