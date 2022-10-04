import React from 'react';

import cx from 'classnames';

import Head from 'next/head';

import { useHomeStore } from 'store/home';

import Cards from 'containers/home/cards';
import Intro from 'containers/home/intro';

const Home: React.FC = () => {
  const section = useHomeStore((state) => state.section);

  return (
    <div
      className={cx({
        'h-screen overflow-auto': true,
        'snap-y snap-mandatory': section === 'intro',
      })}
    >
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Intro />

      <Cards />
    </div>
  );
};

export default Home;
