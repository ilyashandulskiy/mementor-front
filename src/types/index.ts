export interface Profile {
  name: string;
  surname: string;
  email: string;
  experienceSince: number;
  programmingLanguage: string[];
  technology?: string[];
  grade: 'junior' | 'middle' | 'senior';
  description?: string;
  education?: { place: string; department: string }[];
  tariff?: { price: number; name: string }[];
  canHelpWith?: string[];
  language?: string[];
}