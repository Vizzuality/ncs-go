import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

const Pathways = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px' });
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
            title="featured science"
            subtitle="What nature can do for the climate?"
          />
        </div>
        <div className="pt-20 pb-20">
          <Hero
            className="text-gray-800"
            title="Pathways"
            subtitle="Solutions can be found within our grasslands, wetlands, forests and drylands."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Pathways;
