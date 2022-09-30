import React from 'react';

import Hero from 'containers/home/common/hero';
import Features from 'containers/home/overview/features';

const Overview = () => {
  return (
    <div>
      <div className="pt-28">
        <Hero
          className="text-gray-800"
          title="Naturebase overview"
          subtitle="Naturebase help you to achieve the CO2 emission reduction goals from France Agreement."
        />
      </div>
      <Features />
    </div>
  );
};

export default Overview;
