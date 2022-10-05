import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import List from 'containers/home/stories/list';
import Samples from 'containers/home/stories/samples';
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
            title="Stories"
            subtitle="Here are some of the stories we have heard from the ground."
          />
        </div>
        <div className="pb-10 font-sans text-base text-gray-800 md:text-lg md:grid md:grid-cols-3 md:gap-10">
          <div className="col-start-1 pb-4 md:pb-0">
            <p>Nature-based solutions are ready to be deployed right now, everywhere.</p>
          </div>
          <div className="col-start-2 space-y-4 md:space-y-6">
            <p>
              From south to north, east to west, people have been taking action and leading the way
              to reverse nature loss and create new sustainable economies.
            </p>
          </div>
        </div>
      </Wrapper>
      <Samples />
      <List />
    </div>
  );
};

export default Stories;
