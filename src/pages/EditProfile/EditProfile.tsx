import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import ProfileForm from './components/ProfileForm';
import { Profile } from 'types';
import useNavigation from 'hooks/useNavigation';
import { useProfile } from 'hooks/useProfile';
import constants from 'helpers/constants';

const EditProfile = () => {
  const [saving, setSaving] = useState(false);
  const { save, data } = useProfile();
  const navigation = useNavigation();

  const onSave = async (val: Profile) => {
    setSaving(true);
    await save(val);
    setSaving(false);
    navigation.goToProfile();
  };

  if (!data) return null;

  return (
    <div className={styles.container}>
      <h2>НАСТРОЙКА ПРОФИЛЯ</h2>
      <ProfileForm
        defaultValues={
          data.grade
            ? data
            : ({
                email: data.email,
                tariff: constants.defaultTariffs,
              } as Profile)
        }
        loading={saving}
        onChange={(val) => onSave(val as Profile)}
      />
    </div>
  );
};

export default EditProfile;
