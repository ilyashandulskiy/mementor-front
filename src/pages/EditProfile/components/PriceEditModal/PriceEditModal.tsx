import React from 'react';
import Modal from 'components/Modal';
import PriceForm from 'pages/EditProfile/components/PriceForm';
import { CurrentTariffEditing } from 'pages/EditProfile/components/ControlledPrice/components/PriceField/PriceField';

interface Props {
  opened: boolean;
  onClose: () => void;
  data?: CurrentTariffEditing;
  onChange: (val: CurrentTariffEditing) => void;
}

const PriceEditModal = ({ opened, onChange, onClose, data }: Props) => {
  if (data)
    return (
      <Modal opened={opened} title="Изменение тарифа" onClose={onClose}>
        <PriceForm defaultValues={data} onChange={onChange} onClose={onClose} />
      </Modal>
    );
  return null;
};

export default PriceEditModal;
