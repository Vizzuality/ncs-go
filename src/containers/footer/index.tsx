import React from 'react';

import { Form, Field } from 'react-final-form';

import Link from 'next/link';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import Icon from 'components/icon';
import { cn } from 'utils/cn';

import NATURE4CLIMATE_SVG from 'svgs/logos/Nature4Climate.svg?sprite';
import NATUREBASE_SVG from 'svgs/logos/naturebase.svg?sprite';
import NEWSLETTER_SVG from 'svgs/ui/newsletter.svg?sprite';

const Footer: React.FC = () => {
  //!TODO: Configure Sendgrid
  const onSubmit = (data) => {
    console.info('onSubmit', data);
  };
  return (
    <section className="w-full pt-14 pb-4 bg-gray-900">
      <Wrapper>
        <div className="flex justify-between">
          <div className="space-y-20">
            <Icon icon={NATUREBASE_SVG} className="h-16 w-96 -ml-12" />
            <div>
              <div className="flex text-white font-sans text-base space-x-6">
                <div className="space-y-4">
                  <Link href={'/about'}>About</Link>
                  <div className="opacity-60 flex flex-col space-y-1">
                    <a href="about#naturbase">About Naturebase</a>
                    <a href="about#who">Who is with us?</a>
                    <a href="about#what">What we want?</a>
                    <a href="about#faq">FAQ</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link href={'/science'}>Science and data</Link>
                  <div className="opacity-60 flex flex-col space-y-1">
                    <a href="science#pathways">NCS pathways</a>
                    <a href="science#data">Data sources</a>
                    <a href="science#authors">Key authors</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link href={'/news'}>News</Link>
                </div>
                <div className="space-y-4">
                  <Link href={'/involved'}>Get involved</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Icon icon={NEWSLETTER_SVG} className="h-10 w-10 stroke-white" />
            <h2 className="text-3xl font-sans text-white">Stay tunned</h2>
            <p className="font-sans text-white text-base">Subscribe to our newsletter</p>
            <Form initialValues={{ email: '' }} onSubmit={onSubmit}>
              {({ handleSubmit, form }) => {
                return (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="flex justify-between w-full">
                      <Field
                        name="email"
                        component="input"
                        validate={composeValidators([{ presence: true, email: true }])}
                      >
                        {({ input, meta }) => (
                          <div className="w-full">
                            <input
                              {...input}
                              value={input.value as string}
                              type="email"
                              placeholder="Enter your email"
                              className={cn({
                                'flex min-w-[287px] h-12 px-6 text-base text-gray-800 placeholder:text-gray-600 transition duration-300 ease-in-out delay-150 bg-white border-none rounded-l-3xl focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 ':
                                  true,
                                'ring-2 ring-red-600 focus:ring-red-600':
                                  form.getState().submitFailed && meta.error,
                              })}
                            />
                          </div>
                        )}
                      </Field>

                      <Button
                        size="xs"
                        theme="primary"
                        type="submit"
                        className="rounded-l-none h-12"
                      >
                        <p>Subscribe</p>
                      </Button>
                    </div>
                  </form>
                );
              }}
            </Form>
          </div>
        </div>
        <div className="flex justify-between items-end pt-28">
          <Icon icon={NATURE4CLIMATE_SVG} className="h-14 w-28" />

          <p className="text-sm text-white opacity-60 font-sans">Supported by Bezos Earth Fund</p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;