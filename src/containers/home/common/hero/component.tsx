import React from 'react';

import cx from 'classnames';

import Wrapper from 'containers/wrapper';

import type { HeroProps } from './types';

export const Hero = ({ className, subtitle, title }: HeroProps) => (
  <Wrapper>
    <div
      className={cx({
        'grid grid-cols-12 font-sans': true,
        [className]: !!className,
      })}
    >
      <div className="col-span-7 space-y-4">
        <h2 className="text-base font-semibold tracking-widest uppercase">{title}</h2>
        <h3 className="text-3xl">{subtitle}</h3>
      </div>
    </div>
  </Wrapper>
);

export default Hero;
