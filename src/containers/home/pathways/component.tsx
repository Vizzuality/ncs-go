import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

const Pathways = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px' });
  const setSection = useHomeStore((state) => state.setSection);

  useEffect(() => {
    if (inView) {
      setSection('stories');
    }
  });

  return (
    <div ref={ref} id="featured-science" className="py-10 lg:pt-32">
      <Wrapper>
        <div className="pb-4 font-sans text-base text-gray-800 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="col-span-2 col-start-1">
            <Hero
              className="text-gray-800"
              title="featured science"
              subtitle="What nature can do for the climate?"
            />
          </div>
          <div className="col-start-1 py-4 lg:pb-0">
            <p>
              Nature-based solutions are known for protecting, sustainably managing, and restoring
              natural and modified ecosystems in ways that address societal challenges effectively
              and adaptively.
            </p>
          </div>
          <div className="col-start-2">
            <p>
              They are underpinned by benefits that flow from healthy ecosystems and target major
              challenges like climate change, disaster risk reduction, food, and water security, and
              health and are critical to economic development.
            </p>
          </div>
        </div>
        <div className="pt-4 space-y-4 font-sans text-base text-gray-800 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10 lg:pt-20">
          <div className="col-span-2 col-start-1">
            <Hero
              className="text-gray-800"
              title="Pathways"
              subtitle="Solutions can be found within our grasslands, wetlands, forests and drylands."
            />
          </div>
          <div className="col-start-3 lg:pt-6">
            <p>
              There are 20 science-backed effective approaches, or pathways, to nurture the best of
              what nature can do to limit global warming and preserve our natural world.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Pathways;
