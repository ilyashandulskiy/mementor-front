import React from 'react';
import { Route, Routes } from 'react-router';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { AnimatePresence } from 'framer-motion';
import ContentBlock from '../components/ContentBlock';
import EditProfile from '../pages/EditProfile';

const Navigation = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route
          element={
            <ContentBlock key="login">
              <Login />
            </ContentBlock>
          }
          path="/login"
        />
        <Route
          element={
            <ContentBlock key="register">
              <Register />
            </ContentBlock>
          }
          path="/register"
        />
        <Route
          element={
            <ContentBlock key="createProfile">
              <EditProfile />
            </ContentBlock>
          }
          path="/create"
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Navigation;
