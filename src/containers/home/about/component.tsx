import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Features from 'containers/home/about/features';
import AboutVideo from 'containers/home/about/video';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

const About = () => {
  const ref = useRef();

  const inView = useInView(ref);

  const setSection = useHomeStore((state) => state.setSection);

  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  useEffect(() => {
    if (inView) {
      setSection('about');
    }
  });

  return (
    <div ref={ref} id="about" className="scroll-mt-20 lg:scroll-mt-0">
      {minWidth < BREAKPOINTS.md && (
        <Wrapper>
          <div className="pt-10 pb-4">
            <Hero
              className="text-gray-800"
              title="About Naturebase"
              subtitle="Naturebase is a new interactive platform that will bring together science-based data to mitigate climate change."
            />
          </div>
        </Wrapper>
      )}

      {minWidth < BREAKPOINTS.md && <AboutVideo />}

      <div
        className="overflow-hidden bg-left-top bg-no-repeat"
        style={{
          backgroundImage: minWidth >= BREAKPOINTS.md && `url(/images/home/about/background.svg)`,
        }}
      >
        {minWidth >= BREAKPOINTS.md && (
          <Wrapper>
            <div className="pt-32 pb-0 lg:grid lg:grid-cols-3">
              <Hero
                className="text-gray-800 lg:col-span-2 lg:col-start-1"
                title="About Naturebase"
                subtitle="Naturebase is a new interactive platform that will bring together science-based data to mitigate climate change."
              />
            </div>
          </Wrapper>
        )}

        <Wrapper>
          <div className="pt-4 pb-10 font-sans text-base text-gray-800 lg:py-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10">
            <motion.div className="col-start-2 pb-4 lg:pb-0" {...IN_VIEW_PROPS}>
              <p>
                Naturebase will bring together science-based data on nature’s pathways to mitigate
                climate change across every region of the planet, combining them with the latest
                information on enabling policy frameworks, mitigation and adaptation plans, finance
                schemes and of course, loads of case studies.
              </p>
            </motion.div>
            <div className="col-start-3 space-y-4 md:space-y-6" {...IN_VIEW_PROPS}>
              <p>
                Scientists, practitioners, policymakers and experts can find their way to enact
                nature’s full transformative potential.
              </p>
              <p>
                You will be able to navigate through the different regions and biomes, capturing
                real up-to-date information at a global, national and local level, and understand
                which of nature’s pathways offer the best potential for reducing emissions at the
                same time as benefiting local communities and biodiversity.
              </p>
            </div>
          </div>
        </Wrapper>

        {minWidth >= BREAKPOINTS.md && <AboutVideo />}
      </div>

      <div className="bg-gray-900 md:pb-28">
        <Features />
      </div>
    </div>
  );
};

export default About;
