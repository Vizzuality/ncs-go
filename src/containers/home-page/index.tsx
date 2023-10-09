import React, { useEffect, useRef } from 'react';

import Image from 'next/image';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Features from 'containers/home-page/features';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import Icon from 'components/icon';
import { BREAKPOINTS } from 'styles/styles.config';

import VIDEO_SVG from 'svgs/ui/video.svg?sprite';

const HomePage = () => {
  const sectionRef = useRef();

  const inViewSection = useInView(sectionRef, { margin: '0px 0px 0px' });

  const setSection = useHomeStore((state) => state.setSection);

  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

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

        <Wrapper className="pb-72">
          <div className="pt-56 w-1/2 space-y-10">
            <h2 className="text-3xl font-sans max-w-lg" ref={sectionRef}>
              Unlock Nature’s potential to mitigate climate change with naturebase
            </h2>
            <div className="flex space-x-2">
              <Button theme="primary" size="xs" className="py-3 h-12">
                Launch map
              </Button>
              <Button theme="tertiary" size="xs" className="py-3 h-12 border-none space-x-2 group">
                <Icon
                  icon={VIDEO_SVG}
                  className="h-6 w-6 stroke-gray-800 group-hover:stroke-white transition ease-in-out delay-150 duration-300"
                />
                <p className="text-base font-semibold text-gray-800">Watch video</p>
              </Button>
            </div>
          </div>
          <div className="absolute left-1/2 ml-10 top-40 border-8 rounded-3xl border-gray-900 w-[785px] h-[488px]" />
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
      <section className="bg-beige py-20 text-gray-800">
        <Wrapper>
          <div className="w-2/3 flex flex-col pb-10 max-w-xl">
            <h2 className="font-sans text-xl pb-10">
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
