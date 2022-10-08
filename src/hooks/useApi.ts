import useFetch from './useFetch';

const useApi = () => {
  const fetch = useFetch();

  return {
    async getAll() {
      return await fetch.get('https://interquiz.herokuapp.com/questions/top');
    },
  };
};

export default useApi;
