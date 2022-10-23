import React from 'react';
import styles from './ProfileInformation.module.css';
import TextField from 'components/ui/TextField';
import { Profile } from 'types';
import PriceBlock from 'components/PriceBlock';
import useMedia from 'hooks/useMedia';
import cn from 'classnames';

interface Props {
  data?: Profile;
  onTariffClick?: (val: number) => void;
}

const ProfileInformation = ({ data, onTariffClick }: Props) => {
  const { isMobile } = useMedia();

  return (
    <>
      <img
        src="https://photo9.wambacdn.net/44/84/04/1749404844/1785668513_huge.jpg?hash=rS6IY83UPoUS4XEeN9MwRw&expires=64060578000&updated=1500977830"
        className={styles.icon}
      />
      <div className={styles.fields}>
        <div className={cn([styles.row, { [styles.rowMobile]: isMobile }])}>
          <TextField label="Имя" text={data?.name} />
          <TextField label="Фамилия" text={data?.surname} />
        </div>
        <div className={cn([styles.row, { [styles.rowMobile]: isMobile }])}>
          <TextField
            label="Опыт работы с"
            text={data?.experienceSince?.toString()}
          />
          <TextField text={data?.grade} label="Грейд" />
        </div>
        <TextField label="Email" text={data?.email} />
        <div className={cn([styles.row, { [styles.rowMobile]: isMobile }])}>
          <TextField label="Разговариваю на языках:" tags={data?.language} />
          <TextField label="Готов обучить:" tags={data?.programmingLanguage} />
        </div>
        <div className={cn([styles.row, { [styles.rowMobile]: isMobile }])}>
          <TextField label="Знаком с технологиями:" tags={data?.technology} />
        </div>
        <TextField label="Готов помочь с:" tags={data?.canHelpWith} />
        <TextField label="Описание" text={data?.description} />

        <div
          className={cn([
            styles.priceContainer,
            { [styles.priceContainerMobile]: isMobile },
          ])}
        >
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
