import React from 'react';

import cx from 'classnames';

import type { WrapperProps } from './types';

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      className={cx({
        'max-w-8xl mx-auto px-20': true,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;
