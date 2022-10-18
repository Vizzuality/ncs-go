import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Form, Field } from 'react-final-form';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import { useSaveSubscribe } from 'hooks/subscribe';
import { useToasts } from 'hooks/toast';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

const Contact: React.FC = () => {
  const ref = useRef();
  const sectionRef = useRef();
  const formRef = useRef(null);

  const [submitting, setSubmitting] = useState(false);

  const setSection = useHomeStore((state) => state.setSection);

  const inView = useInView(ref, { once: true, amount: 0.25 });
  const inViewSection = useInView(sectionRef);

  const opacity = inView ? 1 : 0;

  const { addToast } = useToasts();
  const saveSubscribeMutation = useSaveSubscribe({});

  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  useEffect(() => {
    if (inViewSection) {
      setSection('contact');
    }
  });

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
    <motion.section
      ref={sectionRef}
      className="w-full pb-20 bg-gray-900 scroll-mt-20 lg:scroll-mt-0"
      id="contact"
    >
      <Wrapper>
        <div className="items-center pt-10 pb-20 border-b border-gray-800 xl:py-24 xl:grid xl:grid-cols-12 xl:gap-24">
          <motion.div
            ref={ref}
            className="space-y-6 font-sans text-white md:col-span-6"
            {...IN_VIEW_PROPS}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <motion.h2
              className="text-xl md:text-2xl"
              animate={{ opacity }}
              transition={{ delay: 0.2 }}
            >
              Keep up to date
            </motion.h2>
            <motion.p
              className="text-base leading-7 md:text-lg"
              animate={{ opacity }}
              transition={{ delay: 0.3 }}
            >
              Subscribe to keep up to date on our progress and be among the first to access our
              platform.
            </motion.p>

            {minWidth >= BREAKPOINTS.xl && (
              <motion.p
                className="text-sm leading-7 md:text-base opacity-80"
                animate={{ opacity }}
                transition={{ delay: 0.4 }}
              >
                Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
                Global Stocktake in 2023.
              </motion.p>
            )}
          </motion.div>

          <Form initialValues={{ email: null }} onSubmit={onSubmit}>
            {({ handleSubmit, form }) => {
              formRef.current = form;
              return (
                <form className="py-6 xl:col-span-6 xl:py-0" noValidate onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-between w-full space-y-4 xl:flex-row xl:space-y-0">
                    <Field
                      name="email"
                      component="input"
                      validate={composeValidators([{ presence: true, email: true }])}
                    >
                      {({ input, meta }) => (
                        <motion.div
                          className="relative w-full"
                          animate={{ opacity }}
                          transition={{ delay: 0.4 }}
                        >
                          <input
                            {...input}
                            value={input.value as string}
                            type="email"
                            placeholder="Enter your email"
                            className="flex w-full px-10 py-4 text-base transition duration-300 ease-in-out delay-150 bg-gray-100 border-none rounded-full focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 focus:bg-white md:text-lg md:py-5 xl:rounded-l-full xl:rounded-r-none placeholder:text-gray-400"
                          />
                          {meta.error &&
                            meta.touched &&
                            meta.active &&
                            minWidth >= BREAKPOINTS.xl && (
                              <p className="absolute text-sm text-red-600 top-20 left-10 first-letter:capitalize">
                                {meta.error}
                              </p>
                            )}
                        </motion.div>
                      )}
                    </Field>

                    <motion.div animate={{ opacity }} transition={{ delay: 0.5, bounce: 0 }}>
                      <Button
                        disabled={submitting}
                        size="s"
                        theme="primary"
                        type="submit"
                        className="w-full space-x-4 xl:rounded-r-full xl:rounded-l-none"
                      >
                        <p>Subscribe</p>
                      </Button>
                    </motion.div>
                  </div>
                </form>
              );
            }}
          </Form>
          {minWidth < BREAKPOINTS.xl && (
            <motion.p
              className="text-sm leading-5 text-white md:text-base opacity-80"
              animate={{ opacity }}
              transition={{ delay: 0.4 }}
            >
              Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
              Global Stocktake in 2023.
            </motion.p>
          )}
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Contact;
