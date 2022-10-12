import { useSignIn, useSignOut } from 'react-auth-kit';
import useApi from './useApi';
import queryClient from 'services/queryClient';
import { Profile } from 'types';

const singInConfig = {
  expiresIn: 100000,
  tokenType: 'Bearer',
};

const useAuth = () => {
  const singIn = useSignIn();
  const singOut = useSignOut();
  const api = useApi();

  return {
    login: async (email: string, password: string) => {
      const token = await api.login(email, password);
      if (token) singIn({ ...singInConfig, token, authState: { email } });
      return !!token;
    },
    logout: () => {
      singOut();
      queryClient.setQueryData<Profile>('profile', {} as Profile);
    },
    register: async (email: string, password: string) => {
      const token = await api.register(email, password);
      if (token) singIn({ ...singInConfig, token, authState: { email } });
      return !!token;
    },
  };
};

export default useAuth;
