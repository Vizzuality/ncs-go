import React from 'react';

import useBreakpoint from 'use-breakpoint';

import FeatureCard from 'containers/home/about/features/card';
import Hero from 'containers/home/common/hero';
import Wrapper from 'containers/wrapper';

import { BREAKPOINTS } from 'styles/styles.config';

import { FEATURES } from './constants';

const Features = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  return (
    <>
      {minWidth < BREAKPOINTS.md && (
        <>
          <div className="py-10">
            <Wrapper>
              <Hero
                className="col-span-2 col-start-1 text-white"
                title="Features"
                subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
              />
            </Wrapper>
          </div>

          {FEATURES.map((f) => (
            <div key={f.key} className={`order-${f.key}`}>
              <FeatureCard description={f.description} icon={f.icon} />
            </div>
          ))}
        </>
      )}

      {minWidth >= BREAKPOINTS.md && (
        <Wrapper>
          <div className="py-32 lg:grid lg:grid-cols-3">
            <Hero
              className="col-span-2 col-start-1 text-white"
              title="Features"
              subtitle="A home base for all decision-makers interested in unlocking the power of nature to preserve our living planet."
            />
          </div>
          <div className="grid grid-flow-col grid-rows-4 xl:grid-rows-2">
            {FEATURES.map((f) => (
              <div key={f.key} className={`order-${f.key}`}>
                <FeatureCard description={f.description} icon={f.icon} />
              </div>
            ))}
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Features;
