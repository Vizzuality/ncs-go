import React, { useRef } from 'react';

import cx from 'classnames';

import Head from 'next/head';

import { useHomeStore } from 'store/home';

import { useInView } from 'framer-motion';

import About from 'containers/home/about';
import Contact from 'containers/home/contact';
import Footer from 'containers/home/footer';
import Intro from 'containers/home/intro';
import Menu from 'containers/home/menu';
import Pathways from 'containers/home/pathways';
import Stories from 'containers/home/stories';

const Home: React.FC = () => {
  const section = useHomeStore((state) => state.section);
  const ref = useRef();

  const inView = useInView(ref);

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

      {inView && <Menu />}

      <Intro />

      <div ref={ref}>
        <About />
      </div>

      <Stories />

      <Pathways />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
