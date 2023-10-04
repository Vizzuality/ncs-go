import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { useModal } from 'hooks/modals';

import MenuButton from 'containers/home/header/mobile-menu-modal/menu-button';
import Media from 'containers/media';
import { NAV_OPTIONS } from 'containers/navbar/constants';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { IN_VIEW_PROPS } from 'constants/motion';

const Navbar = (): JSX.Element => {
  const [page, setPage] = useState(null);
  console.log({ page });

  const { isOpen: isOpenMobile, open: openMobile, close: closeMobile } = useModal();

  return (
    <nav
      id="header"
      className="fixed top-0 left-0 z-10 w-full text-white bg-gray-900 border-b border-gray-800 text-base"
    >
      <Media lessThan="lg">
        <>
          <Wrapper>
            <div className="relative flex items-center justify-between h-20">
              <button
                className="w-[180px] h-[40px] shrink-0"
                onClick={() => {
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

          {/* <MobileMenuModal isOpen={isOpenMobile} close={closeMobile} onScrollTo={scrollTo} /> */}
        </>
      </Media>

      <Media greaterThanOrEqual="lg">
        <>
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
                      onClick={() => setPage(opt.id)}
                    >
                      <p className="hover:text-brand-700 py-7">{opt.label}</p>

                      {opt.id === page && (
                        <motion.div
                          className="absolute left-0 right-0 h-[3px] bg-white bottom-0"
                          layoutId="underline-navbar"
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
                Launch app
              </Button>
            </div>
          </Wrapper>
        </>
      </Media>
    </nav>
  );
};

export default Navbar;
