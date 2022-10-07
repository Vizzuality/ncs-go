import React from 'react';

import dynamic from 'next/dynamic';

import useBreakpoint from 'use-breakpoint';

import SampleComposition from 'containers/home/stories/samples/sample-composition';
import Card from 'containers/home/stories/samples/sample-composition/sample-card';
import Wrapper from 'containers/wrapper';

import { BREAKPOINTS } from 'styles/styles.config';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const Samples = () => {
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
    <div
      className="w-full pt-4 pb-10 lg:pb-0"
      style={{
        background: minWidth >= BREAKPOINTS.lg && 'linear-gradient(#FFFFFF 90%, #011426 10%',
      }}
    >
      <Wrapper>
        <div className="lg:space-y-44">
          <SampleComposition
            align="left"
            media={
              <div
                style={{ backgroundImage: `url(/images/stories/ghana.png)` }}
                className="overflow-hidden bg-center bg-no-repeat bg-cover aspect-video"
              />
            }
            card={
              <Card
                country="Tanzania"
                title="Carbon project on conservation site"
                description="Indigenous-led with key financial schemes to protect biodiversity and benefit local people."
                pathway="croplands"
                articleUrl="#"
              />
            }
          />
          <SampleComposition
            align="right"
            media={
              <Video
                config={videoConfig}
                playing
                loop
                playBackground="bg-white"
                playColor="text-gray-900"
                url="https://youtu.be/6PGyRolwFVo"
                height="100%"
                width="100%"
              />
            }
            card={
              <Card
                country="Dominican Republic"
                title="Coastal resilience"
                description="Mangroves and coral reefs restoration."
                pathway="wetlands"
                videoUrl="#"
              />
            }
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Samples;
