import React, { useEffect, useState } from 'react';
import styles from '../EditProfile/EditProfile.module.css';
import TextField from 'components/ui/TextField';
import Button from 'components/ui/Button';
import useNavigation from 'hooks/useNavigation';
import useAuth from 'hooks/useAuth';
import { Profile as ProfileType } from 'types';
import useApi from 'hooks/useApi';
import Spinner from 'components/ui/Spinner';

const Profile = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const api = useApi();
  const [profile, setProfile] = useState<ProfileType>();

  useEffect(() => {
    api.getProfile().then(setProfile);
  }, []);

  if (!profile) return <Spinner size={20} />;

  return (
    <div className={styles.container}>
      <h2>
        Профиль {profile.name} {profile.surname}
      </h2>
      <div className={styles.fields}>
        <div className={styles.row}>
          <TextField label="Имя" text={profile.name} />
          <TextField label="Фамилия" text={profile.surname} />
        </div>
        <div className={styles.row}>
          <TextField
            label="Опыт работы с"
            text={profile.experienceSince.toString()}
          />
          <TextField text={profile.grade} label="Грейд" />
        </div>
        <TextField label="Email" text={profile.email} />
        <TextField label="Описание" text={profile.description || ''} />
      </div>
      <Button onClick={navigation.goToEditProfile} outline type="primary">
        Изменить информацию в профиле
      </Button>
      <Button onClick={auth.logout} outline type="primary">
        Выйти из аккаунта
      </Button>
    </div>
  );
};

export default Profile;
