import React from 'react';

import cx from 'classnames';

import type { WrapperProps } from './types';

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      className={cx({
        'max-w-[1440px] mx-auto px-4 md:px-12 xl:px-24': true,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;
