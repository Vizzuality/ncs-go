import React from 'react';

import { motion } from 'framer-motion';

import ContactForm from 'containers/home/common/contact-form';
import Hero from 'containers/home/common/hero';
import Features from 'containers/home/overview/features';
import Wrapper from 'containers/wrapper';

const Overview = () => {
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
        <div className="pt-20 pb-20">
          <Hero
            className="text-gray-800"
            title="Naturebase overview"
            subtitle="Naturebase help you to achieve the CO2 emission reduction goals from France Agreement."
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

export default Overview;
