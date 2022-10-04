import React from 'react';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <div className="bg-gray-900">
      <Wrapper>
        <div className="pb-20 pt-28">
          <Hero
            className="text-white"
            title="Features"
            subtitle="Set up strategies based on NCS based on real data."
          />
        </div>
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
