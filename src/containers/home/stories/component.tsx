import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import List from 'containers/home/stories/list';
import Samples from 'containers/home/stories/samples';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

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
    <div ref={ref} id="stories" className="scroll-mt-20 lg:scroll-mt-0">
      <Wrapper>
        <div className="pt-10 pb-4 lg:pb-20 lg:pt-32 lg:grid lg:grid-cols-3">
          <Hero
            className="col-span-2 col-start-1 text-gray-800"
            title="Stories"
            subtitle="Here are some of the stories we have heard from the ground."
          />
        </div>
        <div className="pb-4 font-sans text-base text-gray-800 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="col-start-1 pb-4 lg:pb-0">
            <motion.p {...IN_VIEW_PROPS}>
              Nature-based solutions are ready to be deployed right now, everywhere.
            </motion.p>
          </div>
          <div className="col-start-2 space-y-4 md:space-y-6">
            <motion.p {...IN_VIEW_PROPS}>
              From south to north, east to west, people have been taking action and leading the way
              to reverse nature loss and create new sustainable economies.
            </motion.p>
          </div>
        </div>
      </Wrapper>
      <Samples />
      <List />
    </div>
  );
};

export default Stories;
