import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import { useSaveSubscribe } from 'hooks/subscribe';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';

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
        <div className="grid items-center grid-cols-12 gap-24 py-24 border-b border-gray-800">
          <div className="col-span-6 space-y-6 font-sans text-white">
            <h2 className="text-2xl">Keep up to date</h2>
            <p className="text-lg leading-7">
              Subscribe to keep up to date on our progress and be among the first to access our
              platform.
            </p>
            <p className="text-base leading-7 opacity-80">
              Naturebase is set to launch ahead of the UNFCCC Climate Change Conference COP28 and
              Global Stocktake in 2023.
            </p>
          </div>

          <Form initialValues={{ email: null }} onSubmit={handleSubmit}>
            {(props) => (
              <form onSubmit={props.handleSubmit} className="col-span-6">
                <div className="flex justify-between w-full">
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
                          className="flex w-full px-10 py-5 text-lg bg-gray-100 border-none rounded-l-full placeholder:text-gray-400"
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
                    className="space-x-4 rounded-r-full"
                  >
                    <p>Subscribe</p>
                  </Button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Contact;
