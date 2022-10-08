import axios from 'axios';
import { useSignOut } from 'react-auth-kit';

const baseUrl = '';

interface AxiosError {
  response: {
    status: number;
  };
}

const useFetch = () => {
  const signOut = useSignOut();

  const handleError = ({ response: { status } }: AxiosError) => {
    if (status === 401) signOut();
  };

  return {
    async get<T>(url: string) {
      try {
        const { data } = await axios.get<T>(baseUrl + url);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
    async post<T>(url: string, body: any) {
      try {
        const { data } = await axios.get<T>(baseUrl + url, body);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
    async put<T>(url: string, body: any) {
      try {
        const { data } = await axios.get<T>(baseUrl + url, body);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
  };
};

export default useFetch;
