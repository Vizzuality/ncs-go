import React, { useCallback, useEffect, useRef, useState } from 'react';

import cx from 'classnames';

import { useHomeStore } from 'store/home';
import { useUIStore } from 'store/ui';

import { motion, useInView } from 'framer-motion';
import useBreakpoint from 'use-breakpoint';

import MobileMenuModal from 'containers/home/header/mobile-menu-modal';
import MenuButton from 'containers/home/header/mobile-menu-modal/menu-button';
import SubscribeModal from 'containers/home/header/subscribe-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { IN_VIEW_PROPS } from 'constants/motion';
import { BREAKPOINTS } from 'styles/styles.config';

import { NAV_OPTIONS } from './constants';

const Header: React.FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'xxs');

  const [activeMenuOption, setActiveMenuOption] = useState(null);

  const openMenu = useUIStore((state) => state.openMenu);
  const menu = useUIStore((state) => state.menu);
  const section = useHomeStore((state) => state.section);
  const setSection = useHomeStore((state) => state.setSection);
  const header = useHomeStore((state) => state.header);
  const setHeader = useHomeStore((state) => state.setHeader);

  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px', once: true });

  useEffect(() => {
    if (inView) {
      setSection('header');
    }
  });

  useEffect(() => {
    setHeader(section !== 'intro');
  }, [section, setHeader]);

  const scrollMenu = useCallback((id) => {
    const $scrollEl = document.getElementById(id);
    $scrollEl.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return (
    <section
      ref={ref}
      className="sticky top-0 left-0 z-10 w-full h-24 font-sans text-center text-white bg-gray-900"
    >
      {minWidth < BREAKPOINTS.lg && header && (
        <>
          <Wrapper>
            <motion.div className="absolute top-9 right-8" {...IN_VIEW_PROPS}>
              <MenuButton
                isOpen={menu}
                onClick={() => openMenu()}
                transition={{ ease: 'easeOut', duration: 0.3 }}
                width={40}
                height={40}
              />
            </motion.div>
          </Wrapper>

          <MobileMenuModal />
        </>
      )}

      {minWidth >= BREAKPOINTS.lg && header && (
        <>
          <Wrapper>
            <motion.div
              className="flex items-center justify-end h-20 space-x-12 text-lg lg:h-24"
              {...IN_VIEW_PROPS}
            >
              {NAV_OPTIONS.map((o) => (
                <button
                  key={o.id}
                  onClick={() => {
                    scrollMenu(o.id);
                    setActiveMenuOption(o.id);
                  }}
                >
                  <p
                    className={cx({
                      'hover:text-brand-700 py-7': true,
                      'border-b-2 border-white': activeMenuOption === o.id,
                    })}
                  >
                    {o.label}
                  </p>
                </button>
              ))}

              <Button
                className="rounded-[100px] h-16"
                theme="secondary"
                size="xs"
                onClick={() => openMenu()}
              >
                Subscribe
              </Button>
            </motion.div>
          </Wrapper>

          <SubscribeModal />
        </>
      )}
    </section>
  );
};

export default Header;
