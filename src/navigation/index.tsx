import React from 'react';
import { Route, Routes } from 'react-router';
import Login from '../pages/Login';

const Navigation = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
    </Routes>
  );
};

export default Navigation;
