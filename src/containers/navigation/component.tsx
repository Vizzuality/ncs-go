import React from 'react';

import Button from 'components/button';
import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';

import type { NavigationProps } from './types';

export const Navigation = ({ linkLeft, linkRight }: NavigationProps) => (
  <div className="grid grid-cols-12 font-sans text-gray-800">
    <div className="flex col-span-6 col-start-8 gap-6">
      <Button className="space-x-4" href={linkLeft.url} size="base" theme="secondary">
        <p>{linkLeft.label}</p>
        <Icon icon={ARROW_RIGHT_SVG} className="w-5 h-5" />
      </Button>
      <Button className="space-x-4" href={linkRight.url} size="base" theme="secondary">
        <p>{linkRight.label}</p>
        <Icon icon={ARROW_RIGHT_SVG} className="w-5 h-5" />
      </Button>
    </div>
  </div>
);

export default Navigation;
