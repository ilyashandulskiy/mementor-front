import React, { ReactNode } from 'react';
import styles from './Layout.module.css';
import backgroundImage from 'assets/images/background.jpg';
import logoImage from 'assets/images/logo.png';
import profileImage from 'assets/images/profile.png';
import useNavigation from 'hooks/useNavigation';
import { Button } from 'components/ui';
import useAuth from 'hooks/useAuth';

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  const navigation = useNavigation();
  const { isAuthed } = useAuth();

  return (
    <>
      <img
        alt="background"
        src={backgroundImage}
        className={styles.background}
      />
      <div className={styles.container}>
        <img
          onClick={navigation.goToMentorsList}
          alt="logo"
          className={styles.logo}
          src={logoImage}
        />
        <Button
          outline
          className={styles.profileButton}
          onClick={isAuthed() ? navigation.goToProfile : navigation.goToLogin}
        >
          <img
            src={profileImage}
            alt="profile"
            className={styles.profileIcon}
          />
          {isAuthed() ? 'Профиль' : 'Войти'}
        </Button>
        {children}
      </div>
    </>
  );
};

export default Layout;
