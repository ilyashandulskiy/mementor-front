import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import Spinner from 'components/ui/Spinner';

interface Props {
  children: ReactNode | ReactNode[];
  type?: 'primary' | 'secondary';
  outline?: boolean;
  onClick?: (e: any) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  submit?: boolean;
}

const Button = ({
  children,
  type,
  outline,
  onClick,
  className,
  disabled,
  loading,
  submit,
}: Props) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
      className={cn([
        `btn btn-${type || 'primary'}`,
        styles.button,
        { [styles.buttonOutline]: outline },
        className,
      ])}
    >
      {loading ? (
        <Spinner color={outline ? 'accent' : 'white'} size={7} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
