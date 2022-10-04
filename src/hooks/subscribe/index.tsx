import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { SaveSubscribeProps, UseSaveSubscribeProps } from './types';

export function useSaveSubscribe({
  requestConfig = {
    method: 'PUT',
  },
}: UseSaveSubscribeProps) {
  const saveSubscribe = ({ data }: SaveSubscribeProps) => {
    return axios.request({
      url: '/api/subscribe',
      data,
      ...requestConfig,
    });
  };

  return useMutation(saveSubscribe, {
    onSuccess: (data, variables, context) => {
      console.info('Succces', data, variables, context);
    },
    onError: (error, variables, context) => {
      console.info('Error', error, variables, context);
    },
  });
}
