import React from 'react';
import styles from './Card.module.css';
import cn from 'classnames';
import useNavigation from 'hooks/useNavigation';
import cashTool from 'tools/cashTool';
import textTool from 'tools/textTool';
import useMedia from 'hooks/useMedia';
import * as swagger from 'swagger';
import noPhoto from 'assets/images/no-photo.png';

type Props = swagger.Mentor;

const Card = ({
  name,
  surname,
  tariff,
  grade,
  programmingLanguage,
  image,
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
        <img
          alt="profile image"
          src={image?.['144x144'] || noPhoto}
          className={styles.icon}
        />
        <div className={styles.badge}>{grade}</div>
        <div className={styles.cardInformation}>
          <h5 className="card-title">
            {name} {surname}
            <span className={styles.programmingLanguagesList}>
              {programmingLanguageList}
            </span>
          </h5>
          <p className="card-text">
            {textTool.limit('description' || '', 150)}
          </p>
        </div>
        {!isMobile && (
          <div className={styles.priceBlock}>
            {tariff?.map(({ price, name }, index) => (
              <h6 key={`${name}${index}`}>{cashTool.display(price)}</h6>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
