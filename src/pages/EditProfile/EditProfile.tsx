import React, { useState } from 'react';
import styles from './EditProfile.module.css';
import ProfileForm from './components/ProfileForm';
import { Profile } from 'types';
import useNavigation from 'hooks/useNavigation';
import { useProfile } from 'hooks/useProfile';
import constants from 'tools/constants';
import Modal from 'components/Modal';
import { Button } from 'components/ui';

const EditProfile = () => {
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { save, data, deleteProfile } = useProfile();
  const navigation = useNavigation();

  const onSave = async (val: Profile) => {
    setSaving(true);
    await save(val);
    setSaving(false);
    navigation.goToProfile();
  };

  const onDeleteAccount = async () => {
    await deleteProfile();
    setDeleting(false);
  };

  const onDeleteModalClosed = () => setDeleting(false);
  const onDeleteModalOpened = () => setDeleting(true);

  if (!data) return null;

  return (
    <div className={styles.container}>
      <h2>НАСТРОЙКА ПРОФИЛЯ</h2>
      <ProfileForm
        defaultValues={
          data.grade
            ? data
            : ({
                email: data.email,
                tariff: constants.defaultTariffs,
              } as Profile)
        }
        loading={saving}
        onChange={(val) => onSave(val as Profile)}
        onDelete={onDeleteModalOpened}
      />
      <Modal
        opened={deleting}
        title="Уверены что хотите удалить свой аккаунт?"
        onClose={onDeleteModalClosed}
      >
        <div className={styles.deleteModalContainer}>
          <Button type="danger" outline onClick={onDeleteAccount}>
            Удалить навсегда
          </Button>
          <Button onClick={onDeleteModalClosed}>Отмена</Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfile;
