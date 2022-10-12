import React from 'react';
import styles from './TextField.module.css';

interface Props {
  label?: string;
  text?: string;
  tags?: string[];
}

const TextField = ({ label, text, tags }: Props) => {
  if (text === undefined && !tags?.length)
    return (
      <div className={styles.container}>
        {label && <div className={styles.skeletonLabel} />}
        <div className={styles.skeletonText} />
      </div>
    );

  return (
    <div className={styles.container}>
      {label && <p className={styles.label}>{label}</p>}
      {text && <h5>{text}</h5>}
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <div className={styles.tag}>{tag}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default TextField;
