import React from 'react';

import Head from 'next/head';

import Cards from 'containers/home/cards';
import Intro from 'containers/home/intro';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Intro />

      <Cards />
    </div>
  );
};

export default Home;
