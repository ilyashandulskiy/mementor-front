import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'components/ui';
import styles from './Filters.module.css';
import { useForm } from 'react-hook-form';
import { MentorsListFilters } from 'pages/MentorsList/MentorsList';
import Spoiler from 'components/Spoiler/Spoiler';
import { yearOptions } from 'pages/EditProfile/helpers';
import { normalizeFilters } from 'pages/MentorsList/helpers';

interface Props {
  onChange: (val: MentorsListFilters) => void;
}

const Filters = ({ onChange }: Props) => {
  const [openedFilters, setOpenedFilters] = useState(false);
  const { handleSubmit, register } = useForm({
    mode: 'onBlur',
    defaultValues: {} as MentorsListFilters,
  });

  const onFormChange = (val: MentorsListFilters) =>
    onChange(normalizeFilters(val));

  return (
    <Form className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          {...register('search', {})}
          placeholder="Поиск"
          className={styles.search}
        />
        <Button submit onClick={handleSubmit(onFormChange)}>
          Искать
        </Button>
      </div>
      <Button outline onClick={() => setOpenedFilters((prev) => !prev)}>
        Фильтры
      </Button>
      <Spoiler opened={openedFilters} height={150} className={styles.filters}>
        <div className={styles.row}>
          <Select
            label="Опыт работы с"
            {...register('experienceSince', {
              valueAsNumber: true,
            })}
          >
            <option value={0}>Любой</option>
            {yearOptions()}
          </Select>
          <Select label="Грейд" {...register('grade', {})}>
            <option value={['junior', 'middle', 'senior']}>Любой</option>
            <option value={['middle', 'senior']}>Middle и старше</option>
            <option value={['senior']}>Senior</option>
          </Select>
        </div>
        <div className={styles.row}>
          <Input
            {...register('minPrice', { valueAsNumber: true })}
            label="Минимальная цена"
            placeholder="0"
          />
          <Input
            {...register('maxPrice', { valueAsNumber: true })}
            label="Максимальная цена"
            placeholder="100000"
          />
        </div>
      </Spoiler>
    </Form>
  );
};

export default Filters;
