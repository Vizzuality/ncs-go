import React from 'react';

import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

const Stories = () => {
  return (
    <div className="bg-white" id="#stories">
      <Wrapper>
        <div className="pb-20 pt-28">
          <Hero
            className="text-gray-800"
            title="Inspiring stories"
            subtitle="See how NCS projects on the ground have a positive impact on climate, biodiversity and people."
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Stories;
