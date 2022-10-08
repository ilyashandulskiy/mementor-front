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
    if (status === 401) return signOut();
    if (status === 412) return toast.error('Такой пользователь не найден');

    toast.error(`Ошибка сервера: ${message}`);
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
        const { data } = await axios.post<T>(baseUrl + url, body);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
    async put<T>(url: string, body: any) {
      try {
        const { data } = await axios.put<T>(baseUrl + url, body);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
  };
};

export default useFetch;
