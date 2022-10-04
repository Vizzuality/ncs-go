import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { useModal } from 'hooks/modals';

import Card from 'containers/home/cards/card';
import Overview from 'containers/home/overview';
import Pathways from 'containers/home/pathways';
import Stories from 'containers/home/stories';
import Wrapper from 'containers/wrapper';

import Modal from 'components/modal';

import { CARDS } from './constants';

export const Cards = () => {
  const { isOpen, open, close } = useModal();
  const [section, setSection] = useState<string>();

  return (
    <>
      <div className="w-screen overflow-x-hidden bg-gray-900">
        <Wrapper>
          <div className="flex space-x-10">
            {CARDS.map((c) => {
              return (
                <Card
                  key={c.key}
                  title={c.title}
                  description={c.description}
                  onClick={() => {
                    setSection(c.key);
                    open();
                  }}
                />
              );
            })}
          </div>
        </Wrapper>
      </div>

      <Modal
        open={isOpen}
        title="Section"
        size="default"
        onOpenChange={() => {
          setSection(null);
          close();
        }}
        dismissable
      >
        <AnimatePresence>
          {section === 'overview' && (
            <Overview key="overview" onChangeSection={setSection} section="overview" />
          )}
          {section === 'stories' && (
            <Stories key="stories" onChangeSection={setSection} section="stories" />
          )}
          {section === 'pathways' && (
            <Pathways key="pathways" onChangeSection={setSection} section="pathways" />
          )}
        </AnimatePresence>
      </Modal>
    </>
  );
};

export default Cards;
