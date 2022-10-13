import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import { useUIStore } from 'store/ui';

import { useSaveSubscribe } from 'hooks/subscribe';

import { NAV_OPTIONS } from 'containers/home/header/constants';
import FullScreenModal from 'containers/home/header/full-screen-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import Toast from 'components/toast';
import { capitalizeString } from 'lib/utils';

const MobileMenuModal = () => {
  const [submitting, setSubmitting] = useState(false);
  const [toast, displayToast] = useState(false);

  const saveSubscribeMutation = useSaveSubscribe({});

  const closeMenu = useUIStore((state) => state.closeMenu);
  const menu = useUIStore((state) => state.menu);

  const handleSubmit = useCallback(
    (data) => {
      setSubmitting(true);
      saveSubscribeMutation.mutate(
        { data },
        {
          onSuccess: () => {
            setSubmitting(false);
            displayToast(true);
          },
          onError: () => {
            setSubmitting(false);
          },
        }
      );
    },
    [saveSubscribeMutation]
  );

  const scrollMenu = useCallback((id) => {
    const $scrollEl = document.getElementById(id);
    $scrollEl.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return (
    <FullScreenModal open={menu} theme="dark" onOpenChange={() => closeMenu()}>
      <section className="z-10 w-full h-screen font-sans text-center text-white bg-gray-900">
        <Wrapper>
          <div className="flex flex-col py-32 space-y-10">
            {NAV_OPTIONS.map((o) => (
              <button
                key={o.id}
                className="text-lg text-white"
                onClick={() => {
                  closeMenu();
                  scrollMenu(o.id);
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
          <Form initialValues={{ email: null }} onSubmit={handleSubmit}>
            {(props) => (
              <form onSubmit={props.handleSubmit} className="py-6 xl:col-span-6 xl:py-0">
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
                          className="flex w-full px-10 py-4 text-base text-gray-800 bg-gray-100 border-none rounded-full focus:bg-white md:text-lg md:py-5 xl:rounded-l-full xl:rounded-r-none placeholder:text-gray-400"
                        />
                        {meta.error && meta.touched && (
                          <p className="absolute text-sm text-red-600 top-9 md:top-12 xl:top-full left-10">
                            {capitalizeString(meta.error)}
                          </p>
                        )}
                      </div>
                    )}
                  </Field>
                  <Button
                    disabled={submitting}
                    size="s"
                    theme="secondary"
                    type="submit"
                    className="space-x-4 rounded-full xl:rounded-r-full xl:rounded-l-none"
                  >
                    <p>Subscribe</p>
                  </Button>
                </div>
              </form>
            )}
          </Form>
          <div className="">
            <p className="text-sm leading-5 text-white">
              Subscribe to keep up to date on our progress and be among the first to access our
              platform.
            </p>
          </div>
        </Wrapper>

        {toast && (
          <div className="absolute z-20 right-10 bottom-10">
            <Toast
              id="contact"
              content="You have successfully subscribed."
              level="success"
              onDismiss={() => displayToast(false)}
            />
          </div>
        )}
      </section>
    </FullScreenModal>
  );
};

export default MobileMenuModal;
