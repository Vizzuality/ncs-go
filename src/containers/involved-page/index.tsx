import React from 'react';

import { Form, Field } from 'react-final-form';

import Image from 'next/image';

import Hero from 'containers/hero';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { composeValidators } from 'components/forms/validations';
import Icon from 'components/icon';
import { cn } from 'utils/cn';

import EMAIL_SVG from 'svgs/ui/email.svg?sprite';
import IDEA_SVG from 'svgs/ui/idea.svg?sprite';
import NEWSLETTER_SVG from 'svgs/ui/newsletter.svg?sprite';

const Involved = () => {
  //!TODO: Configure Sendgrid
  const onSubmit = (data) => {
    console.info('onSubmit', data);
  };
  return (
    <div id="about" className="bg-white pt-24 w-full">
      <section>
        <Wrapper className="py-20">
          <Hero
            title="Get involved"
            subtitle="Naturebase is a platform made by people for people."
          />

          <div className="font-sans text-base text-gray-800 grid grid-cols-3 gap-10">
            <div className="col-start-1 col-end-3">
              <p>
                Naturebase is a platform made by people who care about nature and climate change and
                for people who want to change business as usual and put nature and our climate back
                on the path of recovery.
              </p>
            </div>
            <div className="col-start-1 col-end-3 text-lg">
              <p>There are several ways you can take action with us:</p>
            </div>
          </div>
        </Wrapper>

        <Image
          src={'/images/involved/01.png'}
          alt={'Naturebase is a platform made by people for people.'}
          width={1024}
          height={410}
          layout="responsive"
          objectFit="contain"
        />
        <section className="-mt-44 z-10 relative pb-20">
          <Wrapper className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-brand-700 p-10 text-gray-800 space-y-6">
                <Image
                  src={'/images/involved/mock-app.png'}
                  alt={'Join the naturebase community and be among the first to test the tool'}
                  width={416}
                  height={240}
                  layout="responsive"
                  objectFit="contain"
                />
                <h4 className="text-2lg">
                  Join the naturebase community and be among the first to test the tool
                </h4>
                <p>
                  By creating a user profile on the naturebase app you get access to exclusive
                  features such as mapping and saving your project areas and information for a quick
                  reference check and access to the ideas portal.
                </p>
              </div>
              <div className="bg-beige p-10 text-gray-800 space-y-6">
                <Icon icon={EMAIL_SVG} className="w-12 h-12" />
                <h4 className="text-2lg">Get in touch with the team</h4>
                <p>Still have questions? Drop us an e-mail.</p>

                <div className="w-full flex justify-end">
                  <Button theme="tertiary" size="xs" className="py-3 h-12">
                    <a href="mailto:info@naturebase.org" target="_blank" rel="noreferrer">
                      Send email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 mt-44">
              <div className="bg-beige p-10 text-gray-800 space-y-6 mt-6">
                <Icon icon={NEWSLETTER_SVG} className="w-12 h-12" />
                <h4 className="text-2lg">Subscribe to our newsletter</h4>
                <p>
                  Naturebase is constantly evolving. Stay tuned to what’s happening backstage as our
                  development team adds in new scientific data, special features, case studies and
                  insights with our monthly newsletter.
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
              </div>
              <div className="bg-beige p-10 text-gray-800 space-y-6">
                <Icon icon={IDEA_SVG} className="w-12 h-12" />
                <h4 className="text-2lg">Submit your feedback and ideas</h4>
                <p>
                  We want to hear from you! Share your ideas to make naturebase work even better for
                  your goals and provide valuable feedback on your experience exploring the tool.
                </p>

                <div className="w-full flex justify-end">
                  <Button theme="tertiary" size="xs" className="py-3 h-12">
                    Launch ideas portal
                  </Button>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
      </section>
    </div>
  );
};

export default Involved;
