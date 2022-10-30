import React, { ReactNode } from 'react';
import styles from './Spoiler.module.css';
import cn from 'classnames';

interface Props {
  children: ReactNode | ReactNode[];
  opened: boolean;
  height: number;
  className?: string;
}

const Spoiler = ({ children, opened, height, className }: Props) => {
  return (
    <div
      className={cn([styles.container, className])}
      style={{ height: opened ? height : 0 }}
    >
      {children}
    </div>
  );
};

export default Spoiler;
