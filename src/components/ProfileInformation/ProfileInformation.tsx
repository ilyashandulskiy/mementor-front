import React from 'react';
import styles from './ProfileInformation.module.css';
import { TextField } from 'components/ui';
import * as swagger from 'swagger';
import PriceBlock from 'components/PriceBlock';
import useMedia from 'hooks/useMedia';
import cn from 'classnames';
import ProfileImage from 'components/ProfileImage/ProfileImage';

interface Props {
  data?: swagger.GetMentorResponse;
  onTariffClick?: (val: number) => void;
  isProfileOfCurrentUser?: boolean;
}

const ProfileInformation = ({
  data,
  onTariffClick,
  isProfileOfCurrentUser,
}: Props) => {
  const { isMobile } = useMedia();

  return (
    <>
      <ProfileImage src={data?.image?.['512x512']} />
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
              key={`${tariff.name}${index}`}
              disableActions={isProfileOfCurrentUser}
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
