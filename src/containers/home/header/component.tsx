import React, { useCallback, useEffect, useRef, useState } from 'react';

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

  const [selectedTab, setSelectedTab] = useState(NAV_OPTIONS[0]);

  const menu = useUIStore((state) => state.menu);
  const openMenu = useUIStore((state) => state.openMenu);
  const closeMenu = useUIStore((state) => state.closeMenu);

  const section = useHomeStore((state) => state.section);
  const setSection = useHomeStore((state) => state.setSection);

  const subSection = useHomeStore((state) => state.subSection);

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
    setHeader(section !== 'intro' && subSection === 1);
  }, [section, setHeader, subSection]);

  useEffect(() => {
    const selectedSection = NAV_OPTIONS.find((opt) => opt.id === section);
    setSelectedTab(selectedSection);
  }, [section]);

  const scrollMenu = useCallback((id) => {
    const $scrollEl = document.getElementById(id);
    $scrollEl.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return (
    <section ref={ref} className="sticky top-0 left-0 z-10 w-full text-white bg-gray-900">
      {minWidth < BREAKPOINTS.lg && header && (
        <>
          <Wrapper>
            <div className="relative h-20">
              <motion.div className="absolute -translate-y-1/2 top-1/2 right-2" {...IN_VIEW_PROPS}>
                <MenuButton
                  isOpen={menu}
                  onClick={() => (menu ? closeMenu() : openMenu())}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                  width={40}
                  height={40}
                />
              </motion.div>
            </div>
          </Wrapper>

          <MobileMenuModal />
        </>
      )}

      {minWidth >= BREAKPOINTS.lg && header && (
        <>
          <Wrapper>
            <motion.nav
              className="flex items-center justify-end h-20 space-x-12 text-lg lg:h-24"
              {...IN_VIEW_PROPS}
            >
              <ul className="flex items-center justify-end w-full p-0 m-0 space-x-7">
                {NAV_OPTIONS.map((opt) => (
                  <li
                    className="relative flex justify-between m-0 cursor-pointer"
                    key={opt.label}
                    onClick={() => {
                      setSelectedTab(opt);
                      scrollMenu(opt.id);
                    }}
                  >
                    <p className="hover:text-brand-700 py-7">{opt.label}</p>
                    {opt === selectedTab ? (
                      <motion.div
                        className="absolute left-0 right-0 h-[2px] bg-white top-full"
                        layoutId="underline"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>

              <Button
                className="rounded-[100px] h-16"
                theme="secondary"
                size="xs"
                onClick={() => openMenu()}
              >
                Subscribe
              </Button>
            </motion.nav>
          </Wrapper>

          <SubscribeModal />
        </>
      )}
    </section>
  );
};

export default Header;
