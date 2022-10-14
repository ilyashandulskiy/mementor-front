import React, { forwardRef, HTMLAttributes, Ref } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  password?: boolean;
  errorText?: string;
}

const Input = forwardRef(
  (
    { label, placeholder, error, errorText, password, ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <input
          {...props}
          id="new-password"
          autoComplete="new-password"
          type={password ? 'password' : 'text'}
          ref={ref}
          placeholder={placeholder}
          className={cn([
            'form-control',
            styles.input,
            { [styles.inputError]: error },
          ])}
        />
        {error && (
          <p className={styles.error}>
            {errorText || 'Поле заполнено не верно'}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
