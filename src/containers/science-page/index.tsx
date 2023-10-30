import React, { useRef } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

import Hero from 'containers/hero';
import Pathways from 'containers/science-page/pathways';
import Wrapper from 'containers/wrapper';

import { IN_VIEW_PROPS } from 'constants/motion';

const Science = () => {
  const imageRef = useRef();
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['0 1', '1 1'] });

  const y = useTransform(scrollYProgress, [0, 1], ['-42%', '0%']);

  return (
    <div id="naturbase" className="bg-white w-full pt-32 md:pt-40">
      <Wrapper className="pb-10 md:pb-20">
        <Hero subtitle="What can nature do for the climate?" />

        <motion.div
          className="font-sans text-base space-y-4 md:space-y-0 text-gray-800 md:grid md:grid-cols-12 md:gap-10"
          {...IN_VIEW_PROPS}
        >
          <div className="md:col-span-5">
            <p className="text-lg">
              Natural climate solution pathways{' '}
              <span className="text-blue-800">protect, manage, and restore</span> nature in forests,
              croplands, wetlands, and grasslands.
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-base md:mt-1">
              Science shows that natural climate solutions can deliver up to one-third of the
              emission reductions required to stabilise the planet and avoid the worst impacts of
              climate. This whilst also providing ecosystem and human well-being benefits such as
              improving water and air quality, public health and building communities that are
              resilient to extreme weather events such as flooding and drought.
            </p>
          </div>
        </motion.div>
      </Wrapper>

      <div className="h-[180px] md:h-[428px] overflow-hidden w-full">
        <motion.div ref={imageRef} style={{ y }} className="w-full" {...IN_VIEW_PROPS}>
          <Image
            src={'/images/science/01.jpg'}
            alt={'What nature can do for the climate?'}
            width={1280}
            height={728}
            layout="responsive"
            objectFit="contain"
          />
        </motion.div>
      </div>
      <section id="pathways">
        <Wrapper className="py-10 md:py-20">
          <Hero subtitle="Pathways to mitigate climate change" />

          <motion.div
            className="font-sans text-base text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <p className="md:col-span-7">
              Learn more about the nature-based approaches to mitigate climate change (also known as
              natural climate solutions), which avoid emissions and enhance sequestration across
              forests, wetlands, grasslands and agricultural lands.{' '}
              <a
                href="https://www.n4c.org"
                className="font-semibold text-brand-700 hover:underline"
              >
                Visit n4c.org
              </a>{' '}
              to learn more.
            </p>
          </motion.div>
          <Pathways />
        </Wrapper>
      </section>
    </div>
  );
};

export default Science;
