import React, { useCallback, useState } from 'react';

import { Form, Field } from 'react-final-form';

import axios from 'axios';
import validate from 'validate.js';

import Button from 'components/button';

const validationConstraints = {
  email: { presence: { allowEmpty: false }, email: true },
};

const ContactForm: React.FC = () => {
  const [contactSubmission, setContactSubmission] = useState({
    status: null,
    message: null,
  });

  const handleOnSubmit = useCallback((values) => {
    console.info('contact values', values);
    axios
      .post('/api/contact', values)
      .then(() => {
        setContactSubmission({
          status: 'success',
          message: 'Thank you. Your email has been processed successfully.',
        });
      })
      .catch((error) => {
        setContactSubmission({
          status: 'error',
          message: error.response.data,
        });
      });
  }, []);

  return (
    <section className="mt-20 py-28">
      <div className="md:container px-3.5  mx-auto w-full h-full md:px-16 xl:px-16">
        <div className="grid gap-10 md:grid-cols-3">
          {contactSubmission.status === 'success' && (
            <div className="md:col-span-2">
              <p>{contactSubmission.message}</p>
            </div>
          )}
          {contactSubmission.status !== 'success' && (
            <Form
              initialValues={{ email: null }}
              onSubmit={handleOnSubmit}
              validate={(values) => {
                const validationResult = validate(values, validationConstraints);
                return validationResult;
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="md:col-span-2">
                  {contactSubmission.status === 'error' && (
                    <div className="mb-10 space-y-5 text-sm text-red-600">
                      {contactSubmission.message?.errors.map(({ message }) => (
                        <p key={message}>{message}</p>
                      ))}
                    </div>
                  )}
                  <div className="grid gap-10 md:grid-cols-2">
                    <div className="flex items-center space-x-20">
                      <Button
                        theme="secondary"
                        size="s"
                        type="submit"
                        className="box-border flex-shrink-0 h-10 text-base transition duration-500 ease-in-out w-36 md:ml-5 md:w-28"
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
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
