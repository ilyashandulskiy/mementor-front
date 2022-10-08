import { useSignIn, useSignOut } from 'react-auth-kit';

const singInConfig = {
  token: 'token',
  expiresIn: 100000,
  tokenType: 'JWT',
};

const useAuth = () => {
  const singIn = useSignIn();
  const singOut = useSignOut();

  return {
    login: (email: string, password: string) =>
      singIn({ ...singInConfig, authState: { email, password } }),
    logout: () => singOut(),
    register: (email: string, password: string) =>
      singIn({ ...singInConfig, authState: { email, password } }),
  };
};

export default useAuth;
