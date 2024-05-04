import { reactive } from 'vue';
const snackbar = reactive({
  open: false,
  message: '',
  color: 'success',
  location: undefined,
  time: 5000, // 5 seconds
});

export const useSnackbar = () => {
  const show = (
    message: string,
    color: string = 'success',
    location: any = 'top',
    time: number = 5000,
  ) => {
    snackbar.message = message;
    snackbar.color = color;
    snackbar.location = location;
    snackbar.time = time;
    snackbar.open = true;
  };

  return {
    snackbar,
    show,
  };
};
