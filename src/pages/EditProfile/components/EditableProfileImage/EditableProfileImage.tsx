import React, { useState } from 'react';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import useUpload from 'hooks/useUpload';

const EditableProfileImage = () => {
  const [changedImage, setChangedImage] = useState('');
  const { chooseFile } = useUpload({ onChange: setChangedImage });

  return (
    <ProfileImage
      onClick={chooseFile}
      clickable
      src={
        changedImage ||
        'https://photo9.wambacdn.net/44/84/04/1749404844/1785668513_huge.jpg?hash=rS6IY83UPoUS4XEeN9MwRw&expires=64060578000&updated=1500977830'
      }
    />
  );
};

export default EditableProfileImage;
