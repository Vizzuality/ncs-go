import React from 'react';

import ContactForm from 'containers/home/common/contact-form';
import Hero from 'containers/home/common/hero';
import Navigation from 'containers/home/common/navigation';
import Features from 'containers/home/overview/features';
import Wrapper from 'containers/wrapper';

import { NAVIGATION_LINKS } from './constants';

const Overview = () => {
  return (
    <div className="overflow-auto">
      <Wrapper>
        <div className="pt-20 pb-20">
          <Hero
            className="text-gray-800"
            title="Naturebase overview"
            subtitle="Naturebase help you to achieve the CO2 emission reduction goals from France Agreement."
          />
        </div>
      </Wrapper>
      <Features />
      <section className="bg-gray-900 py-28">
        <ContactForm />
      </section>
      <section className="bg-gray-900 pb-28">
        <Navigation links={NAVIGATION_LINKS} />
      </section>
    </div>
  );
};

export default Overview;
