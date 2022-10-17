import React, { useRef } from 'react';

import cx from 'classnames';

import { motion, useInView } from 'framer-motion';

import LinkArrow from 'containers/home/common/link-arrow';
import { PATHWAY_COLOR } from 'containers/home/stories/constants';

import Icon from 'components/icon';
import { IN_VIEW_PROPS } from 'constants/motion';

import LOCATION_SVG from 'svgs/location.svg?sprite';

import type { SampleCardProps } from './types';

export const SampleCard = ({
  articleUrl,
  country,
  description,
  pathway,
  title,
  videoUrl,
}: SampleCardProps) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const opacity = inView ? 1 : 0;

  return (
    <motion.div
      ref={ref}
      className={cx({
        'lg:p-10 p-4 flex flex-col text-base text-gray-900 text-left h-full relative': true,
        [PATHWAY_COLOR[pathway]]: true,
      })}
      {...IN_VIEW_PROPS}
    >
      <motion.div
        className="flex space-x-2 xl:space-x-2.5 pb-4 xl:pb-10"
        animate={{ opacity }}
        transition={{ delay: 0.2 }}
      >
        <Icon className="w-6 h-6 stroke-gray-900" icon={LOCATION_SVG} />
        <p className="font-sans text-base">{country}</p>
      </motion.div>

      <motion.div
        className="space-y-2.5 font-sans"
        animate={{ opacity }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg md:text-xl">{title}</h3>
        <h4 className="text-base">{description}</h4>
      </motion.div>

      <motion.div
        className="flex justify-end pt-4 space-y-10 font-sans text-base lg:pt-20 lg:pb-1"
        animate={{ opacity }}
        transition={{ delay: 0.4 }}
      >
        {articleUrl && (
          <LinkArrow className={{ arrow: 'stroke-black' }} label="Read article" url={articleUrl} />
        )}

        {videoUrl && (
          <LinkArrow className={{ arrow: 'stroke-black' }} label="Watch video" url={videoUrl} />
        )}
      </motion.div>
    </motion.div>
  );
};

export default SampleCard;
