import React, { useEffect, useRef } from 'react';

import { useHomeStore } from 'store/home';
import { useUIStore } from 'store/ui';

import { useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import MobileMenuModal from 'containers/home/header/mobile-menu-modal';
import MenuButton from 'containers/home/header/mobile-menu-modal/menu-button';
import SubscribeModal from 'containers/home/header/subscribe-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { BREAKPOINTS } from 'styles/styles.config';

import { NAV_OPTIONS } from './constants';

const Header: React.FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xxs');

  const openMenu = useUIStore((state) => state.openMenu);
  const menu = useUIStore((state) => state.menu);
  const setSection = useHomeStore((state) => state.setSection);
  const header = useHomeStore((state) => state.header);

  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px' });

  useEffect(() => {
    if (inView) {
      setSection('header');
    }
  });

  return (
    <section
      ref={ref}
      className="sticky top-0 left-0 z-10 w-full h-24 font-sans text-center text-white bg-gray-900"
    >
      {minWidth < BREAKPOINTS.lg && header && (
        <>
          <Wrapper>
            <div className="absolute top-9 right-8">
              <MenuButton
                isOpen={menu}
                onClick={() => openMenu()}
                transition={{ ease: 'easeOut', duration: 0.3 }}
                width={40}
                height={40}
              />
            </div>
          </Wrapper>

          <MobileMenuModal />
        </>
      )}

      {minWidth >= BREAKPOINTS.lg && header && (
        <>
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
                onClick={() => openMenu()}
              >
                Subscribe
              </Button>
            </div>
          </Wrapper>

          <SubscribeModal />
        </>
      )}
    </section>
  );
};

export default Header;
