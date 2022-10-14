import React from 'react';

import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const AboutVideo = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  const videoConfig = {
    youtube: {
      playerVars: {
        controls: true,
        showinfo: 0,
        rel: 0,
      },
    },
  };

  return (
    <div>
      {minWidth < BREAKPOINTS.md && (
        <motion.div className="relative flex justify-center w-full aspect-video" {...IN_VIEW_PROPS}>
          <Video
            config={videoConfig}
            playing
            loop
            url="https://youtu.be/6PGyRolwFVo"
            height="100%"
            width="100%"
          />
        </motion.div>
      )}
      {minWidth >= BREAKPOINTS.md && (
        <div style={{ background: 'linear-gradient(#FFFFFF 50%, #011426 50%' }}>
          <Wrapper>
            <motion.div
              className="relative flex justify-center w-full aspect-video"
              {...IN_VIEW_PROPS}
            >
              <Video
                config={videoConfig}
                playing
                loop
                url="https://youtu.be/6PGyRolwFVo"
                height="100%"
                width="100%"
              />
            </motion.div>
          </Wrapper>
        </div>
      )}
    </div>
  );
};

export default AboutVideo;
