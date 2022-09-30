import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import Card from 'containers/home/cards/card';
import Overview from 'containers/home/overview';
import Pathways from 'containers/home/pathways';
import Stories from 'containers/home/stories';
import Wrapper from 'containers/wrapper';

import Modal from 'components/modal';

import { CARDS } from './constants';

export const Cards = () => {
  const { asPath } = useRouter();
  const [modal, setModal] = useState(null);

  useEffect(() => {
    setModal(asPath.split('#')[1]);
  }, [asPath]);

  const SECTIONS = {
    overview: <Overview />,
    pathways: <Pathways />,
    stories: <Stories />,
  };

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
                  onClick={() => setModal(c.key)}
                />
              );
            })}
          </div>
        </Wrapper>
      </div>
      {CARDS.map((c) => {
        return (
          <Modal
            key={c.key}
            open={modal === `${c.key}`}
            title={c.title}
            size="default"
            onOpenChange={() => setModal(null)}
            dismissable
          >
            {SECTIONS[c.key]}
          </Modal>
        );
      })}
    </>
  );
};

export default Cards;