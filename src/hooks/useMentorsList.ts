import { useInfiniteQuery } from 'react-query';
import useApi from './useApi';
import * as swagger from 'swagger';

export const useMentorsList = (filters: swagger.PostMentorRequest) => {
  const api = useApi();
  return {
    ...useInfiniteQuery(
      ['mentors', filters],
      async ({ pageParam = 0 }) => api.getMentorsList(pageParam, filters),
      {
        getNextPageParam: (lastPage, allPages) => {
          return allPages.length;
        },
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
      }
    ),
    getPages: api.getMentorsListPageCount(),
  };
};
