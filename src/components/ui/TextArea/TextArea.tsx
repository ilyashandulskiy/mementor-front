import React, { forwardRef, Ref } from 'react';
import styles from './TextArea.module.css';
import cn from 'classnames';

interface Props {
  label?: string;
  placeholder?: string;
  error?: string;
}

const TextArea = forwardRef(
  ({ label, placeholder, error }: Props, ref: Ref<HTMLTextAreaElement>) => {
    return (
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <textarea
          id="new-password"
          autoComplete="new-password"
          ref={ref}
          placeholder={placeholder}
          className={cn([
            'form-control',
            styles.input,
            { [styles.inputError]: error },
          ])}
        />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);

export default TextArea;
