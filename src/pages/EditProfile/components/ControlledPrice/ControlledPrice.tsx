import React from 'react';

import { Profile } from 'types';
import { Control, Controller } from 'react-hook-form';
import PriceField from './components/PriceField';

interface Props {
  control: Control<Profile>;
  rules: { [key: string]: any };
}

const ControlledPrice = ({ control, rules }: Props) => {
  return (
    <Controller
      control={control}
      name={'tariff'}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <PriceField value={value || []} setValue={onChange} />
      )}
    />
  );
};

export default ControlledPrice;
