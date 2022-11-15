import toast from 'react-hot-toast';

const useToast = () => ({
  onError(text: string) {
    toast.error(text);
  },
  onTariffInvalid() {
    toast.error('Тарифы должны идти от самого дешевого до самого дорогого');
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
