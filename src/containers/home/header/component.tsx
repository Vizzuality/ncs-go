import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useHomeStore } from 'store/home';

import { motion, useInView } from 'framer-motion';

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
  const [selectedTab, setSelectedTab] = useState(NAV_OPTIONS[0]);
  const { isOpen: isOpenMobile, open: openMobile, close: closeMobile } = useModal();
  const { isOpen: isOpenDesktop, open: openDesktop, close: closeDesktop } = useModal();

  const section = useHomeStore((state) => state.section);
  const setSection = useHomeStore((state) => state.setSection);

  const subSection = useHomeStore((state) => state.subSection);

  const header = useHomeStore((state) => state.header);
  const setHeader = useHomeStore((state) => state.setHeader);

  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px' });

  useEffect(() => {
    if (inView) {
      setSection('header');
    }
  }, [inView, setSection]);

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
    <section ref={ref} className="fixed top-0 left-0 z-10 w-full text-white bg-gray-900">
      <Media lessThan="lg">
        <>
          <Wrapper>
            <div className="relative h-20">
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

          <MobileMenuModal isOpen={isOpenMobile} close={closeMobile} />
        </>
      </Media>

      <Media greaterThanOrEqual="lg">
        <>
          <Wrapper>
            <motion.nav
              className="flex items-center justify-end space-x-12 text-lg border-b border-gray-900"
              initial={{ opacity: 0 }}
              animate={{
                opacity: header ? 1 : 0,
              }}
            >
              <ul className="flex items-center justify-end w-full p-0 m-0 space-x-7">
                {NAV_OPTIONS.map((opt) => (
                  <li
                    className="relative flex justify-between m-0 cursor-pointer"
                    key={opt.label}
                    onClick={() => {
                      scrollMenu(opt.id);
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
                theme="secondary"
                size="xs"
                onClick={() => openDesktop()}
              >
                Subscribe
              </Button>
            </motion.nav>
          </Wrapper>

          <SubscribeModal isOpen={isOpenDesktop} close={closeDesktop} />
        </>
      </Media>
    </section>
  );
};

export default Header;
