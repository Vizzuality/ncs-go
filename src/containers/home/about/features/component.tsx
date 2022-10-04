import React from 'react';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <div className="bg-gray-900">
      <Wrapper>
        <div className="py-32">
          <Hero
            className="text-white"
            title="Features"
            subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
          />
        </div>
        <div className="grid grid-flow-col grid-rows-2">
          {FEATURES.map((f) => (
            <div key={f.key} className={`order-${f.key}`}>
              <FeatureCard description={f.description} num={f.key} />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Features;
