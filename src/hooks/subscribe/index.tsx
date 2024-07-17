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

export const onSubmitSubscribe = async (
  data,
  form,
  recaptchaRef,
  addToast,
  saveSubscribeMutation
) => {
  const captchaToken = await recaptchaRef.current.executeAsync();
  recaptchaRef.current.reset();

  // Check Backend verification of reCAPTCHA
  const origin =
    typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  const res = await fetch(`${origin}/api/verify`, {
    method: 'POST',
    body: JSON.stringify({ captchaValue: captchaToken }),
    headers: {
      'content-type': 'application/json',
    },
  });

  const recaptchaVerifyData = await res.json();
  if (recaptchaVerifyData.success) {
    // Make Form submission
    saveSubscribeMutation.mutate(
      { data },
      {
        onSuccess: () => {
          addToast(
            'success-contact',
            <>
              <p className="text-base">You have successfully subscribed.</p>
            </>,
            {
              level: 'success',
            }
          );
          form.reset();
        },
        onError: () => {
          addToast(
            'error-contact',
            <>
              <p className="text-base">Oops! Something went wrong</p>
            </>,
            {
              level: 'error',
            }
          );
        },
      }
    );
  } else {
    // reCAPTCHA backend validation failed
    addToast(
      'error-contact',
      <>
        <p className="text-base">reCAPTCHA validation failed</p>
      </>,
      {
        level: 'error',
      }
    );
  }
};
