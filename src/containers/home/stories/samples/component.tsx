import React from 'react';

import useBreakpoint from 'use-breakpoint';

import ModalVideo from 'containers/home/stories/samples/modal-video';
import SampleComposition from 'containers/home/stories/samples/sample-composition';
import Card from 'containers/home/stories/samples/sample-composition/sample-card';
import Wrapper from 'containers/wrapper';

import { BREAKPOINTS } from 'styles/styles.config';

const Samples = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  return (
    <div
      className="w-full pt-4"
      style={{
        background: minWidth >= BREAKPOINTS.lg && 'linear-gradient(#FFFFFF 90%, #011426 10%',
      }}
    >
      <Wrapper>
        <div className="lg:space-y-44">
          <SampleComposition
            align="left"
            media={
              <div
                style={{ backgroundImage: `url(/images/home/stories/ghana.png)` }}
                className="overflow-hidden bg-center bg-no-repeat bg-cover aspect-video"
              />
            }
            card={
              <Card
                country="Tanzania"
                title="Carbon project on conservation site"
                description="Indigenous-led with key financial schemes to protect biodiversity and benefit local people."
                pathway="croplands"
                articleUrl="#"
              />
            }
          />
          <SampleComposition
            align="right"
            media={<ModalVideo />}
            card={
              <Card
                country="Dominican Republic"
                title="Coastal resilience"
                description="Mangroves and coral reefs restoration."
                pathway="wetlands"
                videoUrl="#"
              />
            }
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Samples;
