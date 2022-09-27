import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import validate from 'validate.js';

import { useSaveSubscribe } from 'hooks/subscribe';

import Button from 'components/button';

const validationConstraints = {
  email: { presence: { allowEmpty: false }, email: true },
};

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
    <section className="mt-20 py-28">
      <div className="md:container px-3.5  mx-auto w-full h-full md:px-16 xl:px-16">
        <div className="grid gap-10 md:grid-cols-3">
          <Form
            initialValues={{ email: null }}
            onSubmit={handleSubmit}
            validate={(values) => {
              const validationResult = validate(values, validationConstraints);
              return validationResult;
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit} className="md:col-span-2">
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="flex items-center space-x-20">
                    <Button
                      className="box-border flex-shrink-0 h-10 text-base transition duration-500 ease-in-out w-36 md:ml-5 md:w-28"
                      disabled={submitting}
                      size="s"
                      theme="secondary"
                      type="submit"
                    >
                      Send
                    </Button>
                    <Field name="email" component="input">
                      {({ input, meta }) => (
                        <div>
                          <div className="relative mt-1">
                            <input
                              {...input}
                              type="email"
                              placeholder="Email address"
                              className="block w-full border-t-0 border-b border-l-0 border-r-0 text-md lg:text-lg border-b-darkGray placeholder-lightGray"
                            />
                          </div>
                          {meta.error && meta.touched && (
                            <p className="mt-2 text-sm text-red-600">{meta.error.join('. ')}</p>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
