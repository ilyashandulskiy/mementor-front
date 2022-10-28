import useFetch from './useFetch';
import { BookingRequest, Profile } from 'types';
import * as swagger from 'swagger/swagger';

interface AuthResponse {
  token: string;
}

const useApi = () => {
  const fetch = useFetch();

  return {
    async login({ email, password }: swagger.MementorBackAuth) {
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
      const { mentors } = await fetch.post<any>('mentor/' + page, {});
      return mentors as Profile[];
    },
    async getMentorsListPageCount() {
      const { pages } = await fetch.post<any>('mentor/0', {});
      return pages as number;
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
