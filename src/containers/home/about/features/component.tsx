import React from 'react';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <>
      <Wrapper>
        <div className="py-10 md:pt-32 lg:grid lg:grid-cols-3">
          <Hero
            className="col-span-2 col-start-1 text-beige"
            title="Features"
            subtitle="A starting point to unlock the power of nature for a livable future."
          />
        </div>

        <Media lessThan="lg">
          <p className="font-sans text-base text-white">Tap on each feature to learn more.</p>
        </Media>

        <Media greaterThanOrEqual="lg">
          <p className="font-sans text-lg text-white">Click on each feature to learn more.</p>
        </Media>

        <div className="relative z-0 grid gap-px pt-10 md:grid-cols-2 xl:grid-cols-4 md:mx-0">
          {FEATURES.map((f, i) => (
            <div key={f.key} className={`order-${f.key}`}>
              <FeatureCard index={i} title={f.title} icon={f.icon} description={f.description} />
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Features;
