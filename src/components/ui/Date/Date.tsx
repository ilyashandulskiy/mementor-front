import React, { useState } from 'react';
import styles from './Date.module.css';
import cn from 'classnames';
import Modal from 'components/Modal';
import DatePicker from 'components/DatePicker';
import { unixToDate } from './helpers';

interface Props {
  label?: string;
  onChange?: (val: number) => void;
}

const Date = ({ label, onChange }: Props) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(0);

  const onDateChanged = (val: Date) => {
    const newTime = Math.floor(val.getTime() / 1000);
    onChange && onChange(newTime);
    setOpened(false);
    setSelected(newTime);
  };

  return (
    <>
      <div onClick={() => setOpened(true)} className={styles.container}>
        {label && <p className={styles.label}>{label}</p>}
        <input
          value={unixToDate(selected)}
          readOnly
          className={cn(['form-control', styles.input])}
        />
      </div>
      <Modal opened={opened} title="Modal" onClose={() => setOpened(false)}>
        <DatePicker onChange={onDateChanged} />
      </Modal>
    </>
  );
};

export default Date;
