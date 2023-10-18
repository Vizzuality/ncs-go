'use client';
import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import { useModal } from 'hooks/modals';

import Features from 'containers/home-page/features';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import Icon from 'components/icon';
import Modal from 'components/modal';
import Video from 'components/video';
import { BREAKPOINTS } from 'styles/styles.config';

import VIDEO_SVG from 'svgs/ui/video.svg?sprite';

const HomePage = () => {
  const sectionRef = useRef();

  const inViewSection = useInView(sectionRef, { margin: '0px 0px 0px' });

  const setSection = useHomeStore((state) => state.setSection);
  const { isOpen, open, close } = useModal();

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

  useEffect(() => {
    if (inViewSection) {
      setSection('home');
    }
  }, [inViewSection, setSection]);

  return (
    <div id="home" className="bg-white snap-start snap-always scroll-mt-20">
      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-left-top bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: minWidth >= BREAKPOINTS.md && `url(/images/home/background.svg)`,
          }}
        />

        <Wrapper className="pb-10 md:pb-72">
          <div className="md:pt-56 pt-32 md:w-1/2 space-y-10">
            <h2 className="text-xl md:text-3xl font-sans max-w-lg" ref={sectionRef}>
              Unlock Nature’s potential to mitigate climate change with naturebase
            </h2>
            <Media lessThan="md">
              <div className="border-8 rounded-3xl border-gray-900 w-full h-[214px]" />
            </Media>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
              <Button theme="primary" size="xs" className="py-3 h-12">
                Launch map
              </Button>

              <Button
                theme="tertiary"
                size="xs"
                className="py-3 h-12 border-none space-x-2 group"
                onClick={() => open()}
              >
                <Icon
                  icon={VIDEO_SVG}
                  className="h-6 w-6 stroke-gray-800 group-hover:stroke-white transition ease-in-out delay-150 duration-300"
                />
                <p className="text-base font-semibold text-gray-800 group-hover:text-white transition ease-in-out delay-150 duration-300">
                  Watch video
                </p>
              </Button>

              <Modal
                title=""
                size="l"
                open={isOpen}
                closeBtn={minWidth >= BREAKPOINTS.sm ? false : true}
                onOpenChange={() => close()}
              >
                <div className="absolute left-0 w-full -translate-y-1/2 sm:static top-1/2 sm:translate-y-0 sm:pt-0 aspect-video">
                  <Video
                    config={videoConfig}
                    light={false}
                    loop
                    url="https://youtu.be/shGJFJ1lgGY"
                    height="100%"
                    width="100%"
                  />
                </div>
              </Modal>
            </div>
          </div>
          <Media greaterThanOrEqual="md">
            <div className="absolute left-1/2 ml-10 top-40 border-8 rounded-3xl border-gray-900 w-[785px] h-[488px]" />
          </Media>
        </Wrapper>
      </div>

      <Image
        src={'/images/home/01.png'}
        alt={'What nature can do for the climate?'}
        width={1120}
        height={428}
        layout="responsive"
        objectFit="contain"
      />
      <section className="bg-beige py-10 md:py-20 text-gray-800">
        <Wrapper>
          <div className="md:w-2/3 flex flex-col md:pb-10 max-w-xl">
            <h2 className="font-sans leading-7 md:leading-10 text-lg md:text-xl pb-4 md:pb-10">
              A home base for all decision-makers interested in unlocking the power of nature to
              preserve our living planet.
            </h2>
            <p className="text-base pb-4">
              Naturebase is a new interactive platform that will bring together science-based data
              on nature’s pathways to identify where, why and how to implement high-integrity
              nature-based projects with the highest carbon mitigation impact whilst protecting
              livelihoods and biodiversity.
            </p>
          </div>
          <Features />
        </Wrapper>
      </section>
    </div>
  );
};

export default HomePage;
