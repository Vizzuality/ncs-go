import React from 'react';

import Card from 'containers/home/stories/samples/sample-card';
import Wrapper from 'containers/wrapper';

const Samples = () => {
  return (
    <div>
      <Wrapper>
        <Card
          country="Tanzania"
          title="Carbon project on conservation site"
          description="Indigenous-led with key financial schemes to protect biodiversity and benefit local people."
          pathway="croplands"
          articleUrl="#"
        />
        <Card
          country="Dominican Republic"
          title="Coastal resilience"
          description="Mangroves and coral reefs restoration."
          pathway="wetlands"
          videoUrl="#"
        />
      </Wrapper>
    </div>
  );
};

export default Samples;
