import React from 'react';

import type { HeroProps } from './types';

export const Hero = ({ subtitle, title }: HeroProps) => (
  <div className="grid grid-cols-12 font-sans text-gray-800">
    <div className="col-span-7 space-y-4">
      <h2 className="text-base uppercase">{title}</h2>
      <h3 className="text-3xl">{subtitle}</h3>
    </div>
  </div>
);

export default Hero;
