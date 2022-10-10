import React, { useEffect, useRef, useState } from 'react';

import { useHomeStore } from 'store/home';

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
  const [openModal, setOpenModal] = useState(false);

  const ref = useRef();
  const inView = useInView(ref, { margin: '-100% 0px 0px' });
  const setSection = useHomeStore((state) => state.setSection);
  const header = useHomeStore((state) => state.header);

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
                isOpen={openModal}
                onClick={() => setOpenModal(!openModal)}
                transition={{ ease: 'easeOut', duration: 0.3 }}
                width={40}
                height={40}
              />
            </div>
          </Wrapper>

          <MobileMenuModal openModal={openModal} setOpenModal={setOpenModal} />
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
                onClick={() => setOpenModal(true)}
              >
                Subscribe
              </Button>
            </div>
          </Wrapper>

          <SubscribeModal setOpenModal={setOpenModal} openModal={openModal} />
        </>
      )}
    </section>
  );
};

export default Header;
