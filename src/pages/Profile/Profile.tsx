import React from 'react';
import styles from '../EditProfile/EditProfile.module.css';
import { useProfile } from 'hooks/useProfile';
import ProfileInformation from './components/ProfileInformation';
import Button from 'components/ui/Button';
import useNavigation from 'hooks/useNavigation';
import useAuth from 'hooks/useAuth';

const Profile = () => {
  const { data } = useProfile();
  const navigation = useNavigation();
  const auth = useAuth();

  return (
    <div className={styles.container}>
      {data?.validProfile !== false ? (
        <ProfileInformation data={data} />
      ) : (
        <h5>
          Профиль недоступен публично, так как еще не все поля были заполнены
        </h5>
      )}
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
