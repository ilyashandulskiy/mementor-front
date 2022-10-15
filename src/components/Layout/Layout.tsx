import React, { ReactNode } from 'react';
import styles from './Layout.module.css';
import backgroundImage from 'assets/images/background.jpg';
import logoImage from 'assets/images/logo.png';
import useNavigation from 'hooks/useNavigation';

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  const navigation = useNavigation();

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
        {children}
      </div>
    </>
  );
};

export default Layout;
