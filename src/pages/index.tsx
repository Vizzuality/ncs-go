import React, { useEffect } from 'react';

import cx from 'classnames';

import { useRouter } from 'next/router';

import { useHomeStore } from 'store/home';

import About from 'containers/home/about';
import Contact from 'containers/home/contact';
import FeaturedScience from 'containers/home/featured-science';
import Footer from 'containers/home/footer';
import Header from 'containers/home/header';
import Intro from 'containers/home/intro';
import Stories from 'containers/home/stories';
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
    <div>
      <MetaTags
        name="Nature4Climate"
        title="Naturebase"
        url={`${process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_URL}${asPath}`}
        type="article"
        twitterCard="summary"
        twitterSite="@Nature4Climate"
      />

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
