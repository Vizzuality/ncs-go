import React from 'react';

import { motion } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import Navigation from 'containers/home/common/navigation';
import Wrapper from 'containers/wrapper';

const Pathways = ({ section, onChangeSection }) => {
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
            title="Naturebase Pathways"
            subtitle="Naturebase help you to achieve the CO2 emission reduction goals from France Agreement."
          />
        </div>
      </Wrapper>

      <section className="bg-gray-900 pb-28">
        <Navigation onChange={onChangeSection} section={section} />
      </section>
    </motion.div>
  );
};

export default Pathways;
