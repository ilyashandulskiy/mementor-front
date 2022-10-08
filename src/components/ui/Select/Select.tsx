import React, { forwardRef, ReactNode, Ref } from 'react';
import styles from './Select.module.css';

interface Props {
  label?: string;
  children: ReactNode | ReactNode[];
}

const Select = forwardRef(
  ({ label, children }: Props, ref: Ref<HTMLSelectElement>) => {
    return (
      <div className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <select ref={ref} className="form-select">
          {children}
        </select>
      </div>
    );
  }
);

export default Select;
