import React from 'react';

import cx from 'classnames';

import Head from 'next/head';

import { useHomeStore } from 'store/home';

import Intro from 'containers/home/intro';
import Overview from 'containers/home/overview';
import Pathways from 'containers/home/pathways';
import Stories from 'containers/home/stories';

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

      <Overview />
      <Stories />
      <Pathways />
    </div>
  );
};

export default Home;
