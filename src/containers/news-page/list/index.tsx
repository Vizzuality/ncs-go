import React, { useEffect, useState } from 'react';

import { useUIStore } from 'store/ui';

import { motion } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import Media from 'containers/media';
import {
  CATEGORY_OPTIONS,
  MEDIA_OPTIONS,
  COUNTRY_OPTIONS,
} from 'containers/news-page/list/constants';
import StoryCard from 'containers/news-page/list/story-card';
import SampleComposition from 'containers/news-page/samples/sample-composition';
import Card from 'containers/news-page/samples/sample-composition/sample-card';
import SampleMedia from 'containers/news-page/samples/sample-composition/sample-media';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import MultiSelect from 'components/ui/multiselect';
import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';
import { MediaType, Story } from 'types';

import { STORIES } from './constants';

const List = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');
  const filters = useUIStore((state) => state.filters);
  const setFilters = useUIStore((state) => state.setFilters);

  const [dataFiltered, setDataFiltered] = useState<Story[]>(STORIES);
  const [displayedStories, setDisplayedStories] = useState<Story[]>(STORIES.slice(0, 3));

  useEffect(() => {
    const activedFilters = Object.values(filters).some((f) => f.length > 0);
    const dataFinalFiltered = () => {
      const data = STORIES.filter((story) => {
        if (filters.categories.length > 0) {
          if (!filters.categories.includes(story.category)) return false;
        }
        if (filters.media.length > 0) {
          if (!filters.media.some((m: MediaType) => story.media.includes(m))) return false;
        }
        if (filters.countries.length > 0) {
          if (!filters.countries.includes(story.country)) return false;
        }

        return true;
      });
      return data;
    };

    if (activedFilters) return setDataFiltered(dataFinalFiltered());

    if (!activedFilters) return setDataFiltered(STORIES);
  }, [filters]);

  return (
    <>
      <Media greaterThanOrEqual="md">
        <div className="bg-beige md:pb-28 md:pt-72">
          <Wrapper>
            <div className="xl:grid xl:grid-cols-12">
              <motion.div
                className="flex flex-col space-y-4 xl:col-span-10 xl:col-start-2 my-12"
                {...IN_VIEW_PROPS}
              >
                <p className="text-gray-800 text-base">Filter by:</p>
                <div className="flex space-x-3">
                  <div className="w-1/3">
                    <MultiSelect
                      id="categories"
                      placeholder="Story type"
                      options={CATEGORY_OPTIONS}
                      values={filters.categories}
                      onSelect={(v) => setFilters({ ...filters, categories: v })}
                    />
                  </div>
                  <div className="w-1/3">
                    <MultiSelect
                      id="media"
                      placeholder="Media type"
                      options={MEDIA_OPTIONS}
                      values={filters.media}
                      onSelect={(v) => setFilters({ ...filters, media: v })}
                    />
                  </div>
                  <div className="w-1/3">
                    <MultiSelect
                      id="countries"
                      placeholder="Country"
                      options={COUNTRY_OPTIONS}
                      values={filters.countries}
                      onSelect={(v) => setFilters({ ...filters, countries: v })}
                    />
                  </div>
                </div>
              </motion.div>
              <div className="flex flex-col space-y-4 xl:col-span-10 xl:col-start-2">
                {dataFiltered.map((s) => (
                  <div key={s.id}>
                    <StoryCard
                      article={s.article}
                      country={s.country}
                      description={s.description}
                      image={s.image}
                      pathway={s.pathway}
                      title={s.title}
                      video={s.video}
                      category={s.category}
                    />
                  </div>
                ))}
              </div>
            </div>
            {!dataFiltered.length && (
              <div className="h-24 items-center w-full text-gray-800 font-sans flex justify-center">
                <p>There are not results</p>
              </div>
            )}

            {/* <motion.div className="flex justify-center w-full py-10" {...IN_VIEW_PROPS}>
              <Button
                className="rounded-full border-gray-800 text-gray-800 hover:text-cream-400"
                theme="secondary"
                size="xs"
                onClick={() => console.info('Show more stories')}
              >
                Show more stories
              </Button>
            </motion.div> */}
          </Wrapper>
        </div>
      </Media>

      <Media lessThan="md">
        <div className="w-full pt-4">
          <Wrapper>
            <div className="space-y-4">
              {displayedStories.map((s) => (
                <SampleComposition
                  key={s.id}
                  align="right"
                  media={
                    <SampleMedia
                      backgroundImage={`url(/images/news/stories/${s.image})`}
                      video={s.video}
                    />
                  }
                  card={
                    <Card
                      country={s.country}
                      title={s.title}
                      description={s.description}
                      pathway={s.pathway}
                      article={s.article}
                      video={s.video}
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
                onClick={() => setDisplayedStories(STORIES)}
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
