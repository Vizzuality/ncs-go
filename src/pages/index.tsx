import React, { useEffect } from 'react';

import cx from 'classnames';

import { useRouter } from 'next/router';

import { useHomeStore } from 'store/home';

import About from 'containers/home_old/about';
import Contact from 'containers/home_old/contact';
import FeaturedScience from 'containers/home_old/featured-science';
import Footer from 'containers/home_old/footer';
import Header from 'containers/home_old/header';
import Intro from 'containers/home_old/intro';
import Stories from 'containers/home_old/stories';
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
        description="Nature climate solutions in action."
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
