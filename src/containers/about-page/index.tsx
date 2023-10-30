/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';

import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

import Hero from 'containers/hero';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import Icon from 'components/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';
import { IN_VIEW_PROPS } from 'constants/motion';
import { cn } from 'utils/cn';

import { FAQS, PARTNERS, USERS } from './constants';

const About = () => {
  const [user, setUser] = useState(USERS[0]);

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
    <div id="naturbase" className="bg-white pt-12 md:pt-20 w-full">
      <section>
        <div className="relative lg:after:content-[''] lg:after:absolute lg:after:z-0 lg:after:opacity-20 w-full after:-top-32 after:h-[130%] after:bottom-0 after:left-[60%] 2xl:after:left-[67%] 3xl:after:left-[72%] after:right-0 after:bg-no-repeat after:bg-cover lg:after:bg-[url('/images/home/background.svg')]">
          <Wrapper className="lg:py-20 pt-20 pb-10">
            <div className="max-w-xl">
              <Hero subtitle="Unlock Nature’s Potential with naturebase" />
            </div>

            <motion.div
              className="font-sans flex flex-col space-y-4 md:space-y-0 text-base text-gray-800 md:grid md:grid-cols-12"
              {...IN_VIEW_PROPS}
            >
              <p className="text-lg mb-20 md:col-span-7">
                An open data platform designed to{' '}
                <span className="text-blue-800">identify where, why and how</span> to implement
                high-integrity nature-based projects with the highest carbon mitigation impact
                whilst protecting livelihoods and biodiversity.
              </p>

              <h4 className="text-[24px] pb-7 md:col-span-7">How does it works?</h4>
              <p className="text-base md:col-span-7">
                Backed by peer-reviewed scientific data, the application shows users the emissions
                reduction potential for each pathway - everywhere on the planet. This is
                complemented with information on ecosystem and human benefits, enabling policies and
                case studies to support effective decision-making and high-integrity climate action.
              </p>
            </motion.div>
          </Wrapper>
        </div>
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
      <section>
        <Wrapper className="py-20">
          <Hero subtitle="Our Mission" />
          <motion.div
            className="font-sans text-base text-gray-800 md:grid md:grid-cols-12 md:gap-10"
            {...IN_VIEW_PROPS}
          >
            <p className="md:col-span-5">
              Nature can deliver up to one-third of the mitigation solutions that are required to
              stabilize the planet whilst also providing ecosystem and human well-being benefits -
              such as improving water and air quality, public health and building communities that
              are resilient to extreme weather events such as flooding and drought.
            </p>
            <p className="md:col-span-5">
              Knowing where, why and how to deploy these interventions is critical to unlocking
              nature’s potential towards achieving these goals. Naturebase is designed to fill data
              accessibility gaps that often stifle action.
            </p>
          </motion.div>
        </Wrapper>
      </section>

      <section className="bg-beige">
        <Wrapper className="py-20">
          <Hero subtitle="Who can use naturebase?" />
          <div className="flex border border-cream-700">
            <div className="w-1/3 flex flex-col divide-y divide-cream-700">
              {USERS.map((u, idx) => (
                <button
                  key={idx}
                  className={cn({
                    'p-8 text-left hover:bg-white': true,
                    'bg-white': user?.name === u.name,
                  })}
                  onMouseEnter={() => setUser(u)}
                >
                  {u.name}
                </button>
              ))}
            </div>

            <div className="w-2/3 flex flex-col bg-white ">
              {!!user && (
                <div className="space-y-8 p-12">
                  <Icon
                    className="w-12 h-12 md:w-16 md:h-16 group-hover:stroke-black stroke-gray-800"
                    icon={user.icon}
                  />
                  <p>{user.description}</p>
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </section>

      <section id="who">
        <Wrapper className="py-10 md:py-20">
          <Hero subtitle="Our Experts" />

          <motion.div className="font-sans text-base text-gray-800 md:w-1/2" {...IN_VIEW_PROPS}>
            <p className="">
              Naturebase is a product of a collaborative effort between scientists and developers at{' '}
              <a
                className="text-brand-700 hover:underline"
                href="https://www.nature.org/en-us"
                target="_blank"
                rel="noreferrer"
              >
                The Nature Conservancy
              </a>
              , with contributions by numerous organisations across the environmental sector and
              academia. These include:
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
          <Hero subtitle="Got a question?" />
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
