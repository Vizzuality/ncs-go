import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import { STEPS } from './constants';
import Navigation from './navigation';
import Particles from './particles';
import ScrollSection from './scroll-section';
import Steps from './steps';

const Intro = () => {
  const sectionRef = useRef();
  const inViewSection = useInView(sectionRef, { margin: '-100% 0px 0px' });

  const setSection = useHomeStore((state) => state.setSection);

  useEffect(() => {
    if (inViewSection) {
      setSection('intro');
    }
  }, [inViewSection, setSection]);

  return (
    <section ref={sectionRef} className="relative">
      <div className="sticky top-0 left-0 z-0 w-full h-screen">
        <Particles />
        <Steps />
        <Navigation />
      </div>

      {/* Remove the same height as the sticky one by using the margin */}
      <div className="-mt-[99vh]">
        {STEPS.map(({ id, animationStep }) => (
          <ScrollSection key={id} step={id} animationStep={animationStep} />
        ))}
      </div>
    </section>
  );
};

export default Intro;
