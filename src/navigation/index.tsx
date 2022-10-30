import React from 'react';
import { Route, Routes } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import ContentBlock from 'components/ContentBlock';
import useRoutes from 'hooks/useRoutes';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const { isAuthed } = useAuth();
  const routes = useRoutes(isAuthed());

  return (
    <AnimatePresence>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <ContentBlock keyProp={route.path}>{route.element}</ContentBlock>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default Navigation;
