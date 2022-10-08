import React from 'react';
import styles from './TextField.module.css';

interface Props {
  label?: string;
  text: string;
}

const TextField = ({ label, text }: Props) => {
  return (
    <div className={styles.container}>
      {label && <p className={styles.label}>{label}</p>}
      <h5>{text}</h5>
    </div>
  );
};
export default TextField;
