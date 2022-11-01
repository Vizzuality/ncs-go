import React from 'react';

import { motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Hero from 'containers/home/common/hero';
import StoryCard from 'containers/home/stories/list/story-card';
import SampleComposition from 'containers/home/stories/samples/sample-composition';
import Card from 'containers/home/stories/samples/sample-composition/sample-card';
import SampleMedia from 'containers/home/stories/samples/sample-composition/sample-media';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

import { STORIES } from './constants';

const List = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  return (
    <>
      <Media greaterThanOrEqual="md">
        <div className="bg-gray-900 md:py-28">
          <Wrapper>
            <div className="py-10 md:pb-28">
              <Hero className="text-beige" subtitle="Want more examples?" />
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

            <motion.div className="flex justify-center w-full py-10" {...IN_VIEW_PROPS}>
              <Button
                className="rounded-full"
                theme="secondary"
                size="xs"
                onClick={() => console.info('Show more stories')}
              >
                Show more stories
              </Button>
            </motion.div>
          </Wrapper>
        </div>
      </Media>

      <Media lessThan="md">
        <div className="w-full pt-4">
          <Wrapper>
            <div className="lg:space-y-44">
              {STORIES.map((s) => (
                <SampleComposition
                  key={s.id}
                  align="right"
                  media={
                    <SampleMedia
                      backgroundImage={`url(/images/home/stories/${s.image})`}
                      video={!!s.videoUrl}
                    />
                  }
                  card={
                    <Card
                      country={s.country}
                      title={s.title}
                      description={s.description}
                      pathway={s.pathway}
                      articleUrl={s.articleUrl}
                      videoUrl={s.videoUrl}
                    />
                  }
                />
              ))}
            </div>

            <motion.div className="flex justify-center w-full py-10" {...IN_VIEW_PROPS}>
              <Button
                className="w-full rounded-full"
                theme={minWidth < BREAKPOINTS.md ? 'tertiary' : 'secondary'}
                size="s"
                onClick={() => console.info('Show more stories')}
              >
                Show more stories
              </Button>
            </motion.div>
          </Wrapper>
        </div>
      </Media>
    </>
  );
};

export default List;
