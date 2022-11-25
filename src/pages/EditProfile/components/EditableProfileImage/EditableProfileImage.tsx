import React, { useState } from 'react';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import useUpload from 'hooks/useUpload';
import { useProfile } from 'hooks/useProfile';

interface Props {
  defaultImage?: string;
}

const EditableProfileImage = ({ defaultImage }: Props) => {
  const [changedImage, setChangedImage] = useState('');
  const [loading, setLoading] = useState(false);
  const { uploadProfileImage } = useProfile();

  const onImageChange = async (base64: string) => {
    setLoading(true);
    const result = await uploadProfileImage(base64);
    setLoading(false);
    setChangedImage(result['512x512'] || '');
  };
  const { chooseFile } = useUpload({ onChange: onImageChange });

  return (
    <ProfileImage
      onClick={chooseFile}
      clickable
      loading={loading}
      src={changedImage || defaultImage}
    />
  );
};

export default EditableProfileImage;
