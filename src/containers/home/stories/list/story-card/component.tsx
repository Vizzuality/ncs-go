import React, { useRef } from 'react';

import cx from 'classnames';

import { motion, useInView } from 'framer-motion';

import LinkArrow from 'containers/home/common/link-arrow';
import { PATHWAY_COLOR } from 'containers/home/stories/constants';

import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';

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
  const x = inView ? 0 : 10;
  const backgroundPosition = inView ? '50% 0%' : '75% 0%';

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
          'md:w-3 h-2 md:h-auto w-full': true,
          [PATHWAY_COLOR[pathway]]: true,
        })}
      />

      <div className="overflow-hidden md:aspect-auto aspect-video md:w-6/12 xl:w-5/12 xl:h-full shrink-0">
        <motion.div
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          initial={false}
          animate={{ backgroundPosition }}
          transition={{
            delay: 0.2,
            bounce: 0,
            duration: 0.5,
          }}
          style={{ backgroundImage: `url(/images/home/stories/${image})` }}
        ></motion.div>
      </div>

      <div className="w-full px-6 py-10 space-y-6 md:px-10 md:py-6">
        <motion.div
          initial={false}
          animate={{ opacity, x }}
          transition={{ duration: 0.125, delay: 0.2, bounce: 0 }}
          className="flex space-x-2.5 opacity-0"
        >
          <Icon className="w-6 h-6 stroke-white" icon={LOCATION_SVG} />
          <p className="font-sans">{country}</p>
        </motion.div>

        <div className="space-y-2">
          <motion.h3
            initial={false}
            animate={{ opacity, x }}
            transition={{ duration: 0.125, delay: 0.3, bounce: 0 }}
            className="text-lg font-semibold opacity-0"
          >
            {title}
          </motion.h3>
          <motion.h4
            initial={false}
            animate={{ opacity, x }}
            transition={{ duration: 0.125, delay: 0.4, bounce: 0 }}
            className="font-sans text-base opacity-0"
          >
            {description}
          </motion.h4>
        </div>

        <motion.div
          className="flex flex-col items-end w-full pt-8 space-y-10 text-base font-semibold md:justify-end md:space-y-0 md:space-x-10 md:flex-row text-brand-700"
          initial={false}
          animate={{ opacity, x }}
          transition={{ duration: 0.125, delay: 0.5, bounce: 0 }}
        >
          <LinkArrow
            className={{ arrow: 'stroke-brand-700' }}
            label="Short clip (1 min)"
            fullAnimate
            url={clipUrl}
          />

          {(articleUrl || videoUrl) && (
            <LinkArrow
              className={{ arrow: 'stroke-brand-700' }}
              label={articleUrl ? 'Article' : 'Video'}
              fullAnimate
              url={articleUrl || videoUrl}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryCard;
