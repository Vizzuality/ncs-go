import React from 'react';

import dynamic from 'next/dynamic';

import Card from 'containers/home/stories/samples/sample-card';
import Wrapper from 'containers/wrapper';

import { Media } from 'components/media-query';

const Video = dynamic(() => import('components/video'), {
  ssr: false,
});

const Samples = () => {
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
    <div className="w-full">
      {/* <Wrapper>
        <div className="md:px-24">
          <div className="relative">
            <div
              style={{ backgroundImage: `url(/images/stories/ghana.png)` }}
              className="overflow-hidden bg-center bg-no-repeat bg-cover md:aspect-auto aspect-video md:w-6/12 xl:w-8/12 xl:h-80"
            />

            <div className="xl:absolute -right-40 -bottom-20">
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
      </Wrapper> */}
      <Media lessThan="lg">
        <div className="h-auto pt-4 pb-10">
          <Wrapper>
            <div className="relative w-full md:px-24">
              <div className="flex w-full aspect-video">
                <Video
                  config={videoConfig}
                  playing
                  loop
                  playBackground="bg-white"
                  playColor="text-gray-900"
                  url="https://youtu.be/6PGyRolwFVo"
                  height="419px"
                />
              </div>

              <Card
                country="Dominican Republic"
                title="Coastal resilience"
                description="Mangroves and coral reefs restoration."
                pathway="wetlands"
                videoUrl="#"
              />
            </div>
          </Wrapper>
        </div>
      </Media>
      <Media greaterThanOrEqual="lg">
        <div
          className="h-auto py-20 border border-orange-400"
          style={{ background: 'linear-gradient(#FFFFFF 50%, #011426 50%' }}
        >
          <Wrapper>
            <div className="relative justify-end w-full md:px-24">
              <div className="flex w-full">
                <Video
                  config={videoConfig}
                  playing
                  loop
                  playBackground="bg-white"
                  playColor="text-gray-900"
                  url="https://youtu.be/6PGyRolwFVo"
                  height="419px"
                />
              </div>
              <div className="w-full xl:z-10 xl:absolute xl:left-1/4 xl:top-1/3">
                <Card
                  country="Dominican Republic"
                  title="Coastal resilience"
                  description="Mangroves and coral reefs restoration."
                  pathway="wetlands"
                  videoUrl="#"
                />
              </div>
            </div>
          </Wrapper>
        </div>
      </Media>
    </div>
  );
};

export default Samples;
