import React from 'react';

import type { FeatureCardProps } from './types';

export const FeatureCard = ({ description, num }: FeatureCardProps) => (
  <div className="p-10 pt-32 space-y-2 text-lg text-left text-white bg-gray-900 outline outline-1 outline-gray-800 h-80">
    <p className="font-semibold text-white">{num}.</p>
    <h3 className="font-sans ">{description}</h3>
  </div>
);

export default FeatureCard;
