import React from 'react';
import styles from '../EditProfile/EditProfile.module.css';
import ProfileInformation from 'components/ProfileInformation';
import { useMentor } from 'hooks/useMentor';
import { useParams } from 'react-router';
import useNavigation from 'hooks/useNavigation';

const Mentor = () => {
  const { id } = useParams();
  const navigation = useNavigation();
  if (!id) {
    navigation.goToProfile();
    return null;
  }
  const { data } = useMentor({ id });

  return (
    <div className={styles.container}>
      <ProfileInformation data={data} />
    </div>
  );
};

export default Mentor;
