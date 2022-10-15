import { useQuery } from 'react-query';
import useApi from './useApi';

interface Props {
  page: number;
}

export const useMentorsList = ({ page }: Props) => {
  const api = useApi();
  return {
    ...useQuery('mentors', async () => api.getMentorsList(page)),
  };
};
