import React from 'react';

import { motion } from 'framer-motion';

import Hero from 'containers/hero';
import Highlight from 'containers/news-page/highlight';
import List from 'containers/news-page/list';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

const News = () => {
  return (
    <motion.section id="stories" className="overflow-x-hidden bg-white w-full pt-32 md:pt-40">
      <Wrapper className="md:grid md:grid-cols-3 md:pb-20">
        <div className="col-start-1 col-end-3">
          <Hero subtitle="Get inspired with real nature-based, community-led action on the ground." />

          <motion.p {...IN_VIEW_PROPS} className="text-lg leading-7">
            Natural Climate Solutions are ready to be deployed now, across the globe. From south to
            north, east to west,{' '}
            <span className="text-blue-800">people have been taking action</span> and leading the
            way to unlock the power of nature for our collective future.
          </motion.p>
        </div>
      </Wrapper>

      <Highlight />

      <div className="md:-mt-72">
        <List />
      </div>
    </motion.section>
  );
};

export default News;
