import { AxiosRequestConfig } from 'axios';

export interface UseSaveSubscribeProps {
  requestConfig?: AxiosRequestConfig;
}

export interface SaveSubscribeProps {
  data: {
    email: string;
  };
}
