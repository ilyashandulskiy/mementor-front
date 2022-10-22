import React, { useState } from 'react';
import styles from '../EditProfile/EditProfile.module.css';
import ProfileInformation from 'components/ProfileInformation';
import { useMentor } from 'hooks/useMentor';
import { useParams } from 'react-router';
import useNavigation from 'hooks/useNavigation';
import Modal from 'components/Modal';
import { BookingFormResponse } from 'types';
import BookingForm from './components/BookingForm';
import useApi from 'hooks/useApi';

const Mentor = () => {
  const { id } = useParams();
  const api = useApi();
  const [bookingOpened, setBookingOpened] = useState(false);
  const [tariffSelected, setTariffSelected] = useState(0);
  const navigation = useNavigation();
  if (!id) {
    navigation.goToProfile();
    return null;
  }
  const { data } = useMentor({ id });

  const onTariffSelected = (id: number) => {
    setBookingOpened(true);
    setTariffSelected(id);
  };

  const onBooking = async (data: BookingFormResponse) => {
    await api.bookTariff({
      ...data,
      tariffIndex: tariffSelected,
      mentorId: id,
    });
  };

  return (
    <div className={styles.container}>
      <ProfileInformation data={data} onTariffClick={onTariffSelected} />
      <Modal
        opened={bookingOpened}
        title={`Взять тариф ${
          data?.tariff && data.tariff[tariffSelected].name
        }`}
        onClose={() => setBookingOpened(false)}
      >
        <BookingForm onChange={onBooking} />
      </Modal>
    </div>
  );
};

export default Mentor;
