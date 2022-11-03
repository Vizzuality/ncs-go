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
      <div className="mb-10 bg-gray-900">
        <Wrapper>
          <motion.div
            ref={ref}
            className="py-10 font-sans text-base text-beige lg:pb-20 lg:pt-32 xl:pb-20 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10"
            {...IN_VIEW_PROPS}
          >
            <Hero
              className="col-span-2 col-start-1 text-beige"
              title="featured science"
              subtitle="What nature can do for the climate?"
            />

            <div className="col-start-1 py-4 lg:pb-0">
              <motion.p animate={{ opacity }} transition={{ delay: 0.2 }}>
                Nature-based solutions work to protect, sustainably manage, and restore ecosystems
                in ways that address societal challenges effectively and adaptively.
              </motion.p>
            </div>
            <div className="col-start-2 lg:pt-4">
              <motion.p animate={{ opacity }} transition={{ delay: 0.3 }}>
                They are based on science that demonstrates how healthy ecosystems can serve as
                allies in addressing our most critical challenges such climate change, disaster risk
                reduction, food and water security, and human health.
              </motion.p>
            </div>
          </motion.div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="space-y-4 font-sans text-base text-gray-800 md:text-lg lg:grid lg:grid-cols-3 lg:gap-10 lg:pt-20">
          <Hero
            className="col-span-2 col-start-1 text-gray-800"
            title="Pathways"
            subtitle="Natural climate solution pathways protect, manage, and restore nature in forests, croplands, wetlands, and grasslands."
          />

          <div className="col-start-3 lg:pt-6">
            <motion.p animate={{ opacity }} transition={{ delay: 0.4 }}>
              Learn more about the nature-based approaches to mitigate climate change (also known as
              natural climate solutions), which avoid emissions and enhance sequestration across
              forests, wetlands, grasslands and agricultural lands.
            </motion.p>
          </div>
        </div>

        <Pathways />
      </Wrapper>
    </motion.div>
  );
};

export default FeaturedScience;
