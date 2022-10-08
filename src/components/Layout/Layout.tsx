import React, { ReactNode } from 'react';
import styles from './Layout.module.css';
import backgroundImage from 'assets/images/background.jpg';
import logoImage from 'assets/images/logo.png';

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <img
        alt="background"
        src={backgroundImage}
        className={styles.background}
      />
      <div className={styles.container}>
        <img alt="logo" className={styles.logo} src={logoImage} />
        {children}
      </div>
    </>
  );
};

export default Layout;
