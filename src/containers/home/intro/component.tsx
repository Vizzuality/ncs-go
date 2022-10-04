import React from 'react';

import { STEPS } from './constants';
import Particles from './particles';
import ScrollSection from './scroll-section';
import Steps from './steps';

const Intro = () => {
  return (
    <section className="relative">
      <div className="sticky top-0 left-0 z-0 w-full h-screen">
        <Particles />
        <Steps />
      </div>

      {/* Remove the same height as the sticky one by using the margin */}
      <div className="-mt-[100vh]">
        {STEPS.map(({ id }) => (
          <ScrollSection key={id} step={id} />
        ))}
      </div>
    </section>
  );
};

export default Intro;
