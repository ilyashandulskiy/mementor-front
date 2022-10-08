import React, { ReactNode } from 'react';
import styles from './Layout.module.css';

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <img src="images/background.jpg" className={styles.background} />
      <div className={styles.container}>
        <img className={styles.logo} src="images/logo.png" />
        {children}
      </div>
    </>
  );
};

export default Layout;
