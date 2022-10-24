import React, { useEffect } from 'react';

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

  useEffect(() => {
    setTimeout(() => {
      document.documentElement.className = cx({
        'snap-y snap-mandatory': section === 'intro',
      });
    }, 100);
  }, [section]);

  return (
    <div>
      <Head>
        <title>NCS - GO</title>
      </Head>

      <Header />

      <Intro />

      <About />

      <Stories />

      <FeaturedScience />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
