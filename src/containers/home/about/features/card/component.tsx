import React from 'react';

import Icon from 'components/icon';

import type { FeatureCardProps } from './types';

export const FeatureCard = ({ description, icon }: FeatureCardProps) => (
  <div className="p-10 space-y-2 text-base text-left text-white bg-gray-900 md:space-y-6 md:text-lg md:h-80 md:pt-20 outline outline-1 outline-gray-800">
    <Icon className="w-12 h-12 md:w-16 md:h-16" icon={icon} />
    <h3 className="font-sans ">{description}</h3>
  </div>
);

export default FeatureCard;
