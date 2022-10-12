import React from 'react';
import Tags from 'components/ui/Tags';
import { Control, Controller } from 'react-hook-form';
import { Profile } from 'types';

interface Props {
  control: Control<Profile>;
  rules: { [key: string]: any };
  placeholder?: string;
  label?: string;
  name: any;
}

const ControlledTags = ({
  name,
  control,
  rules,
  placeholder,
  label,
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
