import React from 'react';

import useBreakpoint from 'use-breakpoint';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { BREAKPOINTS } from 'styles/styles.config';

import { NAV_OPTIONS } from './constants';

const Menu: React.FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');

  return (
    <section className="fixed z-20 w-full font-sans text-white bg-gray-900">
      {minWidth < BREAKPOINTS.lg && <Wrapper>Menu Mobile</Wrapper>}
      {minWidth >= BREAKPOINTS.lg && (
        <Wrapper>
          <div className="flex items-center justify-end h-20 space-x-12 text-lg lg:h-24">
            {NAV_OPTIONS.map((o) => (
              <a href={o.id} key={o.id}>
                {o.label}
              </a>
            ))}

            <Button
              className="rounded-[100px] h-16"
              theme="secondary"
              size="xs"
              onClick={() => console.info('Subscribe')}
            >
              Subscribe
            </Button>
          </div>
        </Wrapper>
      )}
    </section>
  );
};

export default Menu;
