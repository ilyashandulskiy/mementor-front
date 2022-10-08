import React from 'react';
import { Route, Routes } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import ContentBlock from 'components/ContentBlock';
import useRoutes from 'hooks/useRoutes';
import { useIsAuthenticated } from 'react-auth-kit';

const Navigation = () => {
  const auth = useIsAuthenticated();
  const routes = useRoutes(auth());

  return (
    <AnimatePresence>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={
              <ContentBlock key={route.path}>{route.element}</ContentBlock>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default Navigation;
