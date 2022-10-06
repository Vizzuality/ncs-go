import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import Card from 'containers/home/stories/samples/sample-card';
import Wrapper from 'containers/wrapper';
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
      <Wrapper>
        <div className="grid grid-cols-12">
          <div className="col-span-9 col-start-2">
            <div className="relative col-span-6">
              <Image
                alt="story-sample"
                src="/images/stories/ghana.png"
                width={744}
                height={419}
                layout="responsive"
              />

              <div className="absolute -right-40 -bottom-20">
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
      </Wrapper>
      <div
        className="relative h-auto border border-orange-400"
        style={{ background: 'linear-gradient(#FFFFFF 50%, #011426 50%' }}
      >
        <Wrapper>
          <div className="justify-center grid-cols-12">
            <Video
              config={videoConfig}
              playing
              loop
              playBackground="bg-white"
              playColor="text-gray-900"
              url="https://youtu.be/6PGyRolwFVo"
              height="419px"
            />

            <div className="absolute -left-20 top-40">
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
    </div>
  );
};

export default Samples;
