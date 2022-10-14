import { useQuery } from 'react-query';
import useApi from './useApi';

interface Props {
  id: string;
}

export const useMentor = ({ id }: Props) => {
  const api = useApi();
  return {
    ...useQuery('mentor-' + id, async () => api.getMentor(id)),
  };
};
