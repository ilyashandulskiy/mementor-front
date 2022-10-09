import React from 'react';
import styles from './TextField.module.css';

interface Props {
  label?: string;
  text: string | undefined;
}

const TextField = ({ label, text }: Props) => {
  if (text === undefined)
    return (
      <div className={styles.container}>
        {label && <div className={styles.skeletonLabel} />}
        <div className={styles.skeletonText} />
      </div>
    );

  return (
    <div className={styles.container}>
      {label && <p className={styles.label}>{label}</p>}
      <h5>{text}</h5>
    </div>
  );
};
export default TextField;
