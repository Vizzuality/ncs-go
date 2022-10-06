import React from 'react';

import Hero from 'containers/home/common/hero';
import StoryCard from 'containers/home/stories/list/story-card';

import Button from 'components/button';

import { STORIES } from './constants';

const List = () => {
  return (
    <div className="bg-gray-900 md:pb-28">
      <div className="px-4 py-10 md:pb-28 md:px-24">
        <Hero className="text-white" subtitle="Want more examples?" />
      </div>
      <div className="lg:grid lg:grid-cols-12">
        <div className="flex flex-col space-y-4 lg:px-24 lg:col-span-10 lg:col-start-2">
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
    </div>
  );
};

export default List;
