import React, { ReactNode } from 'react';

import cx from 'classnames';

const Wrapper = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cx({
        'max-w-[1440px] mx-auto px-4 md:px-12 xl:px-24': true,
        [className]: !!className,
      })}
    >
      {children}
    </div>
  );
};

export default Wrapper;
