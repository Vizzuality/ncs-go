import React from 'react';

import cx from 'classnames';

import { motion } from 'framer-motion';

import { PATHWAY_COLOR } from 'containers/home/stories/constants';

import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';
import LOCATION_SVG from 'svgs/location.svg?sprite';

import type { SampleCardProps } from './types';

export const SampleCard = ({
  articleUrl,
  country,
  description,
  pathway,
  title,
  videoUrl,
}: SampleCardProps) => (
  <motion.div
    className={cx({
      'lg:p-10 p-4 flex flex-col text-base text-gray-900 text-left h-full relative': true,
      [PATHWAY_COLOR[pathway]]: true,
    })}
    {...IN_VIEW_PROPS}
  >
    <motion.div className="flex space-x-2 xl:space-x-2.5 pb-4 xl:pb-10" {...IN_VIEW_PROPS}>
      <Icon className="w-6 h-6 stroke-gray-900" icon={LOCATION_SVG} />
      <p className="font-sans text-base">{country}</p>
    </motion.div>

    <div className="space-y-2.5 font-sans">
      <motion.h3 className="text-xl" {...IN_VIEW_PROPS}>
        {title}
      </motion.h3>
      <motion.h4 className="text-base" {...IN_VIEW_PROPS}>
        {description}
      </motion.h4>
    </div>

    <div className="flex justify-end pt-4 pb-6 space-y-10 font-sans text-base lg:pt-20 lg:pb-1">
      {articleUrl && (
        <motion.a
          className="absolute flex items-center space-x-1"
          href={articleUrl}
          {...IN_VIEW_PROPS}
          whileHover={{
            width: '150px',
            justifyContent: 'space-between',
            right: '20px',
            transition: { ease: 'easeOut', duration: 0.5 },
          }}
        >
          <p className="whitespace-nowrap">Read article</p>
          <Icon className="w-6 h-6 stroke-gray-900" icon={ARROW_RIGHT_SVG} />
        </motion.a>
      )}

      {videoUrl && (
        <motion.a
          className="absolute flex items-center space-x-1 bottom-5"
          href={videoUrl}
          {...IN_VIEW_PROPS}
          whileHover={{
            width: '150px',
            justifyContent: 'space-between',
            right: '20px',
            transition: { ease: 'easeOut', duration: 0.5 },
          }}
        >
          <p>Watch video</p>
          <Icon className="w-6 h-6 stroke-gray-900" icon={ARROW_RIGHT_SVG} />
        </motion.a>
      )}
    </div>
  </motion.div>
);

export default SampleCard;
