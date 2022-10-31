import React from 'react';

import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';

import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const AboutVideo = () => {
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
      <Media lessThan="md">
        <div className="relative flex justify-center w-full bg-black aspect-video">
          <Video
            config={videoConfig}
            playing
            loop
            url="https://www.youtube.com/watch?v=t4eE9Fqu1yE"
            height="100%"
            width="100%"
          />
        </div>
      </Media>

      <Media greaterThanOrEqual="md">
        <div style={{ background: 'linear-gradient(#FFFEFA 50%, #1E2D3A 50%' }}>
          <Wrapper>
            <div className="relative flex justify-center bg-black lg:mx-28 aspect-video">
              <Video
                config={videoConfig}
                playing
                loop
                url="https://www.youtube.com/watch?v=t4eE9Fqu1yE"
                height="100%"
                width="100%"
              />
            </div>
          </Wrapper>
        </div>
      </Media>
    </motion.div>
  );
};

export default AboutVideo;
