import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
// import List from 'containers/home/stories/list';
import Samples from 'containers/home/stories/samples';
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
        <div className="pt-10 pb-4 lg:pb-20 lg:pt-32 lg:grid lg:grid-cols-3">
          <Hero
            className="col-span-2 col-start-1 text-gray-800"
            title="Stories"
            subtitle="Stories we are hearing from around the world."
          />
        </div>
        <motion.div
          className="pb-4 font-sans text-base text-gray-800 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10"
          {...IN_VIEW_PROPS}
        >
          <div className="col-start-1 pb-4 lg:pb-0">
            <p>Natural climate solutions are ready to be deployed now, across the globe.</p>
          </div>
          <div className="col-start-2 space-y-4 md:space-y-6">
            <p>
              From south to north, east to west, people have been taking action and leading the way
              to unlock the power of nature for our collective future.
            </p>
          </div>
        </motion.div>
      </Wrapper>

      {/* <Media lessThan="md">
        <List />
      </Media> */}

      <Samples />

      <div className="bg-gray-900">
        <Wrapper>
          <div className="pt-10 pb-10 space-y-4 lg:space-y-0 lg:pb-20 lg:pt-20 lg:grid lg:grid-cols-12">
            <Hero className="col-span-5 col-start-1 text-white" subtitle="Want more examples?" />

            <div className="col-span-4 col-start-7 text-white">
              <p className="md:text-lg">
                Discover how people and organisations worldwide are investing in initiatives that
                protect, restore and improve land management.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>

      <iframe
        loading="lazy"
        src="https://devn4c.wpengine.com/case-studies-map-embed/"
        className="w-full h-[calc(100vh_-_89px)]"
      />
      {/* <List /> */}
    </motion.section>
  );
};

export default Stories;
