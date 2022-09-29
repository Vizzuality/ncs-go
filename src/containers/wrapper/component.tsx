import React from 'react';

import cx from 'classnames';

import type { WrapperProps } from './types';

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      className={cx({
        'max-w-7xl mx-auto px-5 lg:px-10': true,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;
