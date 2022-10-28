import Login from 'pages/Login';
import Register from 'pages/Register';
import EditProfile from 'pages/EditProfile';
import Profile from 'pages/Profile';
import { ReactNode } from 'react';
import Mentor from 'pages/Mentor';
import MentorsList from 'pages/MentorsList';

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
    element: <MentorsList />,
  },
];

const commonRoutes = [
  {
    path: '/mentor/:id',
    element: <Mentor />,
  },
  {
    path: '/mentor',
    element: <MentorsList />,
  },
];

const useRoutes = (auth: boolean): Routes =>
  auth ? [...authRoutes, ...commonRoutes] : [...unAuthRoutes, ...commonRoutes];

export default useRoutes;
