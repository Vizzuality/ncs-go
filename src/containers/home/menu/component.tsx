import React, { useState } from 'react';

import useBreakpoint from 'use-breakpoint';

import Wrapper from 'containers/wrapper';

import Button from 'components/button';
import Modal from 'components/modal';
import { BREAKPOINTS } from 'styles/styles.config';

import { NAV_OPTIONS } from './constants';

const Menu: React.FC = () => {
  const { minWidth } = useBreakpoint(BREAKPOINTS, 'md');
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="fixed z-10 w-full font-sans text-white bg-gray-900">
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
              onClick={() => setOpenModal(true)}
            >
              Subscribe
            </Button>
          </div>
        </Wrapper>
      )}
      <Modal
        size="default"
        open={openModal}
        title=""
        onOpenChange={() => {
          setOpenModal(false);
        }}
      >
        Subscribe modal
      </Modal>
    </section>
  );
};

export default Menu;
