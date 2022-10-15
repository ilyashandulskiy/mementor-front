import React from 'react';
import styles from './MentorsList.module.css';
import Card from 'components/Card';
import { Profile } from 'types';
import { useMentorsList } from 'hooks/useMentorsList';

const MentorsList = () => {
  const { data } = useMentorsList({ page: 0 });

  return (
    <div className={styles.container}>
      <h2>Менторы на платформе</h2>
      {data && data.map((mentor: Profile) => <Card {...mentor} />)}
    </div>
  );
};

export default MentorsList;
