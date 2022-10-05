import React from 'react';

import Image from 'next/image';

import Icon from 'components/icon';

import LOCATION_SVG from 'svgs/location.svg?sprite';

import type { StoryCardProps } from './types';

export const StoryCard = ({ country, description, image, pathway, title }: StoryCardProps) => {
  const PATHWAY_COLOR = {
    forest: 'brand',
    wetlands: 'blue-400',
    croplands: 'orange-400',
    grasslands: 'brown-400',
    shrublands: 'brown-400',
    savana: 'brown-400',
  };

  return (
    <div className="flex h-full space-y-2 text-base text-left text-white bg-gray-800">
      <div className={`w-2 bg-${PATHWAY_COLOR[pathway]}`} />

      <Image src={`/images/stories/${image}`} alt={title} width={250} height={10} />
      <div className="p-10">
        <div className="flex space-x-2.5">
          <Icon className="w-6 h-6" icon={LOCATION_SVG} />
          <p className="font-sans">{country}</p>
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <h4 className="font-sans">{description}</h4>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
