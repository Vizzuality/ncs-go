import React from 'react';

import { motion } from 'framer-motion';

import List from 'containers/news-page/list';
import Samples from 'containers/news-page/samples';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

const News = () => {
  return (
    <motion.section id="stories" className="overflow-x-hidden bg-white w-full pt-44">
      <Wrapper>
        <div className="lg:grid lg:grid-cols-3">
          <h2 className="text-gray-800 pb-6 font-sans text-xl col-span-2 col-start-1">
            Get inspired with real nature-based, community-led action on the ground.
          </h2>
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

      <div className="-mt-72">
        <List />
      </div>
    </motion.section>
  );
};

export default News;
