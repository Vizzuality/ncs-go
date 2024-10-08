import React, { useRef } from 'react';

import cx from 'classnames';

import { motion, useInView } from 'framer-motion';

import { PATHWAY_COLOR } from 'containers/news-page/constants';

import Icon from 'components/icon';
import LinkArrow from 'components/link-arrow';
import { IN_VIEW_PROPS } from 'constants/motion';

import LOCATION_SVG from 'svgs/ui/location.svg?sprite';

export const StoryCard = ({ article, country, description, image, pathway, title, video }) => {
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
      className="relative flex flex-col w-full h-full text-base text-left text-gray-800 bg-cream-400 md:flex-row"
      {...IN_VIEW_PROPS}
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      <div
        className={cx({
          'md:w-4 h-2 md:h-auto w-full': true,
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
          style={{ backgroundImage: `url(/images/news/stories/${image})` }}
        ></motion.div>
      </div>

      <div className="w-full px-6 py-10 space-y-6 md:px-10 md:py-6">
        <motion.div
          initial={false}
          animate={{ opacity, x }}
          transition={{ duration: 0.125, delay: 0.2, bounce: 0 }}
          className="opacity-0 flex justify-between w-full"
        >
          {country && (
            <div className="flex space-x-2.5">
              <Icon className="w-6 h-6 stroke-gray-800" icon={LOCATION_SVG} />
              <p className="font-sans">{country}</p>
            </div>
          )}
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
          className="flex flex-col items-end w-full space-y-10 text-base font-semibold md:justify-end md:space-y-0 md:space-x-10 md:flex-row text-brand-700"
          initial={false}
          animate={{ opacity, x }}
          transition={{ duration: 0.125, delay: 0.5, bounce: 0 }}
        >
          {(article || video) && (
            <LinkArrow
              className={{ arrow: 'stroke-brand-700' }}
              label={article ? 'Article' : 'Video'}
              url={article || video}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryCard;
