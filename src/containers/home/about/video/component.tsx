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
    <motion.div {...IN_VIEW_PROPS}>
      {minWidth < BREAKPOINTS.md && (
        <div className="relative flex justify-center w-full aspect-video">
          <Video
            config={videoConfig}
            playing
            loop
            url="https://youtu.be/6PGyRolwFVo"
            height="100%"
            width="100%"
          />
        </div>
      )}
      {minWidth >= BREAKPOINTS.md && (
        <div style={{ background: 'linear-gradient(#FFFFFF 50%, #011426 50%' }}>
          <Wrapper>
            <div className="relative flex justify-center w-full aspect-video">
              <Video
                config={videoConfig}
                playing
                loop
                url="https://youtu.be/6PGyRolwFVo"
                height="100%"
                width="100%"
              />
            </div>
          </Wrapper>
        </div>
      )}
    </motion.div>
  );
};

export default AboutVideo;
