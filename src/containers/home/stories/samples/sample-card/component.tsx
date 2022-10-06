import React from 'react';

import { PATHWAY_COLOR } from 'containers/home/stories/constants';

import Icon from 'components/icon';

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
  <div
    className={`xl:p-10 p-4 xl:max-w-fit flex flex-col text-base text-gray-900 text-left ${PATHWAY_COLOR[pathway]}`}
  >
    <div className="flex space-x-2 xl:space-x-2.5 pb-4 xl:pb-10">
      <Icon className="w-6 h-6 stroke-gray-900" icon={LOCATION_SVG} />
      <p className="font-sans text-base">{country}</p>
    </div>
    <div className="space-y-2.5 font-sans">
      <h3 className="text-xl min-w-[15ch]">{title}</h3>
      <h4 className="text-base min-w-[30ch]">{description}</h4>
    </div>
    <div className="flex justify-end space-y-10 font-sans text-base pt-14">
      {articleUrl && (
        <a className="flex items-center space-x-1" href={articleUrl}>
          <p>Read article</p>
          <Icon className="w-6 h-6 stroke-gray-900" icon={ARROW_RIGHT_SVG} />
        </a>
      )}

      {videoUrl && (
        <a className="flex items-center space-x-1" href={videoUrl}>
          <p>Watch video</p>
          <Icon className="w-6 h-6 stroke-gray-900" icon={ARROW_RIGHT_SVG} />
        </a>
      )}
    </div>
  </div>
);

export default SampleCard;
