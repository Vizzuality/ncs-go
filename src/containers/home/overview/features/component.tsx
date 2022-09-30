import React from 'react';

import Hero from 'containers/home/common/hero';
import FeatureCard from 'containers/home/overview/features/card';
import Wrapper from 'containers/wrapper';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <div className="bg-gray-900">
      <Hero
        className="text-white"
        title="Features"
        subtitle="Set up strategies based on NCS based on real data."
      />
      <Wrapper>
        <div className="grid grid-flow-col grid-rows-2">
          {FEATURES.map((f) => (
            <div key={f.key} className="col-span-2">
              <FeatureCard description={f.description} title={f.name} />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Features;
