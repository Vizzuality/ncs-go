import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

const Pathways = () => {
  const ref = useRef();
  const inView = useInView(ref);
  const setSection = useHomeStore((state) => state.setSection);

  useEffect(() => {
    if (inView) {
      setSection('stories');
    }
  });

  return (
    <div ref={ref}>
      <Wrapper>
        <div className="pt-20 pb-20">
          <Hero
            className="text-gray-800"
            title="Naturebase Pathways"
            subtitle="Naturebase help you to achieve the CO2 emission reduction goals from France Agreement."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Pathways;
