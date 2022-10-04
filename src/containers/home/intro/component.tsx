import React from 'react';

import Particles from 'containers/home/particles';

import ScrollSection from './scroll-section';

const Intro = () => {
  return (
    <section className="relative">
      <div className="sticky top-0 left-0 z-0 w-full h-screen">
        <Particles />
      </div>

      {/* Remove the same height as the sticky one by using the margin */}
      <div className="-mt-[100vh]">
        <ScrollSection step={0} />
        <ScrollSection step={1} />
        <ScrollSection step={2} />
        <ScrollSection step={3} />
      </div>
    </section>
  );
};

export default Intro;
