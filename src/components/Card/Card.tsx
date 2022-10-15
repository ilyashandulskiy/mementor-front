import React from 'react';
import styles from './Card.module.css';
import cn from 'classnames';
import { Profile } from 'types';
import useNavigation from 'hooks/useNavigation';

type Props = Partial<Profile>;

const Card = ({ name, surname, programmingLanguage, grade, _id }: Props) => {
  const navigation = useNavigation();

  return (
    <div
      onClick={() => navigation.goToMentor(_id || '')}
      className={cn(['card', styles.card])}
    >
      <div className="card-body">
        <h5 className="card-title">
          {name} {surname} ({grade})
        </h5>
        <p className="card-text">{JSON.stringify(programmingLanguage)}</p>
      </div>
    </div>
  );
};

export default Card;
