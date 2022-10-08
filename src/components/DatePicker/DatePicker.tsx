import React from 'react';
import Calendar, {
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from 'react-calendar';

interface Props {
  onChange: OnChangeDateCallback | OnChangeDateRangeCallback | undefined;
}

function DatePicker({ onChange }: Props) {
  return (
    <Calendar allowPartialRange={false} returnValue="end" onChange={onChange} />
  );
}

export default DatePicker;
