import { useInfiniteQuery } from 'react-query';
import useApi from './useApi';

export const useMentorsList = () => {
  const api = useApi();
  return {
    ...useInfiniteQuery(
      ['mentors'],
      async ({ pageParam = 1 }) => api.getMentorsList(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length + 1;
        },
      }
    ),
  };
};
