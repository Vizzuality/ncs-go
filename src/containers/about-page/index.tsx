/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

import Hero from 'containers/hero';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';
import { IN_VIEW_PROPS } from 'constants/motion';

import { FAQS, PARTNERS } from './constants';

const About = () => {
  const imageRefUp = useRef();
  const imageRefDown = useRef();
  const { scrollYProgress: scrollYProgressUp } = useScroll({
    target: imageRefUp,
    offset: ['0 1', '1 1'],
  });

  const { scrollYProgress: scrollYProgressDown } = useScroll({
    target: imageRefDown,
    offset: ['0 1', '1 1'],
  });

  const yUp = useTransform(scrollYProgressUp, [0, 1], ['-42%', '0%']);

  const yDown = useTransform(scrollYProgressDown, [0, 1], ['-42%', '0%']);

  return (
    <div id="naturbase" className="bg-white pt-12 md:pt-24 w-full">
      <section>
        <Wrapper className="lg:py-20 pt-20 pb-10">
          <Hero title="What is naturebase" subtitle="Open data platform" />

          <motion.div
            className="font-sans flex flex-col space-y-4 md:space-y-0 text-base text-gray-800 md:grid md:grid-cols-3 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-start-1">
              <p>
                An open data platform designed to identify where, why and how to implement
                high-integrity nature-based projects with the highest carbon mitigation impact
                whilst protecting livelihoods and biodiversity.
              </p>
            </div>
            <div className="md:col-start-2">
              <p>
                Backed by peer-reviewed scientific data, the application shows users the emissions
                reduction potential for each pathway everywhere on the planet, complemented with
                information on ecosystem and human benefits, enabling policies and case studies.
              </p>
            </div>
          </motion.div>
        </Wrapper>

        <div className="h-[180px] md:h-[428px] overflow-hidden w-full">
          <motion.div ref={imageRefUp} style={{ y: yUp }} className="w-full" {...IN_VIEW_PROPS}>
            <Image
              src={'/images/about/01.jpg'}
              alt={'What is naturebase?'}
              width={1280}
              height={728}
              layout="responsive"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </section>

      <section id="who">
        <Wrapper className="py-10 md:py-20">
          <Hero title="Who is with us" subtitle="Collaborative effort" />

          <motion.div
            className="font-sans text-base text-gray-800 md:grid md:grid-cols-3 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <p className="md:col-start-1 md:col-end-3">
              Naturebase is a product of a collaborative effort between scientists and developers at
              The Nature Conservancy, with contributions by numerous organisations across the
              environmental sector and academia.{' '}
              <span className="md:font-semibold">These include:</span>
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-10 md:py-20 mx-4 md:mx-0">
            {PARTNERS.map((partner, idx) => (
              <motion.div
                key={idx}
                className="w-full flex items-center justify-center"
                {...IN_VIEW_PROPS}
              >
                <img src={partner.logo} alt={partner.name} />
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section id="what" className="bg-beige">
        <Wrapper className="py-10 md:py-20">
          <Hero title="What we want?" subtitle="Data accessibility" />

          <motion.div
            className="font-sans text-base text-gray-800 md:grid md:grid-cols-3 md:gap-10 space-y-4 md:space-y-0"
            {...IN_VIEW_PROPS}
          >
            <div className="md:col-start-1">
              <p>
                Nature can deliver up to one-third of the mitigation solutions that are required to
                stabilize the planet whilst also providing ecosystem and human well-being benefits
                such as improving water and air quality, public health and building communities that
                are resilient to extreme weather events such as flooding and drought.
              </p>
            </div>
            <div className="md:col-start-2">
              <p>
                Knowing where, why and how to deploy these interventions is critical to unlocking
                nature’s potential towards achieving these goals. Naturebase is designed to fill
                data accessibility gaps that often stifle action.
              </p>
            </div>
          </motion.div>
        </Wrapper>
      </section>

      <div className="h-[180px] md:h-[428px] overflow-hidden w-full">
        <motion.div ref={imageRefDown} style={{ y: yDown }} className="w-full" {...IN_VIEW_PROPS}>
          <Image
            src={'/images/about/02.jpg'}
            alt={'What we want'}
            width={1280}
            height={728}
            layout="responsive"
            objectFit="contain"
          />
        </motion.div>
      </div>
      <section id="faq" className="bg-beige md:pb-24 text-gray-800 py-10 md:py-20">
        <Wrapper>
          <Hero title="Faq" subtitle="Got a question?" />
          <Media lessThan="md">
            <motion.div
              className="space-y-4 font-sans text-base text-gray-800 pb-10"
              {...IN_VIEW_PROPS}
            >
              <p>
                Nature can deliver up to one-third of the mitigation solutions that are required to
                stabilize the planet whilst also providing ecosystem and human well-being benefits
                such as improving water and air quality, public health and building communities that
                are resilient to extreme weather events such as flooding and drought.
              </p>
              <p>
                Knowing where, why and how to deploy these interventions is critical to unlocking
                nature’s potential towards achieving these goals. Naturebase is designed to fill
                data accessibility gaps that often stifle action.
              </p>
            </motion.div>
          </Media>
          <div className="flex flex-col space-y-2">
            {FAQS.map((faq, idx) => (
              <Accordion type="single" collapsible key={idx}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="dangerouslySetInnerHTML"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default About;
