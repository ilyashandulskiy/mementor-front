import { useNavigate } from 'react-router';

const useNavigation = () => {
  const navigate = useNavigate();

  return {
    goToLogin: () => navigate('/login'),
    goToRegistration: () => navigate('/register'),
    goToEditProfile: () => navigate('/edit'),
    goToProfile: () => navigate('/profile'),
  };
};

export default useNavigation;
