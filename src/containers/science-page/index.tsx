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
            <p className="text-lg leading-7">
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

      <div className="h-[142px] md:h-[428px] overflow-hidden w-full">
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
        <Wrapper className="py-10 md:pt-20 md:pb-0">
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
              <p className="md:leading-7 md:text-lg">
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
        <motion.div ref={imageRef} style={{ y }} className="w-full" {...IN_VIEW_PROPS}>
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
                <span className="text-blue-800">
                  core principles of natural climate solutions. 
                </span>
              </p>
              <br />
              <p>
                Each spatial dataset presented estimates the mitigation potential of Natural Climate
                Solution activities derived from original geospatial analysis using the latest
                satellite and peer-reviewed datasets of current land systems, varied geospatial
                data, and carbon emissions/sequestration estimates informed by a review of
                peer-reviewed publications. For more information see our data download section.
              </p>
            </div>
          </motion.div>
        </Wrapper>
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
      <div className="h-[142px] md:h-[428px] overflow-hidden w-full">
        <motion.div ref={imageRef} style={{ y }} className="w-full" {...IN_VIEW_PROPS}>
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
      <section>
        <Wrapper className="py-10 md:py-20">
          <Hero subtitle="Funding" />

          <motion.div
            className="font-sans text-base space-y-4 md:space-y-0 text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-span-5">
              <p className="md:text-lg md:leading-7">
                In 2020, the <span className="text-blue-800">Bezos Earth Fund</span> pledged a $10
                billion fund over a decade to fight the impact of climate change. The Nature
                Conservancy received a portion of this gift to dramatically expand the scientific
                tools needed to take natural climate solutions to scale, across the globe.
              </p>
            </div>
            <div className="md:col-span-5">
              <p>
                The funding is also focused on building equitable solutions that benefit communities
                impacted by climate change by engaging diverse community stakeholders, indigenous
                leadership, and others. As part of this scope of work, we developed naturebase.
              </p>
            </div>
          </motion.div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Science;
