import React from 'react';

import Hero from 'containers/home/common/hero';
import StoryCard from 'containers/home/stories/cards/card';

import { STORIES } from './constants';

const StoryCards = () => {
  return (
    <div className="bg-gray-900 md:pb-28">
      <div className="px-4 py-10 md:py-32 md:px-24">
        <Hero
          className="text-white"
          title="StoryCards"
          subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
        />
      </div>
      <div className="flex flex-col space-y-4 md:px-24">
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
  );
};

export default StoryCards;
