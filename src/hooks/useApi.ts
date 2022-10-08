import useFetch from './useFetch';
import { Profile } from 'types';

const useApi = () => {
  const fetch = useFetch();

  return {
    async getAll() {
      return await fetch.get('https://interquiz.herokuapp.com/questions/top');
    },
    async getProfile() {
      return await fetch.get<Profile>(
        'https://interquiz.herokuapp.com/questions/top'
      );
    },
  };
};

export default useApi;
