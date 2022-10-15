import React, { forwardRef, HTMLAttributes, Ref } from 'react';
import styles from './TextArea.module.css';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
}

const TextArea = forwardRef(
  (
    { label, placeholder, error, errorText, ...props }: Props,
    ref: Ref<HTMLTextAreaElement>
  ) => {
    return (
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <textarea
          {...props}
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
        {error && (
          <p className={styles.error}>
            {errorText || 'Поле заполнено не верно'}
          </p>
        )}
      </div>
    );
  }
);

export default TextArea;
