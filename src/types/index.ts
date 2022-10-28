import React from 'react';

export interface Profile {
  name: string;
  surname: string;
  email: string;
  experienceSince: number;
  programmingLanguage: string[];
  technology: string[];
  grade: 'junior' | 'middle' | 'senior';
  description?: string;
  education?: { place: string; department: string }[];
  tariff?: { price: number; name: string; description: string }[];
  canHelpWith?: string[];
  language?: string[];
  validProfile?: boolean;
  _id?: string;
}

export interface TariffItem {
  price: number;
  name: string;
  description: string;
}

export interface BookingRequest {
  customerName: string;
  customerTelegram: string;
  mentorId: string;
  tariffIndex: number;
}

export interface BookingFormResponse {
  customerName: string;
  customerTelegram: string;
}

export type FormSubmitProp = React.MouseEvent<HTMLButtonElement, MouseEvent>;
