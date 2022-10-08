import axios from 'axios';
import { useSignOut } from 'react-auth-kit';
import { toast } from 'react-hot-toast';

const baseUrl: string = process.env.REACT_APP_BASE_URL || '';

interface AxiosError {
  response: {
    status: number;
  };
  message: string;
}

const useFetch = () => {
  const signOut = useSignOut();

  const handleError = ({ response: { status }, message }: AxiosError) => {
    if (status === 401) {
      signOut();
    } else {
      toast.error(`Ошибка сервера: ${message}`);
    }
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
