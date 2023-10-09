import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Features from 'containers/home_old/about/features';
import AboutVideo from 'containers/home_old/about/video';
import Hero from 'containers/home_old/common/hero';
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
    <div ref={sectionRef} id="about" className="bg-white snap-start snap-always scroll-mt-20">
      <Media lessThan="md">
        <Wrapper>
          <div className="pt-10 pb-4">
            <Hero
              className="text-gray-800"
              title="About Naturebase"
              subtitle="Naturebase will be an online platform that helps decision makers put Natural Climate Solutions into action."
            />
          </div>
        </Wrapper>
      </Media>

      <Media lessThan="md">
        {' '}
        <AboutVideo />{' '}
      </Media>

      <div className="relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-left-top bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: minWidth >= BREAKPOINTS.md && `url(/images/home/about/background.svg)`,
          }}
        />
        <Media greaterThanOrEqual="md">
          <Wrapper>
            <div className="pt-32 pb-0 lg:grid lg:grid-cols-3">
              <Hero
                className="text-gray-800 lg:col-span-2 lg:col-start-1"
                title="About Naturebase"
                subtitle="Naturebase will be an online platform that helps decision makers put Natural Climate Solutions into action."
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
                Naturebase will deliver information grounded in science, lighting up pathways to
                protect, manage, and restore nature for measurable climate benefits. Bringing
                together the latest research, policies, and feasibility considerations, Naturebase
                will guide near-term action for decision-makers, practitioners, resource managers,
                and investors.
              </p>
            </motion.div>
            <motion.div
              className="col-start-3 space-y-4 md:space-y-6"
              animate={{ opacity }}
              transition={{ delay: 0.3 }}
            >
              <p>
                Farmers, foresters, governments, and local communities will learn where to deploy
                natural climate solutions to achieve their climate targets in consideration of their
                own needs and interests.
              </p>
              <p>
                Users will be able to explore and compare target areas across forests, wetlands,
                grasslands, and agricultural lands, while considering issues such as land tenure,
                opportunity cost, financing opportunities, and enabling conditions.
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
