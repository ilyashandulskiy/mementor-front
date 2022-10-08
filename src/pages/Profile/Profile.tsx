import React from 'react';
import { useSignOut } from 'react-auth-kit';
import useApi from 'hooks/useApi';
import useNavigation from 'hooks/useNavigation';

const Profile = () => {
  const signOut = useSignOut();
  const api = useApi();
  const navigation = useNavigation();

  return (
    <div>
      <h2>Profile (private)</h2>
      <button onClick={signOut}>Sign out</button>
      <button onClick={navigation.goToEditProfile}>Edit profile</button>
      <button onClick={api.getAll}>Break</button>
    </div>
  );
};

export default Profile;
