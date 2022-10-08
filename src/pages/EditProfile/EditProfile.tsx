import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { Profile } from 'types';
import useApi from 'hooks/useApi';
import useNavigation from 'hooks/useNavigation';

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
  const api = useApi();
  const navigation = useNavigation();

  const onSave = async (val: Profile) => {
    setSaving(true);
    await api.saveProfile({ ...demoData, ...val });
    setSaving(false);
    navigation.goToProfile();
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
