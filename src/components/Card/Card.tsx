import React from 'react';
import styles from './Card.module.css';
import cn from 'classnames';
import { Profile } from 'types';
import useNavigation from 'hooks/useNavigation';
import cashTool from 'tools/cashTool';
import textTool from 'tools/textTool';
import useMedia from 'hooks/useMedia';

type Props = Partial<Profile>;

const Card = ({
  name,
  surname,
  tariff,
  grade,
  programmingLanguage,
  description,
  _id,
}: Props) => {
  const navigation = useNavigation();
  const { isMobile } = useMedia();

  const programmingLanguageList = programmingLanguage?.join(', ');

  return (
    <div
      onClick={() => navigation.goToMentor(_id || '')}
      className={cn(['card', styles.card])}
    >
      <div className={cn(['card-body', styles.cardBody])}>
        <div className={styles.icon} />
        <div className={styles.badge}>{grade}</div>
        <div className={styles.cardInformation}>
          <h5 className="card-title">
            {name} {surname}
            <span className={styles.programmingLanguagesList}>
              {programmingLanguageList}
            </span>
          </h5>
          <p className="card-text">{textTool.limit(description || '', 150)}</p>
        </div>
        {!isMobile && (
          <div className={styles.priceBlock}>
            {tariff?.map(({ price }) => (
              <h6>{cashTool.display(price)}</h6>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
