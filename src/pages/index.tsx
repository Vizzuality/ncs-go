import React from 'react';

import Head from 'next/head';

import About from 'containers/home/about';
import Contact from 'containers/home/contact';
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
      <About />
      <Stories />
      <Pathways />
      <Contact />
    </div>
  );
};

export default Home;
