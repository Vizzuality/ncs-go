import React from 'react';

import Wrapper from 'containers/wrapper';

import Video from 'components/video';

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
      className="flex justify-center"
      style={{ background: 'linear-gradient(#FFFFFF 50%, #011426 50%' }}
    >
      <Wrapper>
        <Video config={videoConfig} playing loop url="https://youtu.be/6PGyRolwFVo" />
      </Wrapper>
    </div>
  );
};

export default AboutVideo;
