import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Form, Field } from 'react-final-form';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';

import { useSaveSubscribe } from 'hooks/subscribe';
import { useToasts } from 'hooks/toast';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import Select from 'components/forms/select';
import { composeValidators } from 'components/forms/validations';
import Loading from 'components/loading';
import { IN_VIEW_PROPS } from 'constants/motion';
import { GAEvent } from 'lib/analytics/ga';

import { INTERVIEW_INTERESTED, ORGANIZATIONS, ROLES } from './constants';

const Contact: React.FC = () => {
  const ref = useRef();
  const sectionRef = useRef();
  const formRef = useRef(null);

  const [submitting, setSubmitting] = useState(false);

  const setSection = useHomeStore((state) => state.setSection);

  const inView = useInView(ref, { once: true, amount: 0.25 });
  const inViewSection = useInView(sectionRef, { margin: '-100% 0px 0px' });

  const opacity = inView ? 1 : 0;

  const { addToast } = useToasts();
  const saveSubscribeMutation = useSaveSubscribe({});

  const INITIAL_VALUES = useMemo(() => {
    return {
      name: '',
      email: '',
      interests: [],
    };
  }, []);

  useEffect(() => {
    if (inViewSection) {
      setSection('subscribe');
    }
  }, [inViewSection, setSection]);

  const sendAnalyticsEvent = () => {
    GAEvent({
      action: 'select_content',
      params: {
        content_type: 'subscribe',
      },
    });
  };

  const onSubmit = useCallback(
    (data, form) => {
      const { name, email, interests } = data;
      const parsedData = { name, email, interests: interests ? interests.toString() : null };
      setSubmitting(true);
      saveSubscribeMutation.mutate(
        { data: parsedData },
        {
          onSuccess: () => {
            sendAnalyticsEvent();
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
    },
    [saveSubscribeMutation, addToast]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-10 bg-gray-900 lg:py-20 xl:py-32"
      id="subscribe"
    >
      <Wrapper>
        <div className="pb-10 border-b border-gray-800 md:pb-10 lg:grid lg:grid-cols-12">
          <div className="space-y-14 lg:col-span-6 lg:col-start-4">
            <motion.div
              ref={ref}
              className="space-y-6 font-sans text-left text-white sm:text-center"
              {...IN_VIEW_PROPS}
              viewport={{
                once: true,
                amount: 0.25,
              }}
            >
              <motion.h2
                className="text-xl md:text-3xl"
                animate={{ opacity }}
                transition={{ delay: 0.2 }}
              >
                Keep up to date
              </motion.h2>
              <motion.p
                className="text-base leading-7"
                animate={{ opacity }}
                transition={{ delay: 0.3 }}
              >
                Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
                Global Stocktake in 2023.
                <br />
                <br />
                We need your help. Sign up to join the naturebase community & test our beta version
                of the tool.
              </motion.p>
            </motion.div>

            <Form initialValues={INITIAL_VALUES} onSubmit={onSubmit}>
              {({ handleSubmit, form }) => {
                formRef.current = form;

                return (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-between w-full space-y-6">
                      <Field
                        name="name"
                        component="input"
                        validate={composeValidators([{ presence: true }])}
                      >
                        {({ input }) => (
                          <motion.div
                            className="relative w-full space-y-2"
                            animate={{ opacity }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="pl-4 text-lg font-semibold text-gray-100">Name</label>
                            <input
                              {...input}
                              value={input.value as string}
                              type="text"
                              className="flex w-full h-16 p-4 text-base text-gray-400 transition duration-300 ease-in-out delay-150 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 md:text-lg md:py-5"
                            />
                          </motion.div>
                        )}
                      </Field>
                      <Field
                        name="email"
                        component="input"
                        validate={composeValidators([{ presence: true, email: true }])}
                      >
                        {({ input }) => (
                          <motion.div
                            className="relative w-full space-y-2"
                            animate={{ opacity }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="pl-4 text-lg font-semibold text-gray-100">
                              Email
                            </label>
                            <input
                              {...input}
                              value={input.value as string}
                              type="email"
                              className="flex w-full h-16 p-4 text-base text-gray-400 transition duration-300 ease-in-out delay-150 bg-gray-900 border-gray-800 rounded-lg focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 md:text-lg md:py-5"
                            />
                          </motion.div>
                        )}
                      </Field>

                      <Field name="organization" component="input">
                        {({ input }) => (
                          <motion.div
                            className="relative w-full space-y-2"
                            animate={{ opacity }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="pl-4 text-lg font-semibold text-gray-100">
                              What type of organization do you represent?
                            </label>
                            <div className="relative">
                              <Select
                                {...input}
                                id="organization"
                                selected={input.value as string[]}
                                maxHeight={300}
                                options={ORGANIZATIONS}
                                prefix=""
                                size="base"
                                status="none"
                                theme="dark"
                                placeholder="Select..."
                                clearSelectionActive={false}
                                onChange={input.onChange}
                              />
                            </div>
                          </motion.div>
                        )}
                      </Field>

                      <Field name="role" component="input">
                        {({ input }) => (
                          <motion.div
                            className="relative w-full space-y-2"
                            animate={{ opacity }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="pl-4 text-lg font-semibold text-gray-100">
                              In my role I am responsible for:
                            </label>
                            <div className="relative">
                              <Select
                                {...input}
                                id="role"
                                selected={input.value as string[]}
                                maxHeight={300}
                                options={ROLES}
                                prefix=""
                                size="base"
                                status="none"
                                theme="dark"
                                placeholder="Select..."
                                clearSelectionActive={false}
                                onChange={input.onChange}
                              />
                            </div>
                          </motion.div>
                        )}
                      </Field>

                      <Field name="interview" component="input">
                        {({ input }) => (
                          <motion.div
                            className="relative w-full space-y-2"
                            animate={{ opacity }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="pl-4">
                              <label className="text-lg font-semibold text-gray-100">
                                Would you be interested in participating in a 1-hour interview about
                                NCS & Naturebase with our research team?
                              </label>
                            </div>
                            <div className="relative">
                              <Select
                                {...input}
                                id="interview"
                                selected={input.value as string[]}
                                maxHeight={300}
                                options={INTERVIEW_INTERESTED}
                                prefix=""
                                size="base"
                                status="none"
                                theme="dark"
                                placeholder="Select..."
                                clearSelectionActive={false}
                                onChange={input.onChange}
                              />
                            </div>
                          </motion.div>
                        )}
                      </Field>

                      <motion.div
                        animate={{ opacity }}
                        transition={{ delay: 0.5, bounce: 0 }}
                        className="w-full"
                      >
                        <Button
                          disabled={!submitting && !form.getState().valid}
                          size="xs"
                          theme="primary"
                          type="submit"
                          className="relative w-full py-4 mx-auto mt-10 overflow-hidden text-lg lg:w-1/2"
                        >
                          <Loading
                            visible={submitting}
                            className="absolute flex items-center justify-center w-full h-full bg-brand-700/50"
                          />
                          <p>Subscribe</p>
                        </Button>
                      </motion.div>
                    </div>
                  </form>
                );
              }}
            </Form>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  );
};

export default Contact;
