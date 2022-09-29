import React from 'react';

import Hero from 'containers/hero';
import Wrapper from 'containers/wrapper';

const Overview = () => {
  return (
    <div className="h-screen">
      <Wrapper>
        <div className="pt-28">
          <Hero
            title="Naturebase overview"
            subtitle="Naturebase help you to achieve the CO2 emission reduction goals from France Agreement."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Overview;
