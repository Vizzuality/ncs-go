import React from 'react';

import { STORIES } from 'containers/news-page/constants';
import SampleComposition from 'containers/news-page/samples/sample-composition';
import Card from 'containers/news-page/samples/sample-composition/sample-card';
import SampleMedia from 'containers/news-page/samples/sample-composition/sample-media';
import Wrapper from 'containers/wrapper';

const Samples = () => {
  return (
    <div className="w-full pb-10">
      <Wrapper>
        <div className="space-y-5 md:space-y-10">
          {STORIES.map((story, i) => (
            <SampleComposition
              key={story.id}
              align={i % 2 === 0 ? 'left' : 'right'}
              media={<SampleMedia backgroundImage={`url(${story.image})`} />}
              card={
                <Card
                  article={story.article}
                  country={story.country}
                  title={story.title}
                  description={story.description}
                  pathway={story.pathway}
                  video={story.video}
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
