import React from 'react';

import Head from 'next/head';

import Overview from 'containers/home/overview';
import Particles from 'containers/home/particles';
import Pathways from 'containers/home/pathways';
import Stories from 'containers/home/stories';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Particles />
      <Overview />
      <Stories />
      <Pathways />
    </div>
  );
};

export default Home;
