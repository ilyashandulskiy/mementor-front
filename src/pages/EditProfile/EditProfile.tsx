import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { Profile } from 'types';
import useNavigation from 'hooks/useNavigation';
import { useProfile } from 'hooks/useProfile';

const demoData: Profile = {
  name: 'name',
  surname: 'surname',
  technology: ['github', 'pornhub'],
  email: 'name@mail.ru',
  experienceSince: 2022,
  programmingLanguage: ['js', 'ts'],
  grade: 'junior',
  tariff: [{ price: 1000, name: 'час' }],
};

const EditProfile = () => {
  const [saving, setSaving] = useState(false);
  const { save, data } = useProfile();
  const navigation = useNavigation();

  const onSave = async (val: Profile) => {
    setSaving(true);
    const newData = { ...demoData, ...val };
    await save(newData);
    setSaving(false);
    navigation.goToProfile();
  };

  if (!data) return null;

  return (
    <div className={styles.container}>
      <h2>НАСТРОЙКА ПРОФИЛЯ</h2>
      <ProfileForm
        defaultValues={data}
        loading={saving}
        onChange={(val) => onSave(val as Profile)}
      />
    </div>
  );
};

export default EditProfile;
