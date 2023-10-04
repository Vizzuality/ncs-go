import React from 'react';

import Footer from 'containers/home/footer';
import Layout from 'containers/layouts';
import NewsPage from 'containers/news-page';

const News = (): JSX.Element => {
  return (
    <Layout>
      <NewsPage />
      <Footer />
    </Layout>
  );
};

export default News;
