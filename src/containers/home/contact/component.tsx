import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import { useSaveSubscribe } from 'hooks/subscribe';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import { Media } from 'components/media-query';

const Contact: React.FC = () => {
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
    <section className="w-full h-full pb-20 bg-gray-900">
      <Wrapper>
        <div className="items-center pt-10 pb-20 border-b border-gray-800 md:py-24 md:grid md:grid-cols-12 md:gap-24">
          <div className="space-y-6 font-sans text-white md:col-span-6">
            <h2 className="text-xl md:text-2xl">Keep up to date</h2>
            <p className="text-base leading-7 md:text-lg">
              Subscribe to keep up to date on our progress and be among the first to access our
              platform.
            </p>
            <Media greaterThan="md">
              <p className="text-sm leading-7 md:text-base opacity-80">
                Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
                Global Stocktake in 2023.
              </p>
            </Media>
          </div>

          <Form initialValues={{ email: null }} onSubmit={handleSubmit}>
            {(props) => (
              <form onSubmit={props.handleSubmit} className="py-6 md:col-span-6 md:py-0">
                <div className="flex flex-col justify-between w-full space-y-4 md:flex-row md:space-y-0">
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
                          className="flex w-full px-10 py-4 text-lg bg-gray-100 border-none rounded-full md:py-5 md:rounded-l-full placeholder:text-gray-400"
                        />
                        {meta.error && meta.touched && (
                          <p className="absolute text-orange-400 top-full left-10 text-xxs">
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
                    className="space-x-4 rounded-full md:rounded-r-full"
                  >
                    <p>Subscribe</p>
                  </Button>
                </div>
              </form>
            )}
          </Form>
          <Media lessThan="md">
            <p className="text-sm leading-5 text-white md:text-base opacity-80">
              Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
              Global Stocktake in 2023.
            </p>
          </Media>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
