import React from 'react';

import { motion } from 'framer-motion';

import Features from 'containers/home/about/features';
import AboutVideo from 'containers/home/about/video';
import ContactForm from 'containers/home/common/contact-form';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

const About = () => {
  return (
    <motion.div
      className="overflow-auto"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Wrapper>
        <div className="pt-32">
          <Hero
            className="text-gray-800"
            title="About Naturebase"
            subtitle="Naturebase is a new interactive platform that will bring together science-based data to mitigate climate change."
          />
        </div>
        <div className="grid grid-cols-3 gap-10 py-20 font-sans text-lg">
          <div className="col-start-2">
            <p>
              Naturebase will bring together science-based data on nature’s pathways to mitigate
              climate change across every region of the planet, combining them with the latest
              information on enabling policy frameworks, mitigation and adaptation plans, finance
              schemes and of course, loads of case studies.
            </p>
          </div>
          <div className="col-start-3 space-y-6">
            <p>
              Scientists, practitioners, policymakers and experts can find their way to enact
              nature’s full transformative potential.
            </p>
            <p>
              You will be able to navigate through the different regions and biomes, capturing real
              up-to-date information at a global, national and local level, and understand which of
              nature’s pathways offer the best potential for reducing emissions at the same time as
              benefiting local communities and biodiversity.
            </p>
          </div>
        </div>
      </Wrapper>
      <AboutVideo />
      <Features />
      <section className="bg-gray-900 py-28">
        <ContactForm />
      </section>
    </motion.div>
  );
};

export default About;
