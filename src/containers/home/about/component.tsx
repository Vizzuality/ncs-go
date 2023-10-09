import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Features from 'containers/home/about/features';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import Icon from 'components/icon';
import { BREAKPOINTS } from 'styles/styles.config';

import VIDEO_SVG from 'svgs/ui/video.svg?sprite';

const About = () => {
  const sectionRef = useRef();

  const inViewSection = useInView(sectionRef, { margin: '-100% 0px 0px' });

  const setSection = useHomeStore((state) => state.setSection);

  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  useEffect(() => {
    if (inViewSection) {
      setSection('about');
    }
  }, [inViewSection, setSection]);

  return (
    <div ref={sectionRef} id="about" className="bg-white snap-start snap-always scroll-mt-20">
      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-left-top bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: minWidth >= BREAKPOINTS.md && `url(/images/home/about/background.svg)`,
          }}
        />

        <Wrapper className="pb-72">
          <div className="pt-44 w-1/2 space-y-10">
            <h2 className="text-3xl font-sans max-w-lg">
              Unlock Nature’s potential to mitigate climate change with naturebase
            </h2>
            <div className="flex space-x-2">
              <Button theme="tertiary" size="xs" className="py-3 h-12">
                Launch map
              </Button>
              <Button theme="tertiary" size="xs" className="py-3 h-12 border-none space-x-2 group">
                <Icon
                  icon={VIDEO_SVG}
                  className="h-6 w-6 stroke-gray-900 group-hover:stroke-white transition ease-in-out delay-150 duration-300"
                />
                <p className="text-base font-semibold">Watch video</p>
              </Button>
            </div>
          </div>
          <div className="absolute left-1/2 ml-10 top-24 border-8 rounded-3xl border-gray-900 w-[785px] h-[488px]" />
        </Wrapper>
      </div>

      <div className="bg-gray-900 md:pb-28">
        <Features />
      </div>
    </div>
  );
};

export default About;
