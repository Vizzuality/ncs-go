import React from 'react';

import cx from 'classnames';

import useBreakpoint from 'use-breakpoint';

import { BREAKPOINTS } from 'styles/styles.config';

import { MediaProps } from './types';

const Media = ({ children, lessThan = null, greaterThanOrEqual = null }: MediaProps) => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  return (
    <div
      className={cx({
        hidden: minWidth >= BREAKPOINTS[lessThan] || minWidth < BREAKPOINTS[greaterThanOrEqual],
      })}
    >
      {children}
    </div>
  );
};

export default Media;
