import React, { useRef } from 'react';

import cx from 'classnames';

import { motion, useInView } from 'framer-motion';

import { PATHWAY_COLOR } from 'containers/news-page/constants';

import Icon from 'components/icon';
import LinkArrow from 'components/link-arrow';

import LOCATION_SVG from 'svgs/ui/location.svg?sprite';

import type { SampleCardProps } from './types';

export const SampleCard = ({
  title,
  description,
  country,
  pathway,
  article,
  video,
}: SampleCardProps) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const opacity = inView ? 1 : 0;

  return (
    <div
      ref={ref}
      className={cx({
        'ml-4 md:ml-0 lg:p-10 sm:p-6 p-4 flex flex-col text-base text-gray-900 text-left h-full relative':
          true,
        [PATHWAY_COLOR[pathway]]: true,
      })}
    >
      {country && (
        <motion.div
          className="flex space-x-2 xl:space-x-2.5 pb-4 xl:pb-10"
          animate={{ opacity }}
          transition={{ delay: 0.2 }}
        >
          <Icon className="w-6 h-6 stroke-gray-900" icon={LOCATION_SVG} />
          <p className="font-sans text-base">{country}</p>
        </motion.div>
      )}

      <motion.div
        className="space-y-2.5 font-sans pb-6 md:pb-0"
        animate={{ opacity }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2lg leading-8 lg:text-xl">{title}</h3>
        <h4 className="text-base">{description}</h4>
      </motion.div>

      {(article || video) && (
        <motion.div
          className="flex justify-end pt-4 space-y-10 font-sans text-base lg:pt-20 lg:pb-1"
          animate={{ opacity }}
          transition={{ delay: 0.4 }}
        >
          {article && (
            <LinkArrow className={{ arrow: 'stroke-black' }} label="Read article" url={article} />
          )}

          {video && (
            <LinkArrow className={{ arrow: 'stroke-black' }} label="Watch video" url={video} />
          )}
        </motion.div>
      )}
    </div>
  );
};

export default SampleCard;
