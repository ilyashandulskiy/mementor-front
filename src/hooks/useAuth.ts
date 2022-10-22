import { useIsAuthenticated, useSignIn, useSignOut } from 'react-auth-kit';
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
  const isAuthed = useIsAuthenticated();

  return {
    isAuthed,
    login: async (email: string, password: string) => {
      const response = await api.login(email, password);
      if (response?.token)
        singIn({
          ...singInConfig,
          token: response.token,
          authState: { email },
        });
      return !!response?.token;
    },
    logout: () => {
      singOut();
      queryClient.setQueryData<Profile>('profile', {} as Profile);
    },
    register: async (email: string, password: string) => {
      const response = await api.register(email, password);
      if (response?.token)
        singIn({
          ...singInConfig,
          token: response.token,
          authState: { email },
        });
      return !!response?.token;
    },
  };
};

export default useAuth;
