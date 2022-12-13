import React from 'react';

import { usePlausible } from 'next-plausible';

import { NAV_OPTIONS } from 'containers/home/header/constants';
import FullScreenModal from 'containers/home/header/full-screen-modal';
import Wrapper from 'containers/wrapper';

import Button from 'components/button';

const MobileMenuModal = ({ isOpen, close, onScrollTo }) => {
  const plausible = usePlausible();

  return (
    <FullScreenModal
      open={isOpen}
      theme="dark"
      closeBtn={false}
      onOpenChange={() => close()}
      zIndex="z-[9]"
    >
      <section className="z-10 w-full h-screen font-sans text-center text-white bg-gray-900">
        <Wrapper>
          <div className="flex flex-col pt-12 pb-32 space-y-10">
            {NAV_OPTIONS.map((o) => (
              <button
                key={o.id}
                className="text-lg text-white"
                onClick={() => {
                  close();
                  onScrollTo(o.id, true);
                  plausible('navigate-to', { props: { section: o.id } });
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
          <div className="absolute left-0 w-full px-4 bottom-4">
            <Button
              size="s"
              theme="primary"
              type="submit"
              className="w-full rounded-full"
              onClick={() => {
                close();
                onScrollTo('subscribe', true);
              }}
            >
              <p>Subscribe</p>
            </Button>
          </div>
        </Wrapper>
      </section>
    </FullScreenModal>
  );
};

export default MobileMenuModal;
