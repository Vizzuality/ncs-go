import React from 'react';

import { useRouter } from 'next/router';

import Footer from 'containers/home/footer';
import Header from 'containers/home/header';
import MetaTags from 'containers/meta-tags';
import StoriesPage from 'containers/stories-page';

const Stories = (): JSX.Element => {
  const { asPath } = useRouter();

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

      <StoriesPage />

      <Footer />
    </div>
  );
};

export default Stories;
