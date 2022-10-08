import React from 'react';

export const yearOptions = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 30; i++) {
    years.push(currentYear - i);
  }
  return years.map((year) => <option value={year}>{year}</option>);
};
