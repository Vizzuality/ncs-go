import React from 'react';

import FeatureCard from 'containers/home-page/features/card';

import { FEATURES } from './constants';

const Features = () => {
  return (
    <>
      <h3 className="font-sans text-base text-gray-800">Click on each feature to learn more.</h3>

      <div className="relative z-0 grid gap-px pt-8 md:pt-10 md:grid-cols-2 xl:grid-cols-3 md:mx-0">
        {FEATURES.map((f, i) => (
          <div key={f.key} className={`order-${f.key}`}>
            <FeatureCard
              index={i}
              title={f.title}
              icon={f.icon}
              description={f.description}
              tag={f.tag}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
