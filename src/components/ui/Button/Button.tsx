import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import Spinner from '../Spinner';

interface Props {
  children: ReactNode | ReactNode[];
  type?: 'primary' | 'secondary';
  outline?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  type,
  outline,
  onClick,
  className,
  disabled,
  loading,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn([
        `btn btn-${type}`,
        styles.button,
        { [styles.buttonOutline]: outline },
        className,
      ])}
    >
      {loading ? <Spinner size={7} /> : children}
    </button>
  );
};

export default Button;
