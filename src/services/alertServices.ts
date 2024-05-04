// alertService.ts

import { useSnackbar } from '@/composables/snackbar';

class AlertService {
  private snackbar = useSnackbar();

  public success(message: string) {
    this.snackbar.show(message, 'success');
  }

  public warning(message: string) {
    this.snackbar.show(message, 'warning');
  }

  public info(message: string) {
    this.snackbar.show(message, 'info');
  }

  public danger(message: string) {
    this.snackbar.show(message, 'error'); // Assuming 'danger' maps to 'error' in color
  }

  public custom(
    message: string,
    color: 'success' | 'warning' | 'info' | 'error' = 'warning',
    location: boolean | 'top' | 'end' | 'bottom' | 'start' = 'top',
    time: number = 5000,
  ) {
    this.snackbar.show(message, color, location, time);
  }

  public clear() {
    this.snackbar.snackbar.open = false;
  }
}

export const alertService = new AlertService();
