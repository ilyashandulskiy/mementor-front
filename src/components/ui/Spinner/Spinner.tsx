import React from 'react';
import { BeatLoader } from 'react-spinners';

interface Props {
  size: number;
  color: 'accent' | 'white';
  className?: string;
}

export const Spinner = ({ size, color, className }: Props) => {
  return (
    <BeatLoader
      className={className}
      size={size}
      color={color === 'white' ? 'white' : '#81BC55'}
    />
  );
};
