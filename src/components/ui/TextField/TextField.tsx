import React from 'react';
import styles from './TextField.module.css';
import cn from 'classnames';

interface Props {
  label?: string;
  text?: string;
  tags?: string[];
}

const TextField = ({ label, text, tags }: Props) => {
  const loading = text === undefined && !tags?.length;

  return (
    <div className={styles.container}>
      <div className={cn([styles.wrapper, { [styles.hide]: !loading }])}>
        {label && <div className={styles.skeletonLabel} />}
        <div className={styles.skeletonText} />
      </div>
      <div className={cn([styles.wrapper, { [styles.hide]: loading }])}>
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
    </div>
  );
};
export default TextField;
