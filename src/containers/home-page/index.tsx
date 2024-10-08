'use client';
import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import { useHomeStore } from 'store/home';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  const imageRef = useRef();
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['0 1', '1 1'] });

  const y = useTransform(scrollYProgress, [0, 1], ['-42%', '0%']);

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
      <div className="overflow-hidden">
        <div className="relative lg:after:content-[''] 4xl:after:-top-24 4xl:after:left-[55%] 3xl:after:left-[50%] lg:after:absolute after:z-0 after:opacity-20 w-full after:top-10 2xl:after:top-0 2xl:after:left-[45%] after:bottom-0 after:left-[40%] after:right-0 after:bg-no-repeat after:bg-cover lg:after:bg-[url('/images/home/background.svg')]">
          <Wrapper className="pb-8 lg:pb-14 pt-32 lg:pt-60">
            <div className="relative lg:w-1/2 space-y-10 lg:bg-beige p-0 lg:p-10 z-20">
              <h2
                className="text-2xl lg:text-3xl font-sans lg:max-w-lg text-gray-800"
                ref={sectionRef}
              >
                Unlock nature’s potential to mitigate climate change with naturebase
              </h2>
              <Media lessThan="lg">
                <div className="shadow-lg">
                  <Image
                    src={'/images/home/mockup.png'}
                    alt={'Unlock nature’s potential to mitigate climate change with naturebase'}
                    width={343}
                    height={216}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </Media>
              <div className="flex flex-col lg:flex-row space-y-4 md:space-y-0 md:space-x-2">
                <Button theme="primary" size="xs" className="py-3 h-12">
                  <a href="https://app.naturebase.org" target="_blank" rel="noreferrer">
                    Launch app
                  </a>
                </Button>

                <Button
                  theme="secondary"
                  size="xs"
                  className="py-3 h-12 border-none space-x-2 group hover:bg-transparent"
                  onClick={() => open()}
                >
                  <Icon
                    icon={VIDEO_SVG}
                    className="h-6 w-6 stroke-gray-800 group-hover:stroke-brand-700 transition ease-in-out delay-150 duration-300"
                  />
                  <p className="text-base font-semibold text-gray-800 group-hover:text-brand-700 transition ease-in-out delay-150 duration-300">
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
                      url="https://youtu.be/mElqcD07Tk8?si=mMoMxgD6BB0FKF-h"
                      height="100%"
                      width="100%"
                    />
                  </div>
                </Modal>
              </div>
            </div>
            <Media greaterThanOrEqual="lg">
              <div className="bg-[url('/images/home/mockup.png')] absolute z-10 right-0 top-32 mr-24 2xl:right-32 3xl:right-60 4xl:right-72 bg-no-repeat bg-cover w-[768px] h-[483px] shadow-lg" />
            </Media>
          </Wrapper>
        </div>
      </div>
      <div className="h-[180px] md:h-[428px] overflow-hidden w-full">
        <motion.div ref={imageRef} style={{ y }} className="w-full">
          <Image
            src={'/images/home/01.jpg'}
            alt={'What nature can do for the climate?'}
            width={1280}
            height={728}
            layout="responsive"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <section className="bg-beige py-10 md:py-20 text-gray-800">
        <Wrapper>
          <div className="md:w-2/3 flex flex-col pb-4 md:pb-10 max-w-xl">
            <p className="text-lg leading-7">
              Naturebase is a <span className="text-blue-800">new interactive platform</span> that
              brings together science-based data on nature’s pathways to benefit the climate by
              showing where, why and how to implement high-integrity nature-based projects with the
              highest climate mitigation impact whilst improving livelihoods and protecting
              biodiversity.
            </p>
          </div>
          <Features />
        </Wrapper>
      </section>
    </div>
  );
};

export default HomePage;
