import React, { ReactNode } from 'react';
import cn from 'classnames';
import styles from './Button.module.css';
import { Spinner } from 'components/ui';

interface Props {
  children: ReactNode | ReactNode[];
  type?: 'primary' | 'secondary';
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  submit?: boolean;
}

export const Button = ({
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
