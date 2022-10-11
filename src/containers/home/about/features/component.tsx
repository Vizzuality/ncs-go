import React from 'react';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <>
      <div className="py-10 md:py-32 lg:grid lg:grid-cols-3">
        <Hero
          className="col-span-2 col-start-1 text-white"
          title="Features"
          subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
        />
      </div>
      <div className="grid md:grid-flow-col md:grid-rows-4 xl:grid-rows-2">
        {FEATURES.map((f) => (
          <div key={f.key} className={`order-${f.key}`}>
            <FeatureCard description={f.description} icon={f.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
