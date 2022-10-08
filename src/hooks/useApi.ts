import useFetch from './useFetch';
import { Profile } from 'types';

const useApi = () => {
  const fetch = useFetch();

  return {
    async login(email: string, password: string) {
      return await fetch.post<string>('sign-in', { email, password });
    },
    async register(email: string, password: string) {
      return await fetch.post<string>('sign-up', { email, password });
    },
    async getProfile() {
      return await fetch.get<Profile>(
        'https://interquiz.herokuapp.com/questions/top'
      );
    },
  };
};

export default useApi;
