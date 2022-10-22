import React from 'react';
import styles from './ProfileInformation.module.css';
import TextField from 'components/ui/TextField';
import { Profile } from 'types';
import PriceBlock from 'components/PriceBlock';

interface Props {
  data?: Profile;
  onTariffClick?: (val: number) => void;
}

const ProfileInformation = ({ data, onTariffClick }: Props) => {
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

        <div className={styles.priceContainer}>
          {data?.tariff?.map((tariff, index) => (
            <PriceBlock
              buttonText="Взять"
              price={tariff.price}
              name={tariff.name}
              description={tariff.description}
              onClick={() => onTariffClick && onTariffClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileInformation;
