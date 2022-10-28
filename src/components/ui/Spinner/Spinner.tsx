import React from 'react';
import { BeatLoader } from 'react-spinners';

interface Props {
  size: number;
  color: 'accent' | 'white';
}

export const Spinner = ({ size, color }: Props) => {
  return (
    <BeatLoader size={size} color={color === 'white' ? 'white' : '#81BC55'} />
  );
};
