import React from 'react';
import { useSignOut } from 'react-auth-kit';
import useApi from 'hooks/useApi';

const Profile = () => {
  const signOut = useSignOut();
  const api = useApi();

  return (
    <div>
      <h2>Profile (private)</h2>
      <button onClick={signOut}>Sign out</button>
      <button onClick={api.getAll}>Break</button>
    </div>
  );
};

export default Profile;
