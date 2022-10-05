import React from 'react';

import Image from 'next/image';

import { PATHWAY_COLOR } from 'containers/home/stories/constants';

import Icon from 'components/icon';

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
    <div className="flex flex-col w-full h-full text-base text-left text-white bg-gray-800 md:flex-row">
      <div className={`md:w-2 h-2 md:h-auto w-full bg-${PATHWAY_COLOR[pathway]}`} />
      <div className="w-full h-full">
        <Image
          src={`/images/stories/${image}`}
          alt={title}
          width={200}
          height={50}
          layout="responsive"
        />
      </div>
      <div className="w-full px-6 py-10 space-y-6 md:px-10 md:py-6">
        <div className="flex space-x-2.5">
          <Icon className="w-6 h-6 stroke-white" icon={LOCATION_SVG} />
          <p className="font-sans">{country}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <h4 className="font-sans text-base">{description}</h4>
        </div>
        <div className="flex flex-col items-end w-full space-y-10 text-base font-semibold md:justify-end md:space-y-0 md:space-x-10 md:flex-row text-brand">
          <a className="flex items-center space-x-1" href={clipUrl}>
            <p>Short clip (1 min)</p>
            <Icon className="w-6 h-6 stroke-brand" icon={ARROW_RIGHT_SVG} />
          </a>

          {articleUrl && (
            <a className="flex items-center space-x-1" href={articleUrl}>
              <p>Article</p>
              <Icon className="w-6 h-6 stroke-brand" icon={ARROW_RIGHT_SVG} />
            </a>
          )}

          {videoUrl && (
            <a className="flex items-center space-x-1" href={videoUrl}>
              <p>Video</p>
              <Icon className="w-6 h-6 stroke-brand" icon={ARROW_RIGHT_SVG} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
