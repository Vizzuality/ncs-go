import React from 'react';

import { motion } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import Navigation from 'containers/home/common/navigation';
import Wrapper from 'containers/wrapper';

const Stories = ({ section, onChangeSection }) => {
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
        <div className="pb-20 pt-28">
          <Hero
            className="text-gray-800"
            title="Inspiring stories"
            subtitle="See how NCS projects on the ground have a positive impact on climate, biodiversity and people."
          />
        </div>
      </Wrapper>
      <section className="bg-gray-900 pb-28">
        <Navigation onChange={onChangeSection} section={section} />
      </section>
    </motion.div>
  );
};

export default Stories;
