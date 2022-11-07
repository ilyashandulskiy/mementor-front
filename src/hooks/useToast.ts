import toast from 'react-hot-toast';

const useToast = () => ({
  onError(text: string) {
    toast.error(text);
  },
  onTariffRequestSend() {
    toast.success(
      'Ваша заявка успешно отправлена! Ментор свяжется с вами в ближайшее время',
      { duration: 3000 }
    );
  },
  onUserNotFound() {
    toast.error('Такой пользователь не найден');
  },
  onUserExists() {
    toast.error('Пользователь с таким адресом почты уже зарегистрирован');
  },
});

export default useToast;
