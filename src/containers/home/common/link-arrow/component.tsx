import React from 'react';

import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';

import type { LinkArrowProps } from './types';

export const LinkArrow = ({ label, url }: LinkArrowProps) => (
  <a className="flex items-center space-x-1 group" href={url}>
    <p className="transition-transform group-hover:-translate-x-2 whitespace-nowrap">{label}</p>
    <Icon
      className="w-6 h-6 transition-transform group-hover:translate-x-2 stroke-brand-700"
      icon={ARROW_RIGHT_SVG}
    />
  </a>
);

export default LinkArrow;
