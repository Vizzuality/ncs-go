import React, { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useHomeStore } from 'store/home';

import { motion } from 'framer-motion';

import { useModal } from 'hooks/modals';

import Media from 'containers/media';
import { NAV_OPTIONS } from 'containers/navbar/constants';
import MobileMenuModal from 'containers/navbar/mobile-menu-modal';
import MenuButton from 'containers/navbar/mobile-menu-modal/menu-button';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { IN_VIEW_PROPS } from 'constants/motion';

const Navbar: React.FC = () => {
  const headerRef = useRef(null);
  const [page, setPage] = useState(null);

  const { route } = useRouter();
  const { isOpen: isOpenMobile, open: openMobile, close: closeMobile } = useModal();

  useEffect(() => {
    const currPage = NAV_OPTIONS.find((navOption) => navOption.href.startsWith(route));
    if (!currPage) return;
    setPage(currPage);
  }, [route]);

  const section = useHomeStore((state) => state.section);
  const header = useHomeStore((state) => state.header);
  const setHeader = useHomeStore((state) => state.setHeader);

  useEffect(() => {
    if (route !== '/') {
      setHeader(true);
    }
    if (route === '/' && section !== 'intro') {
      setHeader(true);
    }
  }, [section, setHeader, route]);

  const scrollTo = useCallback((id, h) => {
    const DELAY = 501;

    setTimeout(() => {
      const getPageYOffset = () => {
        return (
          window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        );
      };
      const $scrollEl = document.getElementById(id);
      const $header = headerRef.current;

      const yOffset = h ? $header.getBoundingClientRect().height : 0;
      const y = $scrollEl.getBoundingClientRect().top + getPageYOffset() + -yOffset;

      window.scrollTo({
        top: y,
        behavior: h ? 'smooth' : 'auto',
      });
    }, DELAY);
  }, []);

  return (
    <motion.nav
      id="header"
      ref={headerRef}
      className="fixed top-0 left-0 z-20 w-full text-white bg-gray-900 border-b border-gray-800 text-base"
      initial={{ y: '-100%' }}
      animate={{
        y: header ? '0%' : '-100%',
      }}
      transition={{
        bounce: 0,
      }}
    >
      <Media greaterThanOrEqual="md">
        <Wrapper>
          <div className="flex items-center justify-between space-x-12 text-lg border-b border-gray-900">
            <button className="w-[180px] h-[40px] shrink-0" onClick={() => {}}>
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
                <Link key={opt.label} href={opt.href} passHref>
                  <button
                    className="relative flex justify-between m-0 cursor-pointer"
                    onClick={() => setPage(opt)}
                  >
                    <p className="hover:text-brand-700 py-5">{opt.label}</p>
                    {route !== '/' && opt === page && (
                      <motion.div
                        className="absolute left-0 right-0 h-[3px] bg-white bottom-0"
                        layoutId="underline"
                      />
                    )}
                  </button>
                </Link>
              ))}
            </ul>

            <Button
              className="rounded-[100px] whitespace-nowrap h-12"
              theme="primary"
              size="s"
              onClick={() => {}}
            >
              Launch Map
            </Button>
          </div>
        </Wrapper>
      </Media>
      <Media lessThan="md">
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
                  onClick={() => {
                    if (isOpenMobile) {
                      closeMobile();
                    } else {
                      openMobile();
                    }
                  }}
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
    </motion.nav>
  );
};

export default Navbar;
