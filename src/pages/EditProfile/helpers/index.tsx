import React from 'react';
import { Profile } from 'types';

export const yearOptions = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 30; i++) {
    years.push(currentYear - i);
  }
  return years.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));
};

export const isTariffValid = (profile: Profile) => {
  const prices = profile.tariff?.map(({ price }) => price) || [];
  return prices[0] <= prices[1] && prices[1] <= prices[2];
};
