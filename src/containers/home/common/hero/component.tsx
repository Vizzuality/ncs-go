import React from 'react';

import cx from 'classnames';

import type { HeroProps } from './types';

export const Hero = ({ className, subtitle, title }: HeroProps) => (
  <div
    className={cx({
      'font-sans': true,
      [className]: !!className,
    })}
  >
    <div className="space-y-4 ">
      <h2 className="text-base font-semibold tracking-widest uppercase">{title}</h2>
      <h3 className="text-3xl max-w-[28ch]">{subtitle}</h3>
    </div>
  </div>
);

export default Hero;