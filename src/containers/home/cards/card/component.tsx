import React from 'react';

import Icon from 'components/icon';

import ARROW_ROTATED_SVG from 'svgs/arrow-rotated.svg?sprite';

import type { CardProps } from './types';

export const Card = ({ description, title, onClick }: CardProps) => (
  <button
    className="relative p-6 pt-32 space-y-2 font-sans text-left text-white bg-gray-900 border border-gray-800"
    onClick={onClick}
  >
    <Icon icon={ARROW_ROTATED_SVG} className="absolute w-5 h-5 text-brand top-6 right-6" />
    <h2 className="text-xl font-semibold">{title}</h2>
    <h3 className="text-lg">{description}</h3>
  </button>
);

export default Card;
