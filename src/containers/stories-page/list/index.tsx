import React from 'react';

import { motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Media from 'containers/media';
import StoryCard from 'containers/stories-page/list/story-card';
import SampleComposition from 'containers/stories-page/samples/sample-composition';
import Card from 'containers/stories-page/samples/sample-composition/sample-card';
import SampleMedia from 'containers/stories-page/samples/sample-composition/sample-media';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import MultiSelect from 'components/ui/multiselect';
import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

import { STORIES } from './constants';

const List = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  const STORY_TYPE_OPTIONS = [
    { value: 'Factsheets', label: 'Factsheets' },
    { value: 'News', label: 'News' },
    { value: 'Stories from the ground', label: 'Stories from the ground' },
  ];

  const MEDIA_TYPE_OPTIONS = [
    { value: 'Article', label: 'Article' },
    { value: 'Clip', label: 'Clip' },
    { value: 'Video', label: 'Video' },
  ];

  const COUNTRY_OPTIONS = [
    { value: 'Dominican Republic', label: 'Dominican Republic' },
    { value: 'Ghana', label: 'Ghana' },
    { value: 'Panama', label: 'Panama' },
    { value: 'Tanzania', label: 'Tanzania' },
  ];

  return (
    <>
      <Media greaterThanOrEqual="md">
        <div className="bg-beige md:py-28">
          <Wrapper>
            <div className="xl:grid xl:grid-cols-12">
              <div className="flex flex-col space-y-4 xl:col-span-10 xl:col-start-2 mb-12">
                <p className="text-gray-800 text-base">Filter by:</p>
                <div className="flex space-x-3">
                  <div className="xl:w-1/3">
                    <MultiSelect
                      id="story_type"
                      placeholder="Story type"
                      options={STORY_TYPE_OPTIONS}
                      // values={filters.type}
                      // onSelect={(v) => setFilters({ ...filters, pathways: v })}
                    />
                  </div>
                  <div className="xl:w-1/3">
                    <MultiSelect
                      id="media_type"
                      placeholder="Media type"
                      options={MEDIA_TYPE_OPTIONS}
                      // values={filters.type}
                      // onSelect={(v) => setFilters({ ...filters, pathways: v })}
                    />
                  </div>
                  <div className="xl:w-1/3">
                    <MultiSelect
                      id="country"
                      placeholder="Country"
                      options={COUNTRY_OPTIONS}
                      // values={filters.type}
                      // onSelect={(v) => setFilters({ ...filters, pathways: v })}
                    />
                  </div>
                </div>
              </div>
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
                      category={s.category}
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
                      video={s.videoUrl}
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
