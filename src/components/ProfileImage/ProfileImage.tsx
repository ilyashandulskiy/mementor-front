import React from 'react';
import styles from './ProfileImage.module.css';
import cn from 'classnames';
import { Spinner } from 'components/ui';
import noPhoto from 'assets/images/no-photo.png';

interface Props {
  src?: string;
  clickable?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

const ProfileImage = ({ src, onClick, clickable, loading }: Props) => {
  return (
    <div className={styles.container}>
      <img
        alt="profile image"
        onClick={onClick}
        src={src || noPhoto}
        className={cn([
          styles.image,
          { [styles.imageEditable]: clickable },
          { [styles.imageLoading]: loading },
        ])}
      />
      {loading && (
        <Spinner className={styles.spinner} size={20} color="white" />
      )}
    </div>
  );
};

export default ProfileImage;
