import React from 'react';

import Hero from 'containers/home/common/hero';
import StoryCard from 'containers/home/stories/list/story-card';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';

import { STORIES } from './constants';

const List = () => {
  return (
    <div className="bg-gray-900 md:py-28">
      <Wrapper>
        <div className="py-10 md:pb-28">
          <Hero className="text-white" subtitle="Want more examples?" />
        </div>
        <div className="xl:grid xl:grid-cols-12">
          <div className="flex flex-col space-y-4 xl:col-span-10 xl:col-start-2">
            {STORIES.map((s) => (
              <div key={s.id}>
                <StoryCard
                  articleUrl={s.articleUrl}
                  clipUrl={s.clipUrl}
                  country={s.country}
                  description={s.description}
                  image={s.image}
                  pathway={s.pathway}
                  title={s.title}
                  videoUrl={s.videoUrl}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full py-10">
          <Button
            className="rounded-full"
            theme="secondary"
            size="xs"
            onClick={() => console.info('Show more stories')}
          >
            Show more stories
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default List;
