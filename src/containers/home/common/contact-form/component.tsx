import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import { useSaveSubscribe } from 'hooks/subscribe';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';

const ContactForm: React.FC = () => {
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
    <Wrapper>
      <section className="w-full h-full px-20 py-24 bg-white">
        <div className="grid items-center grid-cols-12 gap-20">
          <div className="col-span-5 space-y-6 text-gray-900">
            <h2 className="text-2xl font-semibold">Stay up to date</h2>
            <p className="font-sans text-lg leading-7">
              Subscribe to be the first to know about the tool launch and more.
            </p>
          </div>

          <Form initialValues={{ email: null }} onSubmit={handleSubmit}>
            {(props) => (
              <form onSubmit={props.handleSubmit} className="col-span-7">
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
                          className="flex w-full px-10 py-5 text-lg bg-gray-100 border-none placeholder:text-gray-400"
                        />
                        {meta.error && meta.touched && (
                          <p className="absolute top-full left-10 text-orange-0 text-xxs">
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
                    className="space-x-4"
                  >
                    <p>Subscribe</p>
                    <Icon icon={ARROW_RIGHT_SVG} className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </section>
    </Wrapper>
  );
};

export default ContactForm;