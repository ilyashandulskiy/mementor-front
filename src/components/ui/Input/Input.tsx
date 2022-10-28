import React, { forwardRef, HTMLAttributes, Ref } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import idTool from 'tools/idTool';

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  password?: boolean;
  errorText?: string;
}

export const Input = forwardRef(
  (
    { label, placeholder, error, errorText, password, ...props }: Props,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <input
          {...props}
          id={idTool.generateInputId(label || placeholder)}
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
