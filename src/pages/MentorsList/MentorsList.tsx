import React, { useEffect, useMemo, useState } from 'react';
import styles from './MentorsList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMentorsList } from 'hooks/useMentorsList';
import Card from 'components/Card';
import FadeIn from 'components/FadeIn';
import * as swagger from 'swagger';
import Filters from './components/Filters';

export interface MentorsListFilters {
  search?: string;
  grade?: ('junior' | 'middle' | 'senior')[];
  experienceSince?: number;
  minPrice?: number;
  maxPrice?: number;
}

const MentorsList = () => {
  const [filters, setFilters] = useState<MentorsListFilters>({});
  const { data, fetchNextPage, getPages } = useMentorsList(filters);
  const [pages, setPages] = useState(1);
  useEffect(() => {
    getPages.then(setPages);
  }, []);

  const mentors: swagger.Mentor[] = useMemo(
    () => data?.pages.flat() || ([] as swagger.Mentor[]),
    [data?.pages]
  );

  return (
    <div className={styles.container}>
      <Filters onChange={setFilters} />
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={pages - 1 > (data?.pages.length || 1)}
        className={styles.list}
        loader={null}
        dataLength={mentors.length || 0}
      >
        {!!mentors?.length &&
          mentors.flat().map((mentor: swagger.Mentor) => (
            <FadeIn key={mentor?._id}>
              <Card {...mentor} />
            </FadeIn>
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default MentorsList;
