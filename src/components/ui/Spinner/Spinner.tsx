import React from 'react';
import { BeatLoader } from 'react-spinners';

interface Props {
  size: number;
}

const Spinner = ({ size }: Props) => {
  return <BeatLoader size={size} color="white" />;
};

export default Spinner;
