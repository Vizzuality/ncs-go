import React from 'react';

import dynamic from 'next/dynamic';

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
    <div
      className="relative flex justify-center w-full px-24 aspect-video"
      style={{ background: 'linear-gradient(#FFFFFF 50%, #011426 50%' }}
    >
      <Video
        config={videoConfig}
        playing
        loop
        url="https://youtu.be/6PGyRolwFVo"
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default AboutVideo;
