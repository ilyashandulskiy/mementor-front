import React, { useMemo, useState } from 'react';
import styles from './MentorsList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMentorsList } from 'hooks/useMentorsList';
import Card from 'components/Card';
import FadeIn from 'components/FadeIn';
import * as swagger from 'swagger/swagger';

const MentorsList = () => {
  const { data, fetchNextPage, getPages } = useMentorsList();
  const [pages, setPages] = useState(1);
  getPages.then(setPages);

  const mentors: swagger.Mentor[] = useMemo(
    () => data?.pages.flat() || ([] as swagger.Mentor[]),
    [data?.pages]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Менторы на платформе</h2>
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={pages - 1 > (data?.pages.length || 1)}
        className={styles.list}
        loader={null}
        dataLength={mentors.length || 0}
      >
        {!!mentors?.length &&
          mentors.flat().map((mentor: swagger.Mentor) => (
            <FadeIn>
              <Card key={mentor?._id} {...mentor} />
            </FadeIn>
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default MentorsList;
