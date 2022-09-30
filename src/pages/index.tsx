import React, { useState } from 'react';

import Head from 'next/head';

import Card from 'containers/home/common/card';
import Overview from 'containers/home/overview';
import Particles from 'containers/home/particles';
import Pathways from 'containers/home/pathways';
import Stories from 'containers/home/stories';
import Wrapper from 'containers/wrapper';

import Modal from 'components/modal';

const CARDS = [
  {
    key: 'overview',
    title: 'Naturebase overview',
    description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: <Overview />,
  },
  {
    key: 'stories',
    title: 'Inspiring stories',
    description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: <Stories />,
  },
  {
    key: 'pathways',
    title: 'NCS pathways',
    description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    component: <Pathways />,
  },
];

const Home: React.FC = () => {
  const [modal, setModal] = useState(null);

  return (
    <div>
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Particles />

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
            className="h-screen"
            open={modal === `${c.key}`}
            title={c.title}
            size="default"
            onOpenChange={() => setModal(null)}
            dismissable
          >
            {c.component}
          </Modal>
        );
      })}
    </div>
  );
};

export default Home;
