import useFetch from './useFetch';
import { BookingRequest, Profile } from 'types';
import * as swagger from 'swagger';

const useApi = () => {
  const fetch = useFetch();

  return {
    async login({ email, password }: swagger.PostAuthRequest) {
      return await fetch.post<swagger.PostAuthResponse>('sign-in', {
        email,
        password,
      });
    },
    async register({ email, password }: swagger.PostAuthRequest) {
      return await fetch.post<swagger.PostAuthResponse>('sign-up', {
        email,
        password,
      });
    },
    async getProfile() {
      return await fetch.get<swagger.GetMentorResponse>('mentor');
    },
    async getMentor(id: string) {
      return await fetch.get<swagger.GetMentorResponse>('mentor/' + id);
    },
    async getMentorsList(page: number, data: swagger.PostMentorRequest) {
      const { mentors } = await fetch.post<swagger.PostMentorResponse>(
        'mentor/' + page,
        data
      );
      return mentors;
    },
    async getMentorsListPageCount() {
      const { pages } = await fetch.post<swagger.PostMentorResponse>(
        'mentor/0',
        {}
      );
      return pages;
    },
    async saveProfile(data: Profile) {
      return await fetch.put<swagger.BasicResponse>('mentor', data);
    },
    async deleteProfile() {
      return await fetch.delete<swagger.BasicResponse>('mentor');
    },
    async bookTariff(data: BookingRequest) {
      return await fetch.post<swagger.BasicResponse>('book', data);
    },
  };
};

export default useApi;
