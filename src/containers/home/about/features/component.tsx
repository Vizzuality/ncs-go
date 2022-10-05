import React from 'react';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <div className="bg-gray-900 md:pb-28">
      <div className="px-4 py-10 md:py-32 md:px-24">
        <Hero
          className="text-white"
          title="Features"
          subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
        />
      </div>
      <div className="md:grid md:grid-flow-col md:grid-rows-2 md:px-24">
        {FEATURES.map((f) => (
          <div key={f.key} className={`order-${f.key}`}>
            <FeatureCard description={f.description} icon={f.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
