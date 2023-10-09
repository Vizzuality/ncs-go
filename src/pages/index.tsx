import React, { useEffect } from 'react';

import cx from 'classnames';

import { useRouter } from 'next/router';

import { useHomeStore } from 'store/home';

import Footer from 'containers/footer';
import About from 'containers/home/about';
import Header from 'containers/home/header';
import Intro from 'containers/home/intro';
import MetaTags from 'containers/meta-tags';

const Home: React.FC = () => {
  const { asPath } = useRouter();
  const section = useHomeStore((state) => state.section);

  useEffect(() => {
    if (asPath !== '/#subscribe') {
      setTimeout(() => {
        document.documentElement.className = cx({
          'snap-y snap-mandatory': section === 'intro',
        });
      }, 100);
    }
  }, [asPath, section]);

  return (
    <>
      <MetaTags
        name="Nature4Climate"
        title="Naturebase"
        description="Nature climate solutions in action."
        url={`${process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_URL}${asPath}`}
        type="article"
        twitterCard="summary"
        twitterSite="@Nature4Climate"
      />

      <Header />

      <Intro />

      <About />

      <Footer />
    </>
  );
};

export default Home;
