import React from 'react';

import Icon from 'components/icon';

import LOCK_SVG from 'svgs/lock.svg?sprite';

import type { FeatureCardProps } from './types';

export const FeatureCard = ({ description, title }: FeatureCardProps) => (
  <div className="relative p-6 pt-32 space-y-2 font-sans text-left text-white bg-gray-900 border border-gray-800">
    <Icon icon={LOCK_SVG} className="absolute w-5 h-5 text-brand top-6 right-6" />
    <h2 className="text-xl font-semibold">{title}</h2>
    <h3 className="text-lg">{description}</h3>
  </div>
);

export default FeatureCard;
