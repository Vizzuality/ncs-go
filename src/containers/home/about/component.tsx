import React from 'react';

import { motion } from 'framer-motion';

import Features from 'containers/home/about/features';
import ContactForm from 'containers/home/common/contact-form';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

const About = () => {
  return (
    <motion.div
      className="overflow-auto"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Wrapper>
        <div className="py-32">
          <Hero
            className="text-gray-800"
            title="About Naturebase"
            subtitle="Naturebase is a new interactive platform that will bring together science-based data to mitigate climate change."
          />
        </div>
      </Wrapper>
      <Features />
      <section className="bg-gray-900 py-28">
        <ContactForm />
      </section>
    </motion.div>
  );
};

export default About;
