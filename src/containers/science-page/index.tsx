import React, { useRef } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

import Hero from 'containers/hero';
import Pathways from 'containers/science-page/pathways';
import Wrapper from 'containers/wrapper';

import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';

import SCIENCE_CHECKMARK_SVG from 'svgs/science/checkmark.svg?sprite';
import CORE_SVG from 'svgs/science/methodology/core.svg?sprite';
import PEER_SVG from 'svgs/science/methodology/peer.svg?sprite';
import SATELLITE_SVG from 'svgs/science/methodology/satellite.svg?sprite';

import { DATA_SOURCES } from './constants';

const Science = () => {
  const imageRefOne = useRef();
  const imageRefTwo = useRef();
  const imageRefThree = useRef();

  const { scrollYProgress: scrollYProgressOne } = useScroll({
    target: imageRefOne,
    offset: ['0 1', '1 1'],
  });

  const { scrollYProgress: scrollYProgressTwo } = useScroll({
    target: imageRefTwo,
    offset: ['0 1', '1 1'],
  });

  const { scrollYProgress: scrollYProgressThree } = useScroll({
    target: imageRefThree,
    offset: ['0 1', '1 1'],
  });
  const yOne = useTransform(scrollYProgressOne, [0, 1], ['-42%', '0%']);

  const yTwo = useTransform(scrollYProgressTwo, [0, 1], ['-42%', '0%']);

  const yThree = useTransform(scrollYProgressThree, [0, 1], ['-42%', '0%']);

  return (
    <div className="bg-white w-full pt-32 md:pt-40">
      <Wrapper className="pb-10 md:pb-20">
        <Hero subtitle="What can nature do for the climate?" />

        <motion.div
          className="font-sans text-base space-y-4 md:space-y-0 text-gray-800 md:grid md:grid-cols-12 md:gap-10"
          {...IN_VIEW_PROPS}
        >
          <div className="md:col-span-5">
            <p className="text-lg leading-7">
              Natural Climate Solutions pathways{' '}
              <span className="text-blue-800">protect, manage, and restore</span> nature in forests,
              croplands, wetlands, and grasslands.
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-base md:mt-1">
              Science shows that Natural Climate Solutions can deliver up to one-third of the
              emission reductions required to stabilise the planet and avoid the worst impacts of
              climate. This whilst also providing ecosystem and human well-being benefits such as
              improving water and air quality, public health and building communities that are
              resilient to extreme weather events such as flooding and drought.
            </p>
          </div>
        </motion.div>
      </Wrapper>

      <div className="h-[142px] md:h-[428px] overflow-hidden w-full">
        <motion.div ref={imageRefOne} style={{ y: yOne }} className="w-full" {...IN_VIEW_PROPS}>
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
        <Wrapper className="py-10 md:pt-20 md:pb-0">
          <Hero subtitle="Pathways" />

          <motion.div
            className="font-sans text-base text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <p className="md:col-span-7">
              Learn more about the nature-based approaches to mitigate climate change (also known as
              Natural Climate Solutions), which avoid emissions and enhance sequestration across
              forests, wetlands, grasslands and agricultural lands. Visit{' '}
              <a
                href="https://nature4climate.org/natures-solutions/natures-pathways/"
                className="font-semibold text-brand-700 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Nature&apos;s Pathway
              </a>{' '}
              to learn more.
            </p>
          </motion.div>
          <Pathways />
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
                naturebase.org integrates an array of data and information acquired through various
                technologies, including satellite data analysis and land system modelling, machine
                learning, and qualitative research. It meticulously assembles and validates existing
                knowledge rooted in peer-reviewed scientific research, presenting a comprehensive
                repository of information.
              </p>
            </div>
            <div className="md:col-span-7">
              <p>This repository encompasses data related to:</p>
              <ul className="flex flex-col space-y-4 py-6">
                {DATA_SOURCES.map((s, idx) => (
                  <li key={idx} className="flex space-x-4 items-center">
                    <Icon className="w-6 h-6 md:w-9 md:h-9" icon={SCIENCE_CHECKMARK_SVG} />
                    <p>{s.label}</p>
                  </li>
                ))}
              </ul>
              <p>
                By doing so, it enables informed decision-making when it comes to implementing
                Nature-based Solutions (NbS) in every corner of the world.
              </p>
            </div>
          </motion.div>
        </Wrapper>
      </section>
      <div className="h-[142px] md:h-[428px] overflow-hidden w-full">
        <motion.div ref={imageRefTwo} style={{ y: yTwo }} className="w-full" {...IN_VIEW_PROPS}>
          <Image
            src={'/images/science/02.jpg'}
            alt={''}
            width={1280}
            height={728}
            layout="responsive"
            objectFit="contain"
          />
        </motion.div>
      </div>
      <section>
        <Wrapper className="py-10 md:py-20">
          <Hero subtitle="Methodology" />

          <motion.div
            className="font-sans text-base space-y-4 md:space-y-0 text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-span-5 flex text-gray-800 space-x-10">
              <div className="flex flex-col space-y-6">
                <Icon className="w-14 h-14" icon={CORE_SVG} />
                <p className="max-w-[120px]">NCS core principles</p>
              </div>
              <div className="flex flex-col space-y-6">
                <Icon className="w-14 h-14" icon={SATELLITE_SVG} />
                <p className="max-w-[110px]">Latest satellite data</p>
              </div>
              <div className="flex flex-col space-y-6">
                <Icon className="w-14 h-14" icon={PEER_SVG} />
                <p className="max-w-[110px]">Peer-reviewed</p>
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="md:text-lg md:leading-7">
                The specific methodology and input data used to calculate the mitigation potential
                will vary among pathways, but all adhere to the{' '}
                <span className="text-blue-800">core principles of Natural Climate Solutions.</span>
              </p>
              <br />
              <p>
                Each spatial dataset presented estimates the mitigation potential of Natural Climate
                Solutions activities derived from original geospatial analysis using the latest
                satellite and peer-reviewed datasets of current land systems, varied geospatial
                data, and carbon emissions/sequestration estimates informed by peer-reviewed
                publications. For more information see our{' '}
                <a
                  href="https://app.naturebase.org/data"
                  target="_blank"
                  className="text-brand-700 hover:underline"
                  rel="noreferrer"
                >
                  Data page
                </a>
                .
              </p>
            </div>
          </motion.div>
        </Wrapper>
      </section>

      <div className="h-[142px] md:h-[428px] overflow-hidden w-full">
        <motion.div ref={imageRefThree} style={{ y: yThree }} className="w-full" {...IN_VIEW_PROPS}>
          <Image
            src={'/images/science/03.jpg'}
            alt={''}
            width={1280}
            height={728}
            layout="responsive"
            objectFit="contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Science;
