import React, { useState } from 'react';
import styles from '../../ControlledPrice.module.css';
import PriceBlock from 'components/PriceBlock';
import PriceEditModal from 'pages/EditProfile/components/PriceEditModal';
import { TariffItem } from 'types';

interface Props {
  value: TariffItem[];
  setValue: (val: TariffItem[]) => void;
}

export interface CurrentTariffEditing extends TariffItem {
  index: number;
}

const PriceField = ({ value, setValue }: Props) => {
  const [priceModalOpened, setPriceModalOpened] = useState(false);
  const [currentTariffEditing, setCurrentTariffEditing] =
    useState<CurrentTariffEditing>({} as CurrentTariffEditing);

  const onChange = (val: CurrentTariffEditing) => {
    const newValue = [...value];
    newValue[val.index] = {
      name: val.name,
      description: val.description,
      price: val.price,
    };
    setValue(newValue);
    setPriceModalOpened(false);
  };

  return (
    <>
      <div className={styles.priceContainer}>
        {value?.map((tariff, index) => (
          <PriceBlock
            buttonText="Изменить"
            onClick={() => {
              setPriceModalOpened(true);
              setCurrentTariffEditing({ ...tariff, index });
            }}
            price={tariff.price}
            name={tariff.name}
            description={tariff.description}
          />
        ))}
      </div>
      <PriceEditModal
        onChange={onChange}
        opened={priceModalOpened}
        data={currentTariffEditing}
        onClose={() => setPriceModalOpened(false)}
      />
    </>
  );
};

export default PriceField;
