import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import List from 'containers/stories-page/list';
import Samples from 'containers/stories-page/samples';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

const Stories = () => {
  const sectionRef = useRef();

  const inViewSection = useInView(sectionRef, { margin: '-100% 0px 0px' });

  const setSection = useHomeStore((state) => state.setSection);

  useEffect(() => {
    if (inViewSection) {
      setSection('stories');
    }
  });

  return (
    <motion.section ref={sectionRef} id="stories" className="overflow-x-hidden bg-white">
      <Wrapper>
        <div className="pt-10 pb-4 lg:pb-10 lg:pt-44 lg:grid lg:grid-cols-3">
          <Hero
            className="col-span-2 col-start-1 text-gray-800"
            subtitle="Get inspired with real nature-based, community-led action on the ground."
          />
        </div>
        <motion.div
          className="pb-4 font-sans text-base text-gray-800 xl:pb-20 md:text-lg lg:grid lg:grid-cols-2"
          {...IN_VIEW_PROPS}
        >
          <div className="pb-4 lg:pb-0">
            <p>
              Natural climate solutions are ready to be deployed now, across the globe. From south
              to north, east to west, people have been taking action and leading the way to unlock
              the power of nature for our collective future.
            </p>
          </div>
        </motion.div>
      </Wrapper>

      <Samples />

      <List />
    </motion.section>
  );
};

export default Stories;
