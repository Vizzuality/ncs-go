import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import useBreakpoint from 'use-breakpoint';

import { useSaveSubscribe } from 'hooks/subscribe';

import SubscribeModal from 'containers/home/menu/subscribe-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
// import Modal from 'components/modal';
import { BREAKPOINTS } from 'styles/styles.config';

import { NAV_OPTIONS } from './constants';

const Menu: React.FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');
  const [openModal, setOpenModal] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const saveSubscribeMutation = useSaveSubscribe({});

  const handleSubmit = useCallback(
    (data) => {
      setSubmitting(true);
      saveSubscribeMutation.mutate(
        { data },
        {
          onSuccess: () => {
            setSubmitting(false);
          },
          onError: () => {
            setSubmitting(false);
          },
        }
      );
    },
    [saveSubscribeMutation]
  );

  return (
    <div className="relative">
      {minWidth < BREAKPOINTS.lg && (
        <section className="fixed z-10 w-full h-full font-sans text-center text-white bg-gray-900 border border-orange-400">
          <Wrapper>
            <div className="flex flex-col py-32 space-y-10">
              {NAV_OPTIONS.map((o) => (
                <a href={o.id} key={o.id} className="text-lg text-white">
                  {o.label}
                </a>
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
                            className="flex w-full px-10 py-4 text-base text-gray-800 bg-gray-100 border-none rounded-full md:text-lg md:py-5 xl:rounded-l-full xl:rounded-r-none placeholder:text-gray-400"
                          />
                          {meta.error && meta.touched && (
                            <p className="absolute text-sm text-orange-400 top-9 md:top-12 xl:top-full left-10">
                              {meta.error.join('. ')}
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
        </section>
      )}
      {minWidth >= BREAKPOINTS.lg && (
        <>
          <section className="fixed z-10 w-full font-sans text-white bg-gray-900">
            <Wrapper>
              <div className="flex items-center justify-end h-20 space-x-12 text-lg lg:h-24">
                {NAV_OPTIONS.map((o) => (
                  <a href={o.id} key={o.id}>
                    {o.label}
                  </a>
                ))}

                <Button
                  className="rounded-[100px] h-16"
                  theme="secondary"
                  size="xs"
                  onClick={() => setOpenModal(true)}
                >
                  Subscribe
                </Button>
              </div>
            </Wrapper>
          </section>
          <SubscribeModal setOpenModal={setOpenModal} openModal={openModal} />
        </>
      )}
    </div>
  );
};

export default Menu;
