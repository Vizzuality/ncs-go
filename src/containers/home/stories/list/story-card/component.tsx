import React, { useRef } from 'react';

import cx from 'classnames';

import { motion, useInView } from 'framer-motion';

import { PATHWAY_COLOR } from 'containers/home/stories/constants';

import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';
import LOCATION_SVG from 'svgs/location.svg?sprite';

import type { StoryCardProps } from './types';

export const StoryCard = ({
  articleUrl,
  clipUrl,
  country,
  description,
  image,
  pathway,
  title,
  videoUrl,
}: StoryCardProps) => {
  const ref = useRef();

  const inView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const opacity = inView ? 1 : 0;
  const x = inView ? 0 : 20;

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col w-full h-full text-base text-left text-white bg-gray-800 md:flex-row"
      {...IN_VIEW_PROPS}
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <div
        className={cx({
          'md:w-2 h-2 md:h-auto w-full': true,
          [PATHWAY_COLOR[pathway]]: true,
        })}
      />

      <div
        style={{ backgroundImage: `url(/images/home/stories/${image})` }}
        className="overflow-hidden bg-center bg-no-repeat bg-cover md:aspect-auto aspect-video md:w-6/12 xl:w-5/12 xl:h-full"
      />

      <div className="w-full px-6 py-10 space-y-6 md:px-10 md:py-6">
        <motion.div
          animate={{ opacity, x }}
          transition={{ delay: 0.2, bounce: 0 }}
          className="flex space-x-2.5 opacity-0"
        >
          <Icon className="w-6 h-6 stroke-white" icon={LOCATION_SVG} />
          <p className="font-sans">{country}</p>
        </motion.div>

        <div className="space-y-2">
          <motion.h3
            animate={{ opacity, x }}
            transition={{ delay: 0.3, bounce: 0 }}
            className="text-lg font-semibold opacity-0"
          >
            {title}
          </motion.h3>
          <motion.h4
            animate={{ opacity, x }}
            transition={{ delay: 0.4, bounce: 0 }}
            className="font-sans text-base opacity-0"
          >
            {description}
          </motion.h4>
        </div>

        <motion.div
          className="flex flex-col items-end w-full pt-8 space-y-10 text-base font-semibold md:justify-end md:space-y-0 md:space-x-10 md:flex-row text-brand-700"
          animate={{ opacity, x }}
          transition={{ delay: 0.5, bounce: 0 }}
        >
          <a className="flex items-center space-x-1 group" href={clipUrl}>
            <p className="transition-transform group-hover:-translate-x-2 whitespace-nowrap">
              Short clip (1 min)
            </p>
            <Icon
              className="w-6 h-6 transition-transform group-hover:translate-x-2 stroke-brand-700"
              icon={ARROW_RIGHT_SVG}
            />
          </a>

          {(articleUrl || videoUrl) && (
            <a className="flex items-center space-x-1 group" href={articleUrl || videoUrl}>
              {articleUrl && (
                <p className="transition-transform group-hover:-translate-x-2 whitespace-nowrap">
                  Article
                </p>
              )}
              {videoUrl && (
                <p className="transition-transform group-hover:-translate-x-2 whitespace-nowrap">
                  Video
                </p>
              )}
              <Icon
                className="w-6 h-6 transition-transform group-hover:translate-x-2 stroke-brand-700"
                icon={ARROW_RIGHT_SVG}
              />
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryCard;
