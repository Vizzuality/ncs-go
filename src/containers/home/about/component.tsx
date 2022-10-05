import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import Features from 'containers/home/about/features';
import AboutVideo from 'containers/home/about/video';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

const About = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px' });
  const setSection = useHomeStore((state) => state.setSection);

  useEffect(() => {
    if (inView) {
      setSection('about');
    }
  });

  return (
    <div ref={ref}>
      <Wrapper>
        <div className="pt-10 md:pt-32">
          <Hero
            className="text-gray-800"
            title="About Naturebase"
            subtitle="Naturebase is a new interactive platform that will bring together science-based data to mitigate climate change."
          />
        </div>
        <div className="py-20 font-sans text-base md:text-lg md:grid md:grid-cols-3 md:gap-10">
          <div className="col-start-2 pb-4 md:pb-0">
            <p>
              Naturebase will bring together science-based data on nature’s pathways to mitigate
              climate change across every region of the planet, combining them with the latest
              information on enabling policy frameworks, mitigation and adaptation plans, finance
              schemes and of course, loads of case studies.
            </p>
          </div>
          <div className="col-start-3 space-y-4 md:space-y-6">
            <p>
              Scientists, practitioners, policymakers and experts can find their way to enact
              nature’s full transformative potential.
            </p>
            <p>
              You will be able to navigate through the different regions and biomes, capturing real
              up-to-date information at a global, national and local level, and understand which of
              nature’s pathways offer the best potential for reducing emissions at the same time as
              benefiting local communities and biodiversity.
            </p>
          </div>
        </div>
      </Wrapper>
      <AboutVideo />
      <Features />
    </div>
  );
};

export default About;
