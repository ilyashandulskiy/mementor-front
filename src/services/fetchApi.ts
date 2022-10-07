import axios from 'axios';

const baseUrl = 'base';

export default {
  async get<T>(url: string) {
    const { data } = await axios.get<T>(baseUrl + url);
    return data;
  },
  async post<T>(url: string, body: any) {
    const { data } = await axios.post<T>(baseUrl + url, body);
    return data;
  },
  async put<T>(url: string, body: any) {
    const { data } = await axios.put<T>(baseUrl + url, body);
    return data;
  },
};
