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
    <motion.div ref={sectionRef} id="featured-science" className="bg-white">
      <Wrapper>
        <motion.div
          ref={ref}
          className="py-10 font-sans text-base text-gray-800 lg:pb-20 lg:pt-32 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10"
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

        <div className="space-y-4 font-sans text-base text-gray-800 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10 lg:pt-20">
          <Hero
            className="col-span-2 col-start-1 text-gray-800"
            title="Pathways"
            subtitle="Solutions can be found within our grasslands, wetlands, forests and drylands."
          />

          <div className="col-start-3 lg:pt-6">
            <motion.p animate={{ opacity }} transition={{ delay: 0.4 }}>
              Learn about the nature-based approaches to mitigate climate change through land use
              and management, which avoid emissions and enhance sequestration across forests,
              wetlands, grasslands and agricultural lands to reduce the global concentration of
              atmospheric of carbon dioxide.
            </motion.p>
          </div>
        </div>

        <Pathways />
      </Wrapper>
    </motion.div>
  );
};

export default FeaturedScience;
