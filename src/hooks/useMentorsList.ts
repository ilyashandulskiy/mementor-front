import { useInfiniteQuery } from 'react-query';
import useApi from './useApi';

export const useMentorsList = () => {
  const api = useApi();
  return {
    ...useInfiniteQuery(
      ['mentors'],
      async ({ pageParam = 0 }) => api.getMentorsList(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length + 1;
        },
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
      }
    ),
    getPages: api.getMentorsListPageCount(),
  };
};
