/* Use the ApiService in Your Application

import ApiService from './ApiService';
const apiService = new ApiService();

// Example usage:
apiService.get('/users').then(users => {
    console.log(users);
}).catch(error => {
    console.error('Failed to fetch users:', error);
});

* */
import { AxiosResponse, AxiosError } from 'axios';
import axiosInstance from '@/plugins/axios';

interface ApiResponse<T> {
  data: T;
}

class ApiService {
  private handleError(error: AxiosError): any {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject('No response received');
    } else {
      return Promise.reject(error.message);
    }
  }

  public get<T>(endpoint: string): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get<ApiResponse<T>>(endpoint)
        .then((response: AxiosResponse<ApiResponse<T>>) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(this.handleError(error));
        });
    });
  }

  public post<T>(
    endpoint: string,
    data = {},
    isFormData: boolean = false,
  ): Promise<T> {
    if (isFormData) {
      data = this.convertToFormData(data);
    }
    return new Promise((resolve, reject) => {
      axiosInstance
        .post<ApiResponse<T>>(endpoint, data)
        .then((response: AxiosResponse<ApiResponse<T>>) => {
          resolve(response.data.data);
        })
        .catch((error: AxiosError) => {
          reject(this.handleError(error));
        });
    });
  }

  public put<T>(endpoint: string, data = {}): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .put<ApiResponse<T>>(endpoint, data)
        .then((response: AxiosResponse<ApiResponse<T>>) => {
          resolve(response.data.data);
        })
        .catch((error: AxiosError) => {
          reject(this.handleError(error));
        });
    });
  }

  public delete<T>(endpoint: string): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete<ApiResponse<T>>(endpoint)
        .then((response: AxiosResponse<ApiResponse<T>>) => {
          resolve(response.data.data);
        })
        .catch((error: AxiosError) => {
          reject(this.handleError(error));
        });
    });
  }

  public patch<T>(endpoint: string, data = {}): Promise<T> {
    return new Promise((resolve, reject) => {
      axiosInstance
        .patch<ApiResponse<T>>(endpoint, data)
        .then((response: AxiosResponse<ApiResponse<T>>) => {
          resolve(response.data.data);
        })
        .catch((error: AxiosError) => {
          reject(this.handleError(error));
        });
    });
  }

  private convertToFormData(object: any): FormData {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }
}

export default ApiService;
