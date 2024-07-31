'use client';
import React from 'react';

import Wrapper from 'containers/wrapper';

import dynamic from 'next/dynamic';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

import { motion } from 'framer-motion';

import LinkArrow from 'components/link-arrow';

const Highlight = () => {
  return (
    <div className="w-full pt-12 md:pt-0">
      <Wrapper className="px-0">
        <Video
          light={false}
          url="https://www.youtube.com/watch?v=dkXPon9UQxw&list=PLZwFPkUsoHXkDJlefkD1oKGKra38a5SBJ&index=1&t=1s"
          height="719px"
          width="100%"
          controls
        />
      </Wrapper>
      <div className="bg-none md:bg-beige">
        <Wrapper className="px-0">
          <motion.div
            className="w-full ml-auto bg-beige"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.25,
              delay: 0.25,
            }}
          >
            <div className="lg:p-10 sm:p-6 p-4 flex flex-col lg:flex-row gap-10 text-base text-gray-900 items-end h-full relative bg-brand-700">
              <div>
                The Nature in Action series is a naturebase collaboration with community-led
                filmmakers from{' '}
                <a
                  className="underline text-black hover:text-gray-600"
                  href="https://ifnotusthenwho.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  If Not Us Then Who?
                </a>{' '}
                to showcase stories of individuals and communities at the forefront of nature
                protection and recovery. The episodes emphasize successful implementation of
                nature-based solutions projects and the strong leadership of Indigenous Peoples and
                local communities. These stories effectively bridge science, policy, and action,
                positively influencing climate discussions and decision-making for impactful
                nature-based action, using naturebase data. Watch the episodes:
              </div>
              <LinkArrow
                className={{ arrow: 'stroke-grey-900' }}
                label={'Play All'}
                url="https://www.youtube.com/watch?v=dkXPon9UQxw&list=PLZwFPkUsoHXkDJlefkD1oKGKra38a5SBJ&index=1&t=1s&ab_channel=Nature4Climate"
              />
            </div>
          </motion.div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Highlight;
