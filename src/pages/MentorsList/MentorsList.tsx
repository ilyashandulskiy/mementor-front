import React, { useMemo, useState } from 'react';
import styles from './MentorsList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMentorsList } from 'hooks/useMentorsList';
import { Profile } from 'types';
import Card from 'components/Card';

const MentorsList = () => {
  const { data, fetchNextPage, getPages } = useMentorsList();
  const [pages, setPages] = useState(1);
  getPages.then(setPages);

  const mentors: Profile[] = useMemo(
    () => data?.pages.flat() || ([] as Profile[]),
    [data?.pages]
  );

  return (
    <div className={styles.container}>
      <h2>Менторы на платформе</h2>
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={pages > (data?.pages.length || 1)}
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
