import React, { useMemo } from 'react';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/arrow-right.svg?sprite';

import { NAVIGATION_LINKS } from './constants';
import type { NavigationProps } from './types';

export const Navigation = ({ section, onChange }: NavigationProps) => {
  const LINKS = useMemo(() => {
    return NAVIGATION_LINKS.filter((l) => l.id !== section);
  }, [section]);
  return (
    <Wrapper>
      <div className="flex justify-end space-x-6 font-sans bg-gray-900">
        {LINKS.map((l) => {
          return (
            <Button
              key={l.label}
              className="space-x-4"
              size="base"
              theme="secondary"
              onClick={() => onChange(l.id)}
            >
              <p>{l.label}</p>
              <Icon icon={ARROW_RIGHT_SVG} className="w-5 h-5" />
            </Button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Navigation;
