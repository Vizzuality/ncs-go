/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Image from 'next/image';

import Hero from 'containers/hero';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';

import { FAQS, PARTNERS } from './constants';

const About = () => {
  return (
    <div id="naturbase" className="bg-white pt-12 md:pt-24 w-full">
      <section>
        <Wrapper className="lg:py-20 pt-20 pb-10">
          <Hero title="What is naturebase" subtitle="Open data platform" />

          <div className="font-sans flex flex-col space-y-4 md:space-y-0 text-base text-gray-800 md:grid md:grid-cols-3 md:gap-10">
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
          </div>
        </Wrapper>

        <Image
          src={'/images/about/01.png'}
          alt={'What is naturebase?'}
          width={1280}
          height={448}
          layout="responsive"
          objectFit="contain"
        />
      </section>

      <section id="who">
        <Wrapper className="py-10 md:py-20">
          <Hero title="Who is with us" subtitle="Collaborative effort" />

          <div className="font-sans text-base text-gray-800 md:grid md:grid-cols-3 md:gap-10">
            <p className="md:col-start-1 md:col-end-3">
              Naturebase is a product of a collaborative effort between scientists and developers at
              The Nature Conservancy, with contributions by numerous organisations across the
              environmental sector and academia.{' '}
              <span className="md:font-semibold">These include:</span>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-10 md:py-20 mx-4 md:mx-0">
            {PARTNERS.map((partner, idx) => (
              <div key={idx} className="w-full flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section id="what" className="bg-beige">
        <Wrapper className="py-10 md:py-20">
          <Hero title="What we want?" subtitle="Data accessibility" />

          <div className="font-sans text-base text-gray-800 md:grid md:grid-cols-3 md:gap-10 space-y-4 md:space-y-0">
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
          </div>
        </Wrapper>
      </section>

      <Image
        src={'/images/about/02.png'}
        alt={'What we want'}
        width={1074}
        height={410}
        layout="responsive"
        objectFit="contain"
      />
      <section id="faq" className="bg-beige md:pb-24 text-gray-800 py-10 md:py-20">
        <Wrapper>
          <Hero title="Faq" subtitle="Got a question?" />
          <Media lessThan="md">
            <div className="space-y-4 font-sans text-base text-gray-800 pb-10">
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
            </div>
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
