import React from 'react';

import dynamic from 'next/dynamic';

import useBreakpoint from 'use-breakpoint';

import Card from 'containers/home/stories/samples/sample-card';
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
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative lg:col-span-7 lg:col-start-2">
              <div
                style={{ backgroundImage: `url(/images/stories/ghana.png)` }}
                className="overflow-hidden bg-center bg-no-repeat bg-cover aspect-video"
              />

              <div className="w-full lg:absolute left-full top-1/3">
                <div className="w-full lg:max-w-[400px] lg:-translate-x-1/2">
                  <Card
                    country="Tanzania"
                    title="Carbon project on conservation site"
                    description="Indigenous-led with key financial schemes to protect biodiversity and benefit local people."
                    pathway="croplands"
                    articleUrl="#"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12">
            <div className="relative lg:col-span-7 lg:col-start-5">
              <div className="aspect-video">
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
              </div>

              <div className="left-0 w-full lg:absolute top-1/3">
                <div className="w-full lg:max-w-[400px] lg:-translate-x-1/2">
                  <Card
                    country="Dominican Republic"
                    title="Coastal resilience"
                    description="Mangroves and coral reefs restoration."
                    pathway="wetlands"
                    videoUrl="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Samples;
