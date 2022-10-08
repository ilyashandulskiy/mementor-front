import toast from 'react-hot-toast';
import { useAuthHeader, useSignOut } from 'react-auth-kit';
import axios from 'axios';

const baseUrl: string = process.env.REACT_APP_BASE_URL || '';

interface AxiosError {
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}

const useFetch = () => {
  const signOut = useSignOut();
  const authHeader = useAuthHeader();

  const instance = axios.create({
    headers: {
      Authorization: authHeader(),
    },
  });

  const handleError = ({
    response: {
      status,
      data: { message },
    },
  }: AxiosError) => {
    if (status === 401) return signOut();
    if (status === 412) return toast.error('Такой пользователь не найден');

    toast.error(`Ошибка сервера: ${message}`);
  };

  return {
    async get<T>(url: string) {
      try {
        const { data } = await instance.get<T>(baseUrl + url);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
    async post<T>(url: string, body: any) {
      try {
        const { data } = await instance.post<T>(baseUrl + url, body);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
    async put<T>(url: string, body: any) {
      try {
        const { data } = await instance.put<T>(baseUrl + url, body);
        return data;
      } catch (err) {
        handleError(err as AxiosError);
      }
    },
  };
};

export default useFetch;
