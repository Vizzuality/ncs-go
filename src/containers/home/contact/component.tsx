import React, { useCallback, useEffect, useRef } from 'react';

import { Form, Field } from 'react-final-form';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';

import { useSaveSubscribe } from 'hooks/subscribe';
import { useToasts } from 'hooks/toast';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import { IN_VIEW_PROPS } from 'constants/motion';

const Contact: React.FC = () => {
  const ref = useRef();
  const sectionRef = useRef();
  const formRef = useRef(null);

  const setSection = useHomeStore((state) => state.setSection);

  const inView = useInView(ref, { once: true, amount: 0.25 });
  const inViewSection = useInView(sectionRef, { margin: '-100% 0px 0px' });

  const opacity = inView ? 1 : 0;

  const { addToast } = useToasts();
  const saveSubscribeMutation = useSaveSubscribe({});

  useEffect(() => {
    if (inViewSection) {
      setSection('contact');
    }
  }, [inViewSection, setSection]);

  const onSubmit = useCallback(
    (data, form) => {
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
          onError: () => {},
        }
      );
    },
    [saveSubscribeMutation, addToast]
  );

  return (
    <motion.section ref={sectionRef} className="w-full py-10 bg-gray-900 lg:pb-20" id="contact">
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
                Subscribe to keep up to date on our progress and be among the first to access our
                platform. Naturebase is set to launch ahead of the UNFCCC Climate Change Conference
                COP28 and Global Stocktake in 2023.
              </motion.p>
            </motion.div>

            <Form initialValues={{ email: null }} onSubmit={onSubmit}>
              {({ handleSubmit, form }) => {
                formRef.current = form;

                return (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-between w-full space-y-4">
                      <Field
                        name="uniqueName"
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

                      <Field name="interests" component="input">
                        {({ input }) => (
                          <motion.div
                            className="relative w-full space-y-2"
                            animate={{ opacity }}
                            transition={{ delay: 0.4 }}
                          >
                            <label className="pl-4 text-lg font-semibold text-gray-100">
                              I am interested in
                            </label>
                            <select
                              {...input}
                              className="block w-full h-16 px-3 py-4 m-0 font-sans text-lg text-gray-400 transition ease-in-out bg-gray-800 bg-no-repeat border border-gray-800 rounded-lg appearance-none form-select bg-clip-padding focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700"
                            >
                              <option selected>{''}</option>
                              <option value="NCS/NbS">NCS/NbS</option>
                              <option value="Indigenous Rights and Land Tenure">
                                Indigenous Rights and Land Tenure
                              </option>
                              <option value="Policy">Policy</option>
                              <option value="Finance">Finance</option>
                              <option value="Markets">Markets</option>
                              <option value="Philanthropy">Philanthropy</option>
                              <option value="Communications">Communications</option>
                            </select>
                          </motion.div>
                        )}
                      </Field>

                      <motion.div
                        animate={{ opacity }}
                        transition={{ delay: 0.5, bounce: 0 }}
                        className="w-full"
                      >
                        <Button
                          disabled={!form.getState().valid}
                          size="xs"
                          theme="primary"
                          type="submit"
                          className="w-full py-4 mx-auto mt-10 text-lg lg:w-1/2"
                        >
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
