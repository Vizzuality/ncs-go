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
      className="pb-10 font-sans text-base text-center text-white bg-gray-900 lg:pb-6 first-letter:w-full"
    >
      <Wrapper>
        <motion.div className="space-y-10 lg:space-y-20" {...IN_VIEW_PROPS}>
          <div className="max-w-xl mx-auto">
            <motion.p animate={{ opacity }} transition={{ delay: 0.2 }}>
              If you would like to provide feedback or submit your case studies please contact us at{' '}
              <a className="text-brand-700 hover:underline" href="mailto:info@nature4climate.org">
                info@nature4climate.org.
              </a>
            </motion.p>
            {/* <motion.p animate={{ opacity }} transition={{ delay: 0.3 }}>
              Sign up for the Nature4Climate newsletter{' '}
              <a
                className="text-brand-700 hover:underline"
                href="https://nature4climate.org/keep-in-touch"
                target="_blank"
                rel="noreferrer noopener"
              >
                here.
              </a>
            </motion.p> */}
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
