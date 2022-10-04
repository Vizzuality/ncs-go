import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import ContactForm from 'containers/home/common/contact-form';
import Hero from 'containers/home/common/hero';
import Features from 'containers/home/overview/features';
import Wrapper from 'containers/wrapper';

const Overview = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px' });
  const setSection = useHomeStore((state) => state.setSection);

  useEffect(() => {
    if (inView) {
      setSection('about');
    }
  });

  return (
    <div ref={ref} className="snap-start snap-always">
      <Wrapper>
        <div className="pt-20 pb-20">
          <Hero
            className="text-gray-800"
            title="Naturebase overview"
            subtitle="Naturebase help you to achieve the CO2 emission reduction goals from France Agreement."
          />
        </div>
      </Wrapper>

      <Features />

      <section className="bg-gray-900 py-28">
        <ContactForm />
      </section>
    </div>
  );
};

export default Overview;
