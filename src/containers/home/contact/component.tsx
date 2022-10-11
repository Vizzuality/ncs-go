import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import useBreakpoint from 'use-breakpoint';

import { useSaveSubscribe } from 'hooks/subscribe';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import { BREAKPOINTS } from 'styles/styles.config';

const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const saveSubscribeMutation = useSaveSubscribe({});

  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

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
    <section className="w-full pb-20 bg-gray-900 scroll-mt-20 lg:scroll-mt-0" id="contact">
      <Wrapper>
        <div className="items-center pt-10 pb-20 border-b border-gray-800 xl:py-24 xl:grid xl:grid-cols-12 xl:gap-24">
          <div className="space-y-6 font-sans text-white md:col-span-6">
            <h2 className="text-xl md:text-2xl">Keep up to date</h2>
            <p className="text-base leading-7 md:text-lg">
              Subscribe to keep up to date on our progress and be among the first to access our
              platform.
            </p>

            {minWidth >= BREAKPOINTS.xl && (
              <p className="text-sm leading-7 md:text-base opacity-80">
                Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
                Global Stocktake in 2023.
              </p>
            )}
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
                          className="flex w-full px-10 py-4 text-base bg-gray-100 border-none rounded-full md:text-lg md:py-5 xl:rounded-l-full xl:rounded-r-none placeholder:text-gray-400"
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
                    theme="primary"
                    type="submit"
                    className="space-x-4 rounded-full xl:rounded-r-full xl:rounded-l-none"
                  >
                    <p>Subscribe</p>
                  </Button>
                </div>
              </form>
            )}
          </Form>
          {minWidth < BREAKPOINTS.xl && (
            <p className="text-sm leading-5 text-white md:text-base opacity-80">
              Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
              Global Stocktake in 2023.
            </p>
          )}
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
