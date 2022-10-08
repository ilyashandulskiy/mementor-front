import React, { forwardRef, HTMLAttributes, ReactNode, Ref } from 'react';
import styles from './Select.module.css';

interface Props extends HTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: ReactNode | ReactNode[];
}

const Select = forwardRef(
  ({ label, children, ...props }: Props, ref: Ref<HTMLSelectElement>) => {
    return (
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <select {...props} ref={ref} className="form-select">
          {children}
        </select>
      </div>
    );
  }
);

export default Select;
