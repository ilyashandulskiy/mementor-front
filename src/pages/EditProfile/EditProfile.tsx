import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { Profile } from 'types';
import useNavigation from 'hooks/useNavigation';
import { useProfile } from 'hooks/useProfile';

const demoData = {
  technology: ['github', 'pornhub'],
  programmingLanguage: ['js', 'ts'],
  tariff: [{ price: 1000, name: 'час' }],
};

const EditProfile = () => {
  const [saving, setSaving] = useState(false);
  const { save, data } = useProfile();
  const navigation = useNavigation();

  const onSave = async (val: Profile) => {
    setSaving(true);
    const newData = { ...val, ...demoData };
    await save(newData);
    setSaving(false);
    navigation.goToProfile();
  };

  if (!data) return null;

  return (
    <div className={styles.container}>
      <h2>НАСТРОЙКА ПРОФИЛЯ</h2>
      <ProfileForm
        defaultValues={data.grade ? data : ({} as Profile)}
        loading={saving}
        onChange={(val) => onSave(val as Profile)}
      />
    </div>
  );
};

export default EditProfile;
