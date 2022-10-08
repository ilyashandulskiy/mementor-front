import { useSignIn, useSignOut } from 'react-auth-kit';
import useApi from './useApi';

const singInConfig = {
  expiresIn: 100000,
  tokenType: 'JWT',
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
    logout: () => singOut(),
    register: async (email: string, password: string) => {
      const token = await api.register(email, password);
      if (token) singIn({ ...singInConfig, token, authState: { email } });
      return !!token;
    },
  };
};

export default useAuth;
