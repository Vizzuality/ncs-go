import React from 'react';

import cx from 'classnames';

import Icon from 'components/icon';

import ARROW_RIGHT_SVG from 'svgs/ui/arrow-right.svg?sprite';

import type { LinkArrowProps } from './types';

export const LinkArrow = ({ className, label, url }: LinkArrowProps) => (
  <a
    className="flex items-center space-x-1 group"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <p
      className={cx({
        'transition-transform  whitespace-nowrap': true,
        [className.label]: className.label,
      })}
    >
      {label}
    </p>
    <Icon
      className={cx({
        'w-6 h-6 transition-transform group-hover:translate-x-2 stroke-black': true,
        [className.arrow]: className.arrow,
      })}
      icon={ARROW_RIGHT_SVG}
    />
  </a>
);

export default LinkArrow;
