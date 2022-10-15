import { useNavigate } from 'react-router';

const useNavigation = () => {
  const navigate = useNavigate();

  return {
    goToLogin: () => navigate('/login'),
    goToRegistration: () => navigate('/register'),
    goToEditProfile: () => navigate('/edit'),
    goToProfile: () => navigate('/profile'),
    goToMentor: (id: string) => navigate('/mentor/' + id),
    goToMentorsList: () => navigate('/mentor'),
  };
};

export default useNavigation;
