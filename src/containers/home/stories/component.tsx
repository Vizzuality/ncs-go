import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import Cards from 'containers/home/stories/cards';
import Wrapper from 'containers/wrapper';

const Stories = () => {
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
        <div className="pb-20 pt-28">
          <Hero
            className="text-gray-800"
            title="Inspiring stories"
            subtitle="See how NCS projects on the ground have a positive impact on climate, biodiversity and people."
          />
        </div>
      </Wrapper>
      <Cards />
    </div>
  );
};

export default Stories;
