'use client';
import React from 'react';

import dynamic from 'next/dynamic';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

import { motion } from 'framer-motion';

import Wrapper from 'containers/wrapper';

import LinkButton from 'components/button';

const Highlight = () => {
  return (
    <div className="w-full pt-12 md:pt-0">
      <Video
        light={false}
        url="https://www.youtube.com/watch?v=dkXPon9UQxw&list=PLZwFPkUsoHXkDJlefkD1oKGKra38a5SBJ&index=1&t=1s"
        height="719px"
        width="100%"
        controls
      />
      <div className="lg:max-w-[1440px] lg:mx-auto px-0 xl:px-[100px]">
        <Wrapper>
          <motion.div
            className="max-w-[680px] ml-auto lg:px-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.25,
              delay: 0.25,
            }}
          >
            <div className="ml-4 md:ml-0 lg:p-10 sm:p-6 p-4 flex flex-col gap-4 text-base text-gray-900 items-end h-full relative bg-brown-400">
              <div>
                The Nature in Action series is a naturebase collaboration with community-led
                filmmakers from{' '}
                <a
                  className="underline text-gray-600 hover:text-black"
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
              <LinkButton
                theme="tertiary"
                size="xs"
                className="max-w-[102px]"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=dkXPon9UQxw&list=PLZwFPkUsoHXkDJlefkD1oKGKra38a5SBJ&index=1&t=1s&ab_channel=Nature4Climate"
              >
                Play All
              </LinkButton>
            </div>
          </motion.div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Highlight;
