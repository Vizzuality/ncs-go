import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

const Footer: React.FC = () => {
  const ref = useRef();

  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const opacity = inView ? 1 : 0;

  return (
    <section
      ref={ref}
      className="pb-10 font-sans text-base text-center text-white bg-gray-900 lg:pb-20 first-letter:w-full"
    >
      <Wrapper>
        <motion.div className="space-y-20" {...IN_VIEW_PROPS}>
          <div>
            <motion.p animate={{ opacity }} transition={{ delay: 0.2 }}>
              If you got an idea to make it even better or want submit your case studies, email us
              at{' '}
              <a className="text-brand-700 hover:underline" href="mailto:loremipsum@email.com">
                loremipsum@email.com.
              </a>
            </motion.p>
            <motion.p animate={{ opacity }} transition={{ delay: 0.3 }}>
              Sign up for the Nature4Climate newsletter{' '}
              <a
                className="text-brand-700 hover:underline"
                href="#"
                target="_blank"
                rel="noreferrer noopener"
              >
                here.
              </a>
            </motion.p>
          </div>

          <motion.p
            className="text-sm lg:text-base"
            animate={{ opacity }}
            transition={{ delay: 0.4 }}
          >
            © 2022 Naturebase by Nature4Climate
          </motion.p>
        </motion.div>
      </Wrapper>
    </section>
  );
};

export default Footer;
