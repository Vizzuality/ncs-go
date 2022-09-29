import React, { useState } from 'react';

import Head from 'next/head';

import Card from 'containers/home/card';
import Particles from 'containers/home/particles';
import Wrapper from 'containers/wrapper';

import Modal from 'components/modal';

const CARDS = [
  {
    key: 'overview',
    title: 'Naturebase overview',
    description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    key: 'stories',
    title: 'Inspiring stories',
    description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    key: 'pathways',
    title: 'NCS pathways',
    description: 'Brief description, lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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

      <Modal
        className="h-screen"
        open={modal === 'overview'}
        title="Overview"
        size="default"
        onOpenChange={() => setModal(null)}
        dismissable
      >
        <div className="h-screen">Overview</div>
      </Modal>
    </div>
  );
};

export default Home;
