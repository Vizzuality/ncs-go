import React from 'react';

import useBreakpoint from 'use-breakpoint';

import { STORIES } from 'containers/home/stories/constants';
import SampleComposition from 'containers/home/stories/samples/sample-composition';
import Card from 'containers/home/stories/samples/sample-composition/sample-card';
import SampleMedia from 'containers/home/stories/samples/sample-composition/sample-media';
import Wrapper from 'containers/wrapper';

import { BREAKPOINTS } from 'styles/styles.config';

const Samples = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  return (
    <div
      className="w-full pb-10"
      style={{
        background: minWidth >= BREAKPOINTS.md && 'linear-gradient(#FFFEFA 84%, #1E2D3A 16%',
      }}
    >
      <Wrapper>
        <div className="space-y-5 md:space-y-10">
          {STORIES.map((story, i) => (
            <SampleComposition
              key={story.id}
              align={i % 2 === 0 ? 'left' : 'right'}
              media={<SampleMedia backgroundImage={`url(${story.image})`} video={story.video} />}
              card={
                <Card
                  country={story.country}
                  title={story.title}
                  description={story.description}
                  pathway={story.pathway}
                />
              }
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Samples;
