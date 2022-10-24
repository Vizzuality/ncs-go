import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Features from 'containers/home/about/features';
import AboutVideo from 'containers/home/about/video';
import Hero from 'containers/home/common/hero';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

const About = () => {
  const ref = useRef();
  const sectionRef = useRef();

  const inView = useInView(ref, { once: true, amount: 0.25 });
  const inViewSection = useInView(sectionRef, { margin: '-100% 0px 0px' });

  const opacity = inView ? 1 : 0;

  const setSection = useHomeStore((state) => state.setSection);

  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  useEffect(() => {
    if (inViewSection) {
      setSection('about');
    }
  }, [inViewSection, setSection]);

  return (
    <div ref={sectionRef} id="about" className="bg-white snap-start snap-always">
      <Media lessThan="md">
        <Wrapper>
          <div className="pt-10 pb-4">
            <Hero
              className="text-gray-800"
              title="About Naturebase"
              subtitle="Naturebase is a new interactive platform that will bring together science-based data to mitigate climate change."
            />
          </div>
        </Wrapper>
      </Media>

      <Media lessThan="md">
        {' '}
        <AboutVideo />{' '}
      </Media>

      <div
        className="overflow-hidden bg-left-top bg-no-repeat"
        style={{
          backgroundImage: minWidth >= BREAKPOINTS.md && `url(/images/home/about/background.svg)`,
        }}
      >
        <Media greaterThanOrEqual="md">
          <Wrapper>
            <div className="pt-32 pb-0 lg:grid lg:grid-cols-3">
              <Hero
                className="text-gray-800 lg:col-span-2 lg:col-start-1"
                title="About Naturebase"
                subtitle="Naturebase is a new interactive platform that will bring together science-based data to mitigate climate change."
              />
            </div>
          </Wrapper>
        </Media>

        <Wrapper>
          <motion.div
            ref={ref}
            className="pt-4 pb-10 font-sans text-base text-gray-800 lg:py-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10"
            {...IN_VIEW_PROPS}
          >
            <motion.div
              className="col-start-2 pb-4 lg:pb-0"
              animate={{ opacity }}
              transition={{ delay: 0.2 }}
            >
              <p>
                Naturebase will bring together science-based data on nature’s pathways to mitigate
                climate change across every region of the planet, combining them with the latest
                information on enabling policy frameworks, mitigation and adaptation plans, finance
                schemes and of course, loads of case studies.
              </p>
            </motion.div>
            <motion.div
              className="col-start-3 space-y-4 md:space-y-6"
              animate={{ opacity }}
              transition={{ delay: 0.3 }}
            >
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
            </motion.div>
          </motion.div>
        </Wrapper>

        <Media greaterThanOrEqual="md">
          <AboutVideo />
        </Media>
      </div>

      <div className="bg-gray-900 md:pb-28">
        <Features />
      </div>
    </div>
  );
};

export default About;
