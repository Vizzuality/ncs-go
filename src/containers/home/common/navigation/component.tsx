import React from 'react';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';

import type { NavigationProps } from './types';

export const Navigation = ({ links }: NavigationProps) => (
  <Wrapper>
    <div className="flex justify-end space-x-6 font-sans bg-gray-900">
      {links.map((l) => {
        return (
          <Button key={l.label} className="space-x-4" href={l.url} size="base" theme="secondary">
            <p>{l.label}</p>
            <Icon icon={ARROW_RIGHT_SVG} className="w-5 h-5" />
          </Button>
        );
      })}
    </div>
  </Wrapper>
);

export default Navigation;
