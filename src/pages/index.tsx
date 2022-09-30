import React from 'react';

import Head from 'next/head';

import Cards from 'containers/home/cards';
import Particles from 'containers/home/particles';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Particles />

      <Cards />
    </div>
  );
};

export default Home;
