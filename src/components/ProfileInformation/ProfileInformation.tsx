import React from 'react';
import styles from './ProfileInformation.module.css';
import TextField from 'components/ui/TextField';
import { Profile } from 'types';

interface Props {
  data?: Profile;
}

const ProfileInformation = ({ data }: Props) => {
  return (
    <>
      <h2>
        Профиль {data?.name} {data?.surname}
      </h2>
      <div className={styles.fields}>
        <div className={styles.row}>
          <TextField label="Имя" text={data?.name} />
          <TextField label="Фамилия" text={data?.surname} />
        </div>
        <div className={styles.row}>
          <TextField
            label="Опыт работы с"
            text={data?.experienceSince?.toString()}
          />
          <TextField text={data?.grade} label="Грейд" />
        </div>
        <TextField label="Email" text={data?.email} />
        <div className={styles.row}>
          <TextField label="Разговариваю на языках:" tags={data?.language} />
          <TextField label="Готов обучить:" tags={data?.programmingLanguage} />
        </div>
        <div className={styles.row}>
          <TextField label="Знаком с технологиями:" tags={data?.technology} />
        </div>
        <TextField label="Готов помочь с:" tags={data?.canHelpWith} />
        <TextField label="Описание" text={data?.description} />
      </div>
    </>
  );
};

export default ProfileInformation;
