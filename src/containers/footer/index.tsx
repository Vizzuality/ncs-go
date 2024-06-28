import React, { useRef, useCallback } from 'react';

import { Form, Field } from 'react-final-form';
import ReCAPTCHA from 'react-google-recaptcha';

import Link from 'next/link';

import { useSaveSubscribe } from 'hooks/subscribe';
import { useToasts } from 'hooks/toast';

import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import Icon from 'components/icon';
import { cn } from 'utils/cn';

import NATURE4CLIMATE_SVG from 'svgs/logos/Nature4Climate.svg?sprite';
import NATUREBASE_SVG from 'svgs/logos/naturebase.svg?sprite';
import NEWSLETTER_SVG from 'svgs/ui/newsletter-white.svg?sprite';

const Footer: React.FC = () => {
  const { addToast } = useToasts();
  const saveSubscribeMutation = useSaveSubscribe({});
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const onSubmit = useCallback(
    async (data, form) => {
      const captchaValue = recaptchaRef.current.getValue();
      if (!captchaValue) {
        addToast(
          'error-contact',
          <>
            <p className="text-base">Please verify the reCAPTCHA</p>
          </>,
          {
            level: 'error',
          }
        );
      } else {
        // Backend verification of reCAPTCHA
        const res = await fetch('http://localhost:8000/verify', {
          method: 'POST',
          body: JSON.stringify({ captchaValue }),
          headers: {
            'content-type': 'application/json',
          },
        });
        const recaptchaVerifyData = await res.json();
        if (recaptchaVerifyData.success) {
          // Make Form submission
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
              onError: () => {
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
        } else {
          addToast(
            'error-contact',
            <>
              <p className="text-base">reCAPTCHA validation failed</p>
            </>,
            {
              level: 'error',
            }
          );
        }
      }
    },
    [addToast, saveSubscribeMutation]
  );

  return (
    <section className="w-full pt-10 lg:pt-14 bg-gray-900">
      <Wrapper>
        <div className="flex lg:flex-row flex-col justify-between space-y-10 lg:space-y-0">
          <div className="space-y-10 lg:space-y-20">
            <Icon icon={NATUREBASE_SVG} className="h-16 w-56 lg:w-96 lg:-ml-12" />
            <div>
              <div className="flex flex-col lg:flex-row text-white font-sans text-base lg:space-x-6 space-y-4 lg:space-y-0">
                <div className="space-y-4">
                  <Link href={'/about'}>About</Link>
                  <div className="flex flex-col space-y-1">
                    <a href="about#naturebase" className="opacity-60 hover:opacity-100">
                      About Naturebase
                    </a>
                    <a href="about#who" className="opacity-60 hover:opacity-100">
                      Who is with us?
                    </a>
                    <a href="about#users" className="opacity-60 hover:opacity-100">
                      Who can use?
                    </a>
                    <a href="about#faq" className="opacity-60 hover:opacity-100">
                      FAQ
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <Link href={'/science'}>Science and data</Link>
                  <div className="flex flex-col space-y-1">
                    <a href="science#pathways" className="opacity-60 hover:opacity-100">
                      NCS pathways
                    </a>
                    <a href="science#data" className="opacity-60 hover:opacity-100">
                      Data sources
                    </a>
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
          <div className="lg:space-y-6 space-y-4">
            <Icon icon={NEWSLETTER_SVG} className="h-8 lg:h-10 lg:w-10 w-8" />
            <h2 className="text-2lg lg:text-3xl font-sans text-white">Stay in touch</h2>
            <p className="font-sans text-white text-base">Subscribe to our newsletter</p>
            <Form initialValues={{ email: '' }} onSubmit={onSubmit}>
              {({ handleSubmit, form }) => {
                return (
                  <form noValidate onSubmit={handleSubmit}>
                    <div className="flex lg:flex-row flex-col justify-between w-full space-y-4 lg:space-y-0">
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
                                'flex rounded-3xl w-full lg:rounded-r-none min-w-[287px] h-12 px-6 text-base text-gray-800 placeholder:text-gray-600 transition duration-300 ease-in-out delay-150 bg-white border-none lg:rounded-l-3xl focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 ':
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
                        className="lg:rounded-l-none h-12"
                      >
                        <p>Subscribe</p>
                      </Button>
                    </div>
                    <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
                  </form>
                );
              }}
            </Form>
          </div>
        </div>
      </Wrapper>
      <div className="bg-gray-800 py-6 mt-14">
        <Media lessThan="lg">
          <Wrapper className="pb-12">
            <p className="font-sans text-white opacity-60 text-[14px]">
              Additional{' '}
              <a
                href="https://conservationgateway.org/Pages/Terms-of-Use.aspx"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Terms of Use
              </a>{' '}
              and data limitations when working with naturebase data apply. By using this website
              you agree to the full{' '}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/terms-of-use"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Legal Disclosures
              </a>{' '}
              and{' '}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Privacy Statements
              </a>
              .
            </p>
          </Wrapper>
        </Media>
        <Wrapper className="flex justify-between items-center">
          <Media greaterThanOrEqual="lg">
            <p className="font-sans text-white opacity-60 text-[14px] max-w-lg">
              Additional{' '}
              <a
                href="https://conservationgateway.org/Pages/Terms-of-Use.aspx"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Terms of Use
              </a>{' '}
              and data limitations when working with naturebase data apply. By using this website
              you agree to the full{' '}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/terms-of-use"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Legal Disclosures
              </a>{' '}
              and{' '}
              <a
                href="https://www.nature.org/en-us/about-us/who-we-are/accountability/privacy-policy"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Privacy Statements
              </a>
              .
            </p>
          </Media>
          <p className="text-base text-white opacity-60 font-sans">Supported by Bezos Earth Fund</p>
          <a href="https://nature4climate.org" rel="noreferrer" target="_blank">
            <Icon icon={NATURE4CLIMATE_SVG} className="h-14 w-28" />
          </a>
        </Wrapper>
      </div>
    </section>
  );
};

export default Footer;
