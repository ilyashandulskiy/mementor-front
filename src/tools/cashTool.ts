import currency from 'currency.js';

export default {
  display(val: number): string {
    return currency(val, {
      separator: ' ',
      decimal: '.',
      precision: 0,
      pattern: '# ₽',
    }).format();
  },
};
