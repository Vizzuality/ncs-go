import React from 'react';

import Image from 'next/image';

import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';
import LOCATION_SVG from 'svgs/location.svg?sprite';

import { PATHWAY_COLOR } from './constants';
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
    <div className="flex w-full h-full text-base text-left text-white bg-gray-800">
      <div className={`w-2 bg-${PATHWAY_COLOR[pathway]}`} />
      <div className="w-2/6">
        <Image
          src={`/images/stories/${image}`}
          alt={title}
          width={250}
          height="100%"
          layout="responsive"
        />
      </div>
      <div className="w-4/6 px-10 py-6 space-y-6">
        <div className="flex space-x-2.5">
          <Icon className="w-6 h-6" icon={LOCATION_SVG} />
          <p className="font-sans">{country}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <h4 className="font-sans text-base">{description}</h4>
        </div>
        <div className="flex justify-end w-full space-x-10 text-base font-semibold text-brand">
          <a className="flex items-center space-x-1" href={clipUrl}>
            <p>Short clip (1 min)</p>
            <Icon className="w-6 h-6" icon={ARROW_RIGHT_SVG} />
          </a>

          {articleUrl && (
            <a className="flex items-center space-x-1" href={articleUrl}>
              <p>Article</p>
              <Icon className="w-6 h-6" icon={ARROW_RIGHT_SVG} />
            </a>
          )}

          {videoUrl && (
            <a className="flex items-center space-x-1" href={videoUrl}>
              <p>Video</p>
              <Icon className="w-6 h-6 text-brand" icon={ARROW_RIGHT_SVG} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
