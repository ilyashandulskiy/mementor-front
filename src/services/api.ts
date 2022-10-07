import fetchApi from './fetchApi';

interface MentorsResponse {
  name: string;
  surname: string;
}

export default {
  getListOfMentors: async () =>
    await fetchApi.post<MentorsResponse>('mentor', {}),
};
