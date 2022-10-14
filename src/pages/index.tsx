import React from 'react';

import cx from 'classnames';

import Head from 'next/head';

import { useHomeStore } from 'store/home';

import About from 'containers/home/about';
import Contact from 'containers/home/contact';
import FeaturedScience from 'containers/home/featured-science';
import Footer from 'containers/home/footer';
import Header from 'containers/home/header';
import Intro from 'containers/home/intro';
import Stories from 'containers/home/stories';

const Home: React.FC = () => {
  const section = useHomeStore((state) => state.section);

  return (
    <div
      id="scroll-container"
      className={cx({
        'h-screen overflow-auto': true,
        'snap-y snap-mandatory': section === 'intro',
      })}
    >
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Intro />

      <Header />

      <About />

      <Stories />

      <FeaturedScience />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
