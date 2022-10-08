import React, { forwardRef, Ref } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

interface Props {
  label?: string;
  placeholder?: string;
  error?: string;
  password?: boolean;
}

const Input = forwardRef(
  (
    { label, placeholder, error, password }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <input
          type={password ? 'password' : 'text'}
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

export default Input;
