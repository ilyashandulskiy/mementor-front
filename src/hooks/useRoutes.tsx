import Login from '../pages/Login';
import Register from '../pages/Register';
import EditProfile from '../pages/EditProfile';
import Profile from '../pages/Profile';
import { ReactNode } from 'react';

type Routes = {
  path: string;
  element: ReactNode;
}[];

const unAuthRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <Login />,
  },
];

const authRoutes = [
  {
    path: '/edit',
    element: <EditProfile />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '*',
    element: <Profile />,
  },
];

const useRoutes = (auth: boolean): Routes => (auth ? authRoutes : unAuthRoutes);

export default useRoutes;
