import useFetch from './useFetch';
import { BookingRequest, Profile } from 'types';

interface AuthResponse {
  token: string;
}

const useApi = () => {
  const fetch = useFetch();

  return {
    async login(email: string, password: string) {
      return await fetch.post<AuthResponse>('sign-in', { email, password });
    },
    async register(email: string, password: string) {
      return await fetch.post<AuthResponse>('sign-up', { email, password });
    },
    async getProfile() {
      return await fetch.get<Profile>('mentor');
    },
    async getMentor(id: string) {
      return await fetch.get<Profile>('mentor/' + id);
    },
    async getMentorsList(page: number) {
      return await fetch.post<Profile[]>('mentor/' + page, {});
    },
    async saveProfile(data: Profile) {
      return await fetch.put<string>('mentor', data);
    },
    async bookTariff(data: BookingRequest) {
      return await fetch.post('book', data);
    },
  };
};

export default useApi;
