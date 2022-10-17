import React from 'react';
import styles from './MentorsList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMentorsList } from 'hooks/useMentorsList';
import { Profile } from 'types';
import Card from 'components/Card';

const MentorsList = () => {
  const { data, fetchNextPage } = useMentorsList();

  // @ts-ignore
  const mentors: Profile[] = data?.pages.flat() || ([] as Profile[]);
  console.log(mentors, data?.pages.length);

  return (
    <div className={styles.container}>
      <h2>Менторы на платформе</h2>
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={true}
        className={styles.list}
        loader={null}
        dataLength={mentors.length || 0}
      >
        {mentors?.length &&
          mentors
            .flat()
            .map((mentor: Profile) => <Card key={mentor._id} {...mentor} />)}
      </InfiniteScroll>
    </div>
  );
};

export default MentorsList;
