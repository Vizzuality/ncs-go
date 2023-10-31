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
      <section id="pathways" className="scroll-mt-16">
        <Wrapper className="py-10 md:pt-20 md: pb-0">
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
      <section className="bg-beige">
        <Wrapper className="py-10 md:py-20">
          <Hero subtitle="Naturebase Beta" />

          <motion.div
            className="font-sans text-base space-y-4 md:space-y-0 text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-span-5">
              <p>
                The full version of the naturebase platform is currently under development and this
                includes the full breadth of datasets. This beta version includes accurate{' '}
                <span className="text-red-600">
                  data for 18 out of 25 natural climate solutions
                </span>{' '}
                pathways and activities.
              </p>
            </div>
            <div className="md:col-span-7">
              <p>
                Additional data on mitigation potential for avoided shrubland conversion (ASC),
                avoided grassland conversion (AGC), avoided peatland drainage (APC), seagrass
                protection, saltmarsh protection, seagrass restoration, and saltmarsh restoration is
                coming. This will affect global and national totals calculated for mitigation
                potential.
              </p>
            </div>
          </motion.div>
        </Wrapper>
      </section>
      <section id="data" className="scroll-mt-16">
        <Wrapper className="py-10 md:py-20">
          <Hero subtitle="Data sources" />

          <motion.div
            className="font-sans text-base space-y-4 md:space-y-0 text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-span-5">
              <p>
                Naturebase.org integrates an array of data and information acquired through various
                technologies, including satellite data analysis and land system modelling, machine
                learning, and qualitative research. It meticulously assembles and validates existing
                knowledge rooted in peer-reviewed scientific research, presenting a comprehensive
                repository of information.
              </p>
            </div>
            <div className="md:col-span-7">
              <p>This repository encompasses data related to:</p>
              <ul>
                <li>Carbon mitigation</li>
                <li>Ecosystem and biodiversity advantages</li>
                <li>Impacts on human well-being</li>
                <li>Supportive policies</li>
                <li>Illustrative case studies</li>
              </ul>
              <p>
                By doing so, it enables informed decision-making when it comes to implementing
                Nature-based Solutions (NbS) in every corner of the world.
              </p>
            </div>
          </motion.div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>Methodology</Wrapper>
      </section>
      <section id="authors" className="bg-beige scroll-mt-16">
        <Wrapper className="py-10 md:py-20">
          <Hero subtitle="Key authors" />

          <motion.div
            className="font-sans text-base space-y-4 md:space-y-0 text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-span-5">
              <p>
                The research and scientific papers which appear on naturebase are from teams of{' '}
                <span className="text-red-600">scientists and researchers</span> across the world.
              </p>
            </div>
            <div className="md:col-span-7">
              <p>
                Naturebase was born out of the creative, expert brains of the NCS Science team at
                The Nature Conservancy, with contributions by numerous organisations across the
                environmental sector.
              </p>
            </div>
          </motion.div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Science;
