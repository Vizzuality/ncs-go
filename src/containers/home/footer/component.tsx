import React from 'react';

import Wrapper from 'containers/wrapper';

const Footer: React.FC = () => {
  return (
    <section className="pb-20 font-sans text-base text-center text-white bg-gray-900 first-letter:w-full">
      <Wrapper>
        <div className="space-y-20">
          <div>
            <p>
              If you got an idea to make it even better or want submit your case studies, email us
              at{' '}
              <a className="text-brand" href="mailto:loremipsum@email.com">
                loremipsum@email.com.
              </a>
            </p>
            <p>
              Sign up for the Nature4Climate newsletter{' '}
              <a className="text-brand" href="#" target="_blank" rel="noreferrer noopener">
                here.
              </a>
            </p>
          </div>
          <p>© 2022 Naturebase by Nature4Climate</p>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
