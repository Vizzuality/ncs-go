import React, { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { useHomeStore } from 'store/home';

import { motion } from 'framer-motion';

import { useModal } from 'hooks/modals';

import MobileMenuModal from 'containers/home/header/mobile-menu-modal';
import MenuButton from 'containers/home/header/mobile-menu-modal/menu-button';
import SubscribeModal from 'containers/home/header/subscribe-modal';
import Media from 'containers/media';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { IN_VIEW_PROPS } from 'constants/motion';

import { NAV_OPTIONS } from './constants';

const Header: React.FC = () => {
  const headerRef = useRef(null);

  const [selectedTab, setSelectedTab] = useState(NAV_OPTIONS[0]);

  const { isOpen: isOpenMobile, open: openMobile, close: closeMobile } = useModal();
  const { isOpen: isOpenDesktop, open: openDesktop, close: closeDesktop } = useModal();

  const section = useHomeStore((state) => state.section);
  const header = useHomeStore((state) => state.header);
  const setHeader = useHomeStore((state) => state.setHeader);

  useEffect(() => {
    setHeader(section !== 'intro');
  }, [section, setHeader]);

  useEffect(() => {
    const selectedSection = NAV_OPTIONS.find((opt) => opt.id === section);
    setSelectedTab(selectedSection);
  }, [section]);

  const scrollTo = useCallback((id, h) => {
    const $scrollEl = document.getElementById(id);
    const $header = headerRef.current;

    const yOffset = h ? $header.getBoundingClientRect().height : 0;
    const y = $scrollEl.getBoundingClientRect().top + window.pageYOffset + -yOffset;

    window.scrollTo({
      top: y,
      behavior: h ? 'smooth' : 'auto',
    });
  }, []);

  return (
    <motion.nav
      id="header"
      ref={headerRef}
      className="fixed top-0 left-0 z-10 w-full text-white bg-gray-900 border-b border-gray-800"
      initial={{ y: '-100%' }}
      animate={{
        y: header ? '0%' : '-100%',
      }}
      transition={{
        bounce: 0,
      }}
    >
      <Media lessThan="lg">
        <>
          <Wrapper>
            <div className="relative flex items-center justify-between h-20">
              <button
                className="w-[180px] h-[40px] shrink-0"
                onClick={() => {
                  scrollTo('intro', false);
                  closeMobile();
                }}
              >
                <Image
                  src="/images/logo-horizontal.svg"
                  alt="Logo"
                  width={180}
                  height={40}
                  layout="responsive"
                />
              </button>

              <motion.div className="absolute -translate-y-1/2 top-1/2 right-2" {...IN_VIEW_PROPS}>
                <MenuButton
                  isOpen={isOpenMobile}
                  onClick={() => (isOpenMobile ? closeMobile() : openMobile())}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                  width={40}
                  height={40}
                />
              </motion.div>
            </div>
          </Wrapper>

          <MobileMenuModal isOpen={isOpenMobile} close={closeMobile} onScrollTo={scrollTo} />
        </>
      </Media>

      <Media greaterThanOrEqual="lg">
        <>
          <Wrapper>
            <div className="flex items-center justify-between space-x-12 text-lg border-b border-gray-900">
              <button
                className="w-[180px] h-[40px] shrink-0"
                onClick={() => {
                  scrollTo('intro', false);
                }}
              >
                <Image
                  src="/images/logo-horizontal.svg"
                  alt="Logo"
                  width={180}
                  height={40}
                  layout="responsive"
                />
              </button>

              <ul className="flex items-center justify-end w-full p-0 m-0 space-x-12">
                {NAV_OPTIONS.map((opt) => (
                  <li
                    className="relative flex justify-between m-0 cursor-pointer"
                    key={opt.label}
                    onClick={() => {
                      scrollTo(opt.id, true);
                    }}
                  >
                    <p className="hover:text-brand-700 py-7">{opt.label}</p>

                    {opt === selectedTab && (
                      <motion.div
                        className="absolute left-0 right-0 h-[3px] bg-white bottom-0"
                        layoutId="underline"
                      />
                    )}
                  </li>
                ))}
              </ul>

              <Button
                className="rounded-[100px] h-16"
                theme="primary"
                size="s"
                onClick={() => openDesktop()}
              >
                Subscribe
              </Button>
            </div>
          </Wrapper>

          <SubscribeModal isOpen={isOpenDesktop} close={closeDesktop} />
        </>
      </Media>
    </motion.nav>
  );
};

export default Header;
