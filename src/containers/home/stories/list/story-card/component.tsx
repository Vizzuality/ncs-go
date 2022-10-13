import React from 'react';

import cx from 'classnames';

import { motion, AnimatePresence } from 'framer-motion';

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
  return (
    <motion.div
      className="flex flex-col w-full h-full text-base text-left text-white bg-gray-800 md:flex-row"
      {...IN_VIEW_PROPS}
    >
      <motion.div
        className={cx({
          'md:w-2 h-2 md:h-auto w-full': true,
          [PATHWAY_COLOR[pathway]]: true,
        })}
        {...IN_VIEW_PROPS}
      />

      <div
        style={{ backgroundImage: `url(/images/home/stories/${image})` }}
        className="overflow-hidden bg-center bg-no-repeat bg-cover md:aspect-auto aspect-video md:w-6/12 xl:w-5/12 xl:h-full"
      />

      <div className="w-full px-6 py-10 space-y-6 md:px-10 md:py-6">
        <motion.div className="flex space-x-2.5" {...IN_VIEW_PROPS}>
          <Icon className="w-6 h-6 stroke-white" icon={LOCATION_SVG} />
          <p className="font-sans">{country}</p>
        </motion.div>

        <div className="space-y-2">
          <motion.h3 className="text-lg font-semibold" {...IN_VIEW_PROPS}>
            {title}
          </motion.h3>
          <motion.h4 className="font-sans text-base" {...IN_VIEW_PROPS}>
            {description}
          </motion.h4>
        </div>

        <div className="flex flex-col items-end w-full space-y-10 text-base font-semibold md:justify-end md:space-y-0 md:flex-row text-brand-700">
          <AnimatePresence>
            <motion.a
              className="flex items-center space-x-1 md:mr-10"
              href={clipUrl}
              {...IN_VIEW_PROPS}
              whileHover={{
                width: '210px',
                justifyContent: 'space-between',
                marginRight: 0,
                paddingRight: '20px',
              }}
            >
              <p className="whitespace-nowrap">Short clip (1 min)</p>
              <Icon className="w-6 h-6 stroke-brand-700" icon={ARROW_RIGHT_SVG} />
            </motion.a>
          </AnimatePresence>

          {articleUrl && (
            <motion.a className="flex items-center space-x-1" href={articleUrl} {...IN_VIEW_PROPS}>
              <p>Article</p>
              <Icon className="w-6 h-6 stroke-brand-700" icon={ARROW_RIGHT_SVG} />
            </motion.a>
          )}

          {videoUrl && (
            <motion.a className="flex items-center space-x-1" href={videoUrl} {...IN_VIEW_PROPS}>
              <p>Video</p>
              <Icon className="w-6 h-6 stroke-brand-700" icon={ARROW_RIGHT_SVG} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard;
