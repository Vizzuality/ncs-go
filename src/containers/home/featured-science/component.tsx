import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';

import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

import Pathways from './pathways';

const FeaturedScience = () => {
  const ref = useRef();
  const sectionRef = useRef();

  const inView = useInView(ref, { once: true, amount: 0.25 });
  const inViewSection = useInView(sectionRef, { margin: '-100% 0px 0px' });
  const setSection = useHomeStore((state) => state.setSection);

  const opacity = inView ? 1 : 0;

  useEffect(() => {
    if (inViewSection) {
      setSection('featured-science');
    }
  }, [inViewSection, setSection]);

  return (
    <motion.div
      ref={sectionRef}
      id="featured-science"
      className="bg-white lg:pt-32 scroll-mt-20 lg:scroll-mt-0 snap-start snap-always"
    >
      <Wrapper>
        <motion.div
          ref={ref}
          className="pb-4 font-sans text-base text-gray-800 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10"
          {...IN_VIEW_PROPS}
        >
          <Hero
            className="col-span-2 col-start-1 text-gray-800"
            title="featured science"
            subtitle="What nature can do for the climate?"
          />

          <div className="col-start-1 py-4 lg:pb-0">
            <motion.p animate={{ opacity }} transition={{ delay: 0.2 }}>
              Nature-based solutions are known for protecting, sustainably managing, and restoring
              natural and modified ecosystems in ways that address societal challenges effectively
              and adaptively.
            </motion.p>
          </div>
          <div className="col-start-2 lg:pt-4">
            <motion.p animate={{ opacity }} transition={{ delay: 0.3 }}>
              They are underpinned by benefits that flow from healthy ecosystems and target major
              challenges like climate change, disaster risk reduction, food, and water security, and
              health and are critical to economic development.
            </motion.p>
          </div>
        </motion.div>

        <div className="pt-4 space-y-4 font-sans text-base text-gray-800 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10 lg:pt-20">
          <Hero
            className="col-span-2 col-start-1 text-gray-800"
            title="Pathways"
            subtitle="Solutions can be found within our grasslands, wetlands, forests and drylands."
          />

          <div className="col-start-3 lg:pt-6">
            <p>
              There are 20 science-backed effective approaches, or pathways, to nurture the best of
              what nature can do to limit global warming and preserve our natural world.
            </p>
          </div>
        </div>

        <Pathways />
      </Wrapper>
    </motion.div>
  );
};

export default FeaturedScience;
