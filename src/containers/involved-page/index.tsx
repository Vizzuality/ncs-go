import React, { useCallback, useRef } from 'react';

import { Form, Field } from 'react-final-form';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

import { useSaveSubscribe } from 'hooks/subscribe';
import { useToasts } from 'hooks/toast';

import Hero from 'containers/hero';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';
import { cn } from 'utils/cn';

import EMAIL_SVG from 'svgs/ui/email.svg?sprite';
import IDEA_SVG from 'svgs/ui/idea.svg?sprite';
import NEWSLETTER_SVG from 'svgs/ui/newsletter.svg?sprite';

const Involved = () => {
  const imageRef = useRef();
  const { addToast } = useToasts();
  const saveSubscribeMutation = useSaveSubscribe({});

  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['0 1', '1 1'] });

  const y = useTransform(scrollYProgress, [0, 1], ['-42%', '0%']);

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
    },
    [addToast, saveSubscribeMutation]
  );

  return (
    <div id="involved" className="bg-white pt-12 md:pt-24 w-full">
      <section>
        <Wrapper className="pb-10 pt-20 md:py-20">
          <Hero
            title="Get involved"
            subtitle="Naturebase is a platform made by people for people."
          />

          <motion.div
            className="font-sans text-base text-gray-800 md:grid md:grid-cols-3 md:gap-10 space-y-4 md:space-y-0"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-start-1 md:col-end-3">
              <p>
                Naturebase is a platform made by people who care about nature and climate change and
                for people who want to change business as usual and put nature and our climate back
                on the path of recovery.
              </p>
            </div>
            <div className="col-start-1 col-end-3 text-base md:text-lg">
              <p>There are several ways you can take action with us:</p>
            </div>
          </motion.div>
        </Wrapper>

        <motion.div className="h-[180px] md:h-[428px] overflow-hidden w-full" {...IN_VIEW_PROPS}>
          <motion.div ref={imageRef} style={{ y }} className="w-full">
            <Image
              src={'/images/involved/01.jpg'}
              alt={'Naturebase is a platform made by people for people.'}
              width={1280}
              height={728}
              layout="responsive"
              objectFit="contain"
            />
          </motion.div>
        </motion.div>
        <section className="md:-mt-56 z-10 -mt-1 relative md:pb-20">
          <Wrapper className="md:grid md:grid-cols-2 md:gap-6 px-0 md:px-4">
            <div className="md:space-y-6 md:-mt-20">
              <motion.div
                className="bg-brand-700 py-10 px-4 md:p-10 text-gray-800 space-y-4 md:space-y-6"
                {...IN_VIEW_PROPS}
              >
                <Image
                  src={'/images/involved/mock-app.png'}
                  alt={'Be among the first to test'}
                  width={416}
                  height={240}
                  layout="responsive"
                  objectFit="contain"
                />
                <h4 className="text-2lg">Be among the first to test</h4>
                <p>
                  By creating a user profile on the naturebase app you get access to exclusive
                  features such as mapping and saving your project areas and information for a quick
                  reference check and access to the ideas portal.
                </p>

                <div className="w-full flex justify-end">
                  <Button
                    theme="tertiary"
                    size="xs"
                    className="py-3 h-12 w-full md:w-auto hover:bg-gray-800"
                  >
                    Launch map
                  </Button>
                </div>
              </motion.div>

              <Media lessThan="md">
                <motion.div
                  className="bg-beige py-10 px-4 text-gray-800 space-y-4"
                  {...IN_VIEW_PROPS}
                >
                  <Icon icon={NEWSLETTER_SVG} className="w-20 h-20 rounded-full bg-brand-700 p-6" />

                  <h4 className="text-2lg">Subscribe to our newsletter</h4>
                  <p>
                    Naturebase is constantly evolving. Stay tuned to what’s happening backstage as
                    our development team adds in new scientific data, special features, case studies
                    and insights with our monthly newsletter.
                  </p>
                  <Form initialValues={{ email: '' }} onSubmit={onSubmit}>
                    {({ handleSubmit, form }) => {
                      return (
                        <form noValidate onSubmit={handleSubmit}>
                          <div className="flex justify-between w-full pt-2">
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
                                      'flex w-full h-12 px-6 text-base text-gray-800 placeholder:text-gray-600 transition duration-300 ease-in-out delay-150 bg-white border-none rounded-l-3xl focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 ':
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
                </motion.div>
              </Media>

              <motion.div
                className="bg-beige border-t border-b border-cream-700 md:border-none md:p-10 py-10 px-4 text-gray-800 space-y-4 md:space-y-6"
                {...IN_VIEW_PROPS}
              >
                <Icon
                  icon={EMAIL_SVG}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-700 p-6"
                />
                <h4 className="text-2lg">Get in touch with the team</h4>
                <p>
                  Still have questions? Contact{' '}
                  <a
                    href="mailto:info@naturebase.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-700 hover:underline"
                  >
                    info@naturebase.org
                  </a>
                </p>
              </motion.div>
            </div>
            <div className="md:space-y-6 md:mt-56">
              <Media greaterThanOrEqual="md">
                <motion.div
                  className="bg-beige p-10 text-gray-800 space-y-6 mt-6"
                  {...IN_VIEW_PROPS}
                >
                  <Icon icon={NEWSLETTER_SVG} className="w-24 h-24 rounded-full bg-brand-700 p-6" />
                  <h4 className="text-2lg">Subscribe to our newsletter</h4>
                  <p>
                    Naturebase is constantly evolving. Stay tuned to what’s happening backstage as
                    our development team adds in new scientific data, special features, case studies
                    and insights with our monthly newsletter.
                  </p>
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
                                      'flex w-full h-12 px-6 text-base text-gray-800 placeholder:text-gray-600 transition duration-300 ease-in-out delay-150 bg-white border-none rounded-l-3xl focus:outline-none focus:ring-inset focus:ring-2 focus:ring-brand-700 ':
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
                </motion.div>
              </Media>
              <motion.div
                className="bg-beige px-4 py-10 md:p-10 text-gray-800 space-y-4 md:space-y-6"
                {...IN_VIEW_PROPS}
              >
                <Icon
                  icon={IDEA_SVG}
                  className="md:w-24 md:h-24 rounded-full bg-brand-700 p-6 w-20 h-20"
                />
                <h4 className="text-2lg">Submit your feedback and ideas</h4>
                <p>
                  We want to hear from you! Share your ideas to make naturebase work even better for
                  your goals and provide valuable feedback on your experience exploring the tool.
                </p>

                <div className="w-full flex justify-end">
                  <Button theme="tertiary" size="xs" className="py-3 h-12 w-full md:w-auto">
                    Launch ideas portal
                  </Button>
                </div>
              </motion.div>
            </div>
          </Wrapper>
        </section>
      </section>
    </div>
  );
};

export default Involved;
