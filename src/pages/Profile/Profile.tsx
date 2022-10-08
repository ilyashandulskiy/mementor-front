import React from 'react';
import styles from '../EditProfile/EditProfile.module.css';
import TextField from 'components/ui/TextField';
import Button from 'components/ui/Button';
import useNavigation from 'hooks/useNavigation';
import useAuth from 'hooks/useAuth';

const Profile = () => {
  const navigation = useNavigation();
  const auth = useAuth();

  return (
    <div className={styles.container}>
      <h2>Профиль Ilya Shand</h2>
      <div className={styles.fields}>
        <div className={styles.row}>
          <TextField label="Имя" text="Ilya" />
          <TextField label="Фамилия" text="Shand" />
        </div>
        <div className={styles.row}>
          <TextField label="Опыт работы с" text="2020" />
          <TextField text="Megaladon" label="Грейд" />
        </div>
        <TextField label="Email" text="yourmail@mail.com" />
        <TextField label="Описание" text="DESk" />
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
