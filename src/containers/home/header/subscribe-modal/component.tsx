import React, { useCallback, useRef, useState } from 'react';

import { Form, Field } from 'react-final-form';

import { useSaveSubscribe } from 'hooks/subscribe';
import { useToasts } from 'hooks/toast';

import FullScreenModal from 'containers/home/header/full-screen-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';

const SubscribeModal = ({ isOpen, close }) => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const saveSubscribeMutation = useSaveSubscribe({});

  const { addToast } = useToasts();

  const onSubmit = useCallback(
    (data, form) => {
      setSubmitting(true);
      saveSubscribeMutation.mutate(
        { data },
        {
          onSuccess: () => {
            setSubmitting(false);
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
            setSubmitting(false);
          },
        }
      );
    },
    [saveSubscribeMutation, addToast]
  );

  return (
    <div className="relative">
      <FullScreenModal open={isOpen} onOpenChange={() => close()} zIndex="z-50">
        <div className="flex flex-col w-full bg-white">
          <Wrapper>
            <div className="relative flex flex-col items-center justify-center h-screen text-center bg-white">
              <div className="space-y-16 mx-60">
                <div className="flex flex-col mx-4 space-y-6 font-sans text-gray-800">
                  <h2 className="text-3xl">Keep up to date</h2>
                  <p className="text-lg leading-7">
                    Keep up to date on our progress and be among the first to access our platform.
                  </p>
                </div>

                <Form initialValues={{ email: null }} onSubmit={onSubmit}>
                  {({ handleSubmit, form }) => {
                    formRef.current = form;
                    return (
                      <form
                        className="py-6 xl:col-span-6 xl:py-0"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="flex flex-col justify-between w-full space-y-4 xl:flex-row xl:space-y-0">
                          <Field
                            name="email"
                            component="input"
                            validate={composeValidators([{ presence: true, email: true }])}
                          >
                            {({ input, meta }) => (
                              <div className="relative w-full">
                                <input
                                  {...input}
                                  value={input.value as string}
                                  type="email"
                                  placeholder="Enter your email"
                                  className="flex w-full px-10 py-4 text-base text-gray-800 transition duration-300 ease-in-out delay-150 bg-gray-100 border-none rounded-full focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 focus:bg-white md:text-lg md:py-5 xl:rounded-l-full xl:rounded-r-none placeholder:text-gray-400"
                                />
                                {meta.error && meta.touched && meta.active && (
                                  <p className="absolute text-sm text-red-600 top-9 md:top-20 left-10 first-letter:capitalize">
                                    {meta.error}
                                  </p>
                                )}
                              </div>
                            )}
                          </Field>
                          <Button
                            disabled={submitting}
                            size="s"
                            theme="primary"
                            type="submit"
                            className="space-x-4 rounded-full xl:rounded-r-full xl:rounded-l-none"
                          >
                            <p>Subscribe</p>
                          </Button>
                        </div>
                      </form>
                    );
                  }}
                </Form>
              </div>

              <div className="absolute bottom-5">
                <p className="text-base leading-5 text-center text-gray-800 opacity-80">
                  Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28
                  and Global Stocktake in 2023.
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      </FullScreenModal>
    </div>
  );
};

export default SubscribeModal;
