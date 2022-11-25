import { useQuery } from 'react-query';
import useApi from './useApi';
import { Profile } from 'types';
import queryClient from 'services/queryClient';
import useAuth from './useAuth';

export const useProfile = () => {
  const api = useApi();
  const auth = useAuth();
  return {
    ...useQuery('profile', async () => api.getProfile()),
    save: async (data: Profile) => {
      await api.saveProfile(data);
      queryClient.setQueryData<Profile>('profile', data);
    },
    deleteProfile: async () => {
      await api.deleteProfile();
      auth.logout();
    },
    uploadProfileImage: async (base64: string) => {
      return await api.uploadProfileImage({ base64 });
    },
  };
};
