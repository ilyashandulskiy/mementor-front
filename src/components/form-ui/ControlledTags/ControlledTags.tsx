import React from 'react';
import { Tags } from 'components/ui';
import { Control, Controller } from 'react-hook-form';
import { Profile } from 'types';

interface Props {
  control: Control<Profile>;
  rules: { [key: string]: any };
  placeholder?: string;
  label?: string;
  name: any;
  separator?: string;
}

const ControlledTags = ({
  name,
  control,
  rules,
  placeholder,
  label,
  separator,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <Tags
          separator={separator}
          placeholder={placeholder}
          label={label}
          error={!!error}
          tags={value || []}
          setTags={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default ControlledTags;
