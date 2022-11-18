import React from 'react';
import styles from './ProfileImage.module.css';
import cn from 'classnames';

interface Props {
  src: string;
  clickable?: boolean;
  onClick?: () => void;
}

const ProfileImage = ({ src, onClick, clickable }: Props) => {
  return (
    <div className={styles.container}>
      <img
        onClick={onClick}
        src={src}
        className={cn([styles.image, { [styles.imageEditable]: clickable }])}
      />
    </div>
  );
};

export default ProfileImage;
