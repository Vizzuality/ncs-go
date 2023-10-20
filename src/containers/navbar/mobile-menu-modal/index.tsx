import React from 'react';

import Link from 'next/link';

import { NAV_OPTIONS } from 'containers/navbar/constants';
import FullScreenModal from 'containers/navbar/full-screen-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';

const MobileMenuModal = ({ isOpen, close }) => {
  return (
    <FullScreenModal
      open={isOpen}
      theme="dark"
      closeBtn={false}
      onOpenChange={() => close()}
      zIndex="z-[9]"
    >
      <section className="z-10 w-full h-screen font-sans text-center text-white bg-gray-900">
        <Wrapper className="flex flex-col justify-between h-[60vh]">
          <div className="flex flex-col pt-12 pb-32 space-y-10">
            {NAV_OPTIONS.map((o) => (
              <Link key={o.id} href={o.href} className="text-lg text-white">
                {o.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Button theme="primary" size="xs" className="py-3 h-12 w-full">
              Launch map
            </Button>
          </div>
        </Wrapper>
      </section>
    </FullScreenModal>
  );
};

export default MobileMenuModal;