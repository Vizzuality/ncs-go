import React from 'react';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <>
      <Wrapper>
        <div className="py-10 md:py-32 lg:grid lg:grid-cols-3">
          <Hero
            className="col-span-2 col-start-1 text-beige"
            title="Features"
            subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
          />
        </div>

        <div className="grid -mx-4 md:grid-cols-2 xl:grid-cols-4 md:mx-0">
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
