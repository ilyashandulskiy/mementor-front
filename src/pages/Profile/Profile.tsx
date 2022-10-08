import React from 'react';
import useApi from 'hooks/useApi';
import useNavigation from 'hooks/useNavigation';
import useAuth from 'hooks/useAuth';

const Profile = () => {
  const auth = useAuth();
  const api = useApi();
  const navigation = useNavigation();

  return (
    <div>
      <h2>Profile (private)</h2>
      <button onClick={auth.logout}>Sign out</button>
      <button onClick={navigation.goToEditProfile}>Edit profile</button>
      <button onClick={api.getAll}>Break</button>
    </div>
  );
};

export default Profile;
