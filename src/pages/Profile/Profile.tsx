import React from 'react';
import styles from '../EditProfile/EditProfile.module.css';
import TextField from 'components/ui/TextField';
import Button from 'components/ui/Button';
import useNavigation from 'hooks/useNavigation';
import useAuth from 'hooks/useAuth';
import Spinner from 'components/ui/Spinner';
import { useProfile } from 'hooks/useProfile';

const Profile = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const { data } = useProfile();

  return (
    <div className={styles.container}>
      <h2>
        Профиль {data?.name} {data?.surname}
      </h2>
      <div className={styles.fields}>
        <div className={styles.row}>
          <TextField label="Имя" text={data?.name} />
          <TextField label="Фамилия" text={data?.surname} />
        </div>
        <div className={styles.row}>
          <TextField
            label="Опыт работы с"
            text={data?.experienceSince.toString()}
          />
          <TextField text={data?.grade} label="Грейд" />
        </div>
        <TextField label="Email" text={data?.email} />
        <div className={styles.row}>
          <TextField label="Разговариваю на языках:" tags={data?.language} />
          <TextField label="Готов обучить:" tags={data?.programmingLanguage} />
        </div>
        <TextField label="Знаком с технологиями:" tags={data?.technology} />
        <TextField label="Описание" text={data?.description} />
      </div>
      <Button onClick={navigation.goToEditProfile} outline type="primary">
        Изменить информацию в профиле
      </Button>
      <Button onClick={auth.logout} outline type="primary">
        Выйти из аккаунта
      </Button>
    </div>
  );
  return <Spinner size={20} />;
};

export default Profile;
