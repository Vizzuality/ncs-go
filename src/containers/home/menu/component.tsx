import React, { useState } from 'react';

import useBreakpoint from 'use-breakpoint';

import MobileMenuModal from 'containers/home/menu/mobile-menu-modal';
import MenuButton from 'containers/home/menu/mobile-menu-modal/menu-button';
import SubscribeModal from 'containers/home/menu/subscribe-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import { BREAKPOINTS } from 'styles/styles.config';

import { NAV_OPTIONS } from './constants';

const Menu: React.FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
      {minWidth < BREAKPOINTS.lg && (
        <>
          <section className="fixed z-10 w-full h-24 font-sans text-center text-white bg-gray-900">
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
          </section>

          <MobileMenuModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
      )}
      {minWidth >= BREAKPOINTS.lg && (
        <>
          <section className="fixed z-10 w-full font-sans text-white bg-gray-900">
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
          </section>
          <SubscribeModal setOpenModal={setOpenModal} openModal={openModal} />
        </>
      )}
    </div>
  );
};

export default Menu;
