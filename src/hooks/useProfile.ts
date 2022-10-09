import { useQuery } from 'react-query';
import useApi from './useApi';
import { Profile } from 'types';
import queryClient from 'services/queryClient';

export const useProfile = () => {
  const api = useApi();
  return {
    ...useQuery('profile', async () => api.getProfile()),
    save: async (data: Profile) => {
      await api.saveProfile(data);
      queryClient.setQueryData<Profile>('profile', data);
    },
  };
};
