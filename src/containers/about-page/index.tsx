import React from 'react';

import Image from 'next/image';

import Wrapper from 'containers/wrapper';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/accordion';

import { FAQS } from './constants';

const About = () => {
  return (
    <div id="about" className="bg-white pt-44 w-full">
      <Wrapper>
        <h2 className="text-gray-800 pb-6 font-sans text-xl">What is naturebase?</h2>

        <div className="pb-10 font-sans text-base text-gray-800 lg:pb-24 lg:grid lg:grid-cols-3 lg:gap-10">
          <div className="col-start-1 pb-4 lg:pb-0">
            <p>
              An open data platform designed to identify where, why and how to implement
              high-integrity nature-based projects with the highest carbon mitigation impact whilst
              protecting livelihoods and biodiversity.
            </p>
          </div>
          <div className="col-start-2 space-y-4 md:space-y-6">
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

      <section>
        <Wrapper>
          <h2 className="lg:grid lg:grid-cols-3 pt-20 text-gray-800 pb-6 font-sans text-xl">
            Who&apos;s with us?
          </h2>

          <div className="pb-10 font-sans text-base text-gray-800 lg:pb-20 lg:grid lg:grid-cols-3 lg:gap-10">
            <div className="col-start-1 col-end-2 pb-4 lg:pb-0">
              <p>
                Naturebase is a product of a collaborative effort between scientists and developers
                at The Nature Conservancy, with contributions by numerous organisations across the
                environmental sector and academia.{' '}
                <span className="font-semibold">These include:</span>
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="bg-beige pb-24">
        <Wrapper>
          <h2 className="text-gray-800 pb-6 font-sans text-xl pt-20  lg:grid lg:grid-cols-3">
            What we want?
          </h2>

          <div className="font-sans text-base text-gray-800 lg:grid lg:grid-cols-3 lg:gap-10">
            <div className="col-start-1 pb-4 lg:pb-0">
              <p>
                Nature can deliver up to one-third of the mitigation solutions that are required to
                stabilize the planet whilst also providing ecosystem and human well-being benefits
                such as improving water and air quality, public health and building communities that
                are resilient to extreme weather events such as flooding and drought.
              </p>
            </div>
            <div className="col-start-2 space-y-4 md:space-y-6">
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
      <section className="bg-beige pb-24 text-gray-800 pt-20">
        <Wrapper>
          <h3 className="text-xs pb-2 font-semibold">FAQ</h3>
          <h2 className="pb-10 font-sans text-xl lg:grid lg:grid-cols-3">Got a question?</h2>
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
